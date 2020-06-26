import { DomManipulation } from "./DomManipulation.js";
import { CardClass } from "./CardClass.js";

let dm = new DomManipulation();
let card = new CardClass();

export function cardValidation() {
    let inputFields = document.getElementsByTagName('input');
    for (let el of inputFields) {
        el.oninput = () => {
            el.value = el.value.replace(/\D/g, '');
            el.value = card.getFormat(el.value);
            card.isValidProvider(el.value) ? dm.removeErrorClassName(el) : dm.addErrorClassName(el);

            if (el.maxLength === el.value.length) {
                if (card.isValidNumber(el.value.replace(/ /g, ''))) {
                    dm.removeErrorClassName(el)
                    dm.focusNext('ccexp');
                } else {
                    dm.addErrorClassName(el)
                };
            }

        }
    }
}