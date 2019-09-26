import { OptionSelector } from './option-selector.js';
import { DemandsResolver } from './resolver.js';
import { Table } from './table.js';

document.addEventListener("DOMContentLoaded", () => {
    let optionSelector = new OptionSelector(document.getElementById("option-selector"));
    let resolver = new DemandsResolver(optionSelector);
    let table = new Table(document.getElementById("results-table"));
    optionSelector.onselection = () => {
        let results = resolver.collect();
        console.log(results);
        table.present(results);
    };
});