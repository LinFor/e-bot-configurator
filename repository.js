import {resources} from "./resources.js";
import {parts} from "./resources-parts.js";

export let repository = {
    get options() {
        return resources.options;
    },

    get variables() {
        return resources.variables;
    },

    get parts() {
        return parts.flatMap(item => {
            if (item.contents) {
                if (item.caption) {
                    item.contents.forEach(element => {
                        element.groupCaption = item.caption;
                    });
                }
                return item.contents;
            } else {
                return item;
            }
        });
    },

    get allItems() {
        return []
            .concat(this.options)
            .concat(this.variables)
            .concat(this.parts);
    },

    getPartById(partId) {
        return this.parts.find((value) => {
            return value.id == partId;
        });
    },

    getById(partId) {
        return this.allItems.find((value) => {
            return value.id == partId;
        });
    },

    isOption(item) {
        return this.options.includes(item);
    },

    isVariable(item) {
        return this.variables.includes(item);
    },

    isPart(item) {
        return this.parts.includes(item);
    }
};