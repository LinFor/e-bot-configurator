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
                groupCaptionCell.colSpan = 3;
                groupCaptionCell.innerHTML = group.key;
                group.values
                    .sort((a, b) => a.item.caption.localeCompare(b.item.caption))
                    .forEach(demand => {
                        let row = this.tableElem.insertRow();
                        let nameCell = row.insertCell();
                        let quantityCell = row.insertCell();
                        let linksCell = row.insertCell();
                        let imageTag = !!demand.item.pictureUrl ? "<img src='" + demand.item.pictureUrl + "' class='mr-3' alt='" + demand.item.caption + "'>" : "";
                        nameCell.innerHTML = "<div class='media'>" + imageTag + "<div class='media-body'><h5 class='mt-0'>" + demand.item.caption + "</h5><p class='text-muted'>" + getReason(demand) + "</p></div></div>";
                        quantityCell.innerHTML = demand.count;
                    });
            });            
    }}