import { DomManipulation } from "./DomManipulation.js";
import { CardClass } from "./CardClass.js";

let dm = new DomManipulation();
let card = new CardClass();

export function cardValidation() {
    let inputFields = document.getElementsByTagName('input');
    for (let el of inputFields) {
        el.oninput = (e) => {
            if (el.id === 'ccnumber') {
                el.value = el.value.replace(/\D/g, '');
                el.value = card.getCardFormat(el.value);
                card.isValidProvider(el.value) ? dm.removeErrorClassName(el) : dm.addErrorClassName(el);

                if (el.maxLength === el.value.length) {
                    if (card.isValidNumber(el.value.replace(/ /g, ''))) {
                        dm.removeErrorClassName(el)
                        dm.focusNext('ccexp');
                    } else {
                        dm.addErrorClassName(el);
                    };
                }
            }
            if (el.id === 'ccexp') {
                el.value = el.value.replace(/[^0-9\/]/g, '');
                el.value = card.getExpFormat(el.value, e.data);

                if (el.maxLength === el.value.length) {
                    if (card.isValidExpDate(el.value)) {
                        dm.removeErrorClassName(el)
                        dm.focusNext('cccvc');
                    } else {
                        dm.addErrorClassName(el);
                    }
                }
            }
            if (el.id === 'cccvc') {
                el.value = el.value.replace(/\D/g, '');
            }
        }
    }
}