import { repository } from './repository.js';

export class OptionSelector {
    constructor(fieldSetElem, onselection) {
        this.selectedOptions = [];
        if (typeof(fieldSetElem) === "string") {
            this.fieldSetElem = document.getElementById("fieldSetElem");
        } else if (fieldSetElem && fieldSetElem.length && fieldSetElem.length > 0) {
            this.fieldSetElem = fieldSetElem[0];
        } else {
            this.fieldSetElem = fieldSetElem;
        }
        this.fieldSetElem.addEventListener('change', () => {
            if (this.onselection) {
                this.onselection();
            }
        });
        this.onselection = onselection;
        this.createVisual();
    }

    createVisual() {
        repository.options.forEach(option => {
            if (option.variants) {
                // Единственный выбор - select
                let divElem = document.createElement("div");
                divElem.className = "form-group";
                let labelElem = document.createElement("label");
                labelElem.htmlFor = option.id;
                labelElem.innerText = option.caption;
                let selectElem = document.createElement("select");
                selectElem.className = "form-control";
                selectElem.name = option.id;
                selectElem.id = option.id;
                option.variants.forEach(variant => {
                    let optionElem = document.createElement("option");
                    optionElem.id = variant.id;
                    optionElem.value = variant.id;
                    optionElem.innerText = variant.caption;
                    selectElem.appendChild(optionElem);
                });
                divElem.appendChild(labelElem);
                divElem.appendChild(selectElem);
                this.fieldSetElem.appendChild(divElem);
            } else {
                // Опция - checkbox
                let divElem = document.createElement("div");
                divElem.className = "form-check";
                let inputElem = document.createElement("input");
                inputElem.type = "checkbox";
                inputElem.className = "form-check-input";
                inputElem.value = option.id;
                inputElem.id = option.id;
                divElem.appendChild(inputElem);
                let labelElem = document.createElement("label");
                labelElem.className = "form-check-label";
                labelElem.htmlFor = option.id;
                labelElem.innerText = option.caption;
                divElem.appendChild(labelElem);
                this.fieldSetElem.appendChild(divElem);
            }
        });
    }

    isOptionSelected(optionId) {
        let elem = document.getElementById(optionId);
        if (elem.type == "checkbox") {
            return elem.checked;
        } else if (elem.localName == "option") {
            return elem.selected;
        } else {
            return false;
        }
    }
}