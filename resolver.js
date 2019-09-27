import { repository } from './repository.js';
import './array.groupby.js';

export class Request {
    constructor(demand, count) {
        this.demand = demand;
        this.count = count;
    }
}

export class Demand {
    constructor(item, count, requests) {
        this.item = item;
        this.count = count;
        this.requests = [];
        if (requests) {
            this.requests = this.requests.concat(requests);
        }
    }

    static combine(a, b) {
        if (a.item != b.item) { throw new Error("Uncompatible parts"); }
        return new Demand(a.item, a.count + b.count, a.requests.concat(b.requests));
    }
}

export class DemandsResolver {
    constructor(optionSelector) {
        this.optionSelector = optionSelector;
    }

    collect() {
        let duplicated = this.deepResolveDemand(new Demand(repository.getById("base-frame"), 1));
        let groups = duplicated.groupBy((demand) => demand.item.id);
        let combined = groups.map((group) => group.values.reduce((a, b) => Demand.combine(a, b)));
        return combined;
    }

    deepResolveDemand(demand) {
        let resolved = this.resolveDemandReference(demand.item, demand);
        // Защита от зацикливания
        if (resolved.length == 1 && demand.item == resolved[0].item)
            return demand;
        
        // Разрешаем вглубь
        return resolved.flatMap(x => this.deepResolveDemand(x));
    }

    resolveSingleRequire(requireItem, requestingDemand) {
        if (typeof(requireItem) == "string") { requireItem = { id: requireItem, count: 1 }; }
        if (!this.checkIfCondition(requireItem.if)) { return; }
        let item = repository.getById(requireItem.id);
        if (!item) {
            console.warn("Не удалось разрешить ссылку '" + requireItem.id + "'!!!", requestingDemand);
            return;
        }

        if (!requireItem.count) { requireItem.count = 1; }
        let demandCount = !!requestingDemand ? requireItem.count * requestingDemand.count : requireItem.count;
        return new Demand(item, demandCount, new Request(requestingDemand, demandCount));
    }

    resolveRequires(requireItems, requestingDemand) {
        if (!Array.isArray(requireItems)) { requireItems = [requireItems]; }

        return requireItems
            .filter((value) => this.checkIfCondition(value.if))
            .map((value) => this.resolveSingleRequire(value, requestingDemand));
    }

    checkIfCondition(ifCondition) {
        if (!ifCondition) { return true; }
        if (!Array.isArray(ifCondition)) { ifCondition = [ifCondition]; }
        return ifCondition.every((condition) => this.optionSelector.isOptionSelected(condition));
    }

    resolveDemandReference(demandReference, requestingDemand) {
        if (demandReference.variants) {
            let variant = demandReference.variants.find((value) => this.checkIfCondition(value.if));

            if (!variant) {
                return [];
            }
    
            return this.resolveRequires(variant.require, requestingDemand);    
        } else if (demandReference.require) {
            return this.resolveRequires(demandReference.require, requestingDemand);
        } else {
            return [requestingDemand];
        }
    }
}