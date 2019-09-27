import './array.groupby.js';
import { repository } from './repository.js';

export class Table {
    constructor(tableElem) {
        this.templateElem = tableElem;
        this.tableElem = tableElem;
        this.clean(true);
    }

    clean(showPlaceholder) {
        let clone = this.templateElem.cloneNode(true);
        if (showPlaceholder) {
            let newRow = clone.insertRow();
            newRow.innerHTML = "<td colspan='3'>Выберите конфигурацию</td>";
        }
        this.tableElem.parentNode.replaceChild(clone, this.tableElem);
        this.tableElem = clone;
    }

    present(demands) {
        this.clean(false);

        let getPictureLink = (demandItem) => {
            const basePictureUrl = "https://e-bot.org/downloads/pic/";
            if (demandItem && demandItem.pictureUrl && typeof(demandItem.pictureUrl) == "string")
            {
                if (demandItem.pictureUrl.startsWith("http")) {
                    return demandItem.pictureUrl;
                } else {
                    return basePictureUrl + demandItem.pictureUrl;
                }
            }
            return;
        };

        let getBuyLinks = (demandItem) => {
            if (!demandItem.url || demandItem.url == "") { return []; }
            if (!Array.isArray(demandItem.url)) { demandItem.url = [demandItem.url]; }

            return demandItem.url;
        };

        let getDownloadLinks = (demandItem) => {
            const baseModelUrl = "https://e-bot.org/downloads/parts/";
            if (demandItem.modelUrl && typeof(demandItem.modelUrl) == "string")
            {
                if (demandItem.modelUrl.startsWith("http")) {
                    return [demandItem.modelUrl];
                } else {
                    return [baseModelUrl + demandItem.modelUrl];
                }
            }
            return [];
        };

        let getRequestCaption = (request) => {
            if (!request.demand) { debugger; }
            if (!request.demand.item) { debugger; }
            if (request.demand.item.caption) { return request.demand.item.caption; }
            if (request.demand.requests && request.demand.requests.length > 0) { 
                let inner = request.demand.requests.map(r => getRequestCaption(r));
                if (inner && inner.length > 0) { return inner[0]; }
            }
            if (request.demand.item.item) { return request.demand.item.id; }
            return '';
        };

        let getReason = (demand) => {
            return demand.requests
                .map(r => getRequestCaption(r) + (r.count > 1 ? '×' + r.count : ''))
                .groupBy(r => r)
                .map(g => g.values.length > 1 ? g.key + '×' + g.values.length : g.key)
                .sort()
                .join(", ");
        }

        demands
            .groupBy(demand => demand.item.groupCaption)
            .sort((a, b) => a.key.localeCompare(b.key))
            .forEach(group => {
                let row = this.tableElem.insertRow();
                row.className = "table-primary";
                let groupCaptionCell = row.insertCell();
                groupCaptionCell.colSpan = 4;
                groupCaptionCell.innerHTML = group.key;
                group.values
                    .sort((a, b) => a.item.caption.localeCompare(b.item.caption))
                    .forEach(demand => {
                        let row = this.tableElem.insertRow();
                        let imageCell = row.insertCell();
                        let nameCell = row.insertCell();
                        let quantityCell = row.insertCell();
                        let linksCell = row.insertCell();
                        let imageLink = getPictureLink(demand.item);
                        let imageTag = !!imageLink ? "<img src='" + imageLink + "' class='mr-3' alt='" + demand.item.caption + "'>" : "";
                        imageCell.innerHTML = imageTag;
                        let commentsTag = !!demand.item.comments ? "<p class='text-muted'>" + demand.item.comments + "</p>" : "";
                        nameCell.innerHTML = "<div class='media'><div class='media-body'><h5 class='mt-0'>" + demand.item.caption + "</h5>" + commentsTag + "</div></div>";
                        quantityCell.innerHTML = "<p title='" + getReason(demand) + "'>" + demand.count + "</p>";
                        let buyLinks = getBuyLinks(demand.item);
                        let downloadLinks = getDownloadLinks(demand.item);
                        if (buyLinks) {
                            linksCell.innerHTML += buyLinks
                                .map((l, i) => "<a href='" + l + "'>BUY " + (i+1) + "</a>")
                                .join();
                        }
                        if (downloadLinks) {
                            linksCell.innerHTML += downloadLinks
                                .map((l, i) => "<a href='" + l + "'>STL " + (i+1) + "</a>")
                                .join();
                        }
                    });
            });            
    }}