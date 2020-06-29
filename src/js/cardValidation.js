import { DomManipulation } from "./DomManipulation.js";
import { CardClass } from "./CardClass.js";

let dm = new DomManipulation();
let card = new CardClass();
let cardNumberError = true;
let expDateError = true;
let cvvCodeError = true;

export function cardValidation() {
    let inputFields = document.getElementsByTagName('input');
    for (let el of inputFields) {
        el.oninput = (e) => {
            if (el.id === 'ccnumber') {
                cardNumberError = true;
                el.value = el.value.replace(/\D/g, '');
                el.value = card.getCardFormat(el.value);
                card.isValidProvider(el.value) ? dm.removeErrorClassName(el) : dm.addErrorClassName(el);

                if (el.maxLength === el.value.length) {
                    if (card.isValidNumber(el.value.replace(/ /g, ''))) {
                        dm.removeErrorClassName(el)
                        dm.focusNext('ccexp');
                        cardNumberError = false;
                    } else {
                        dm.addErrorClassName(el);
                        cardNumberError = true;
                    };
                }
            }
            if (el.id === 'ccexp') {
                expDateError = true;
                el.value = el.value.replace(/[^0-9\/]/g, '');
                el.value = card.getExpFormat(el.value, e.data);

                if (el.maxLength === el.value.length) {
                    if (card.isValidExpDate(el.value)) {
                        dm.removeErrorClassName(el)
                        dm.focusNext('cccvc');
                        expDateError = false;
                    } else {
                        dm.addErrorClassName(el);
                        expDateError = true;
                    }
                }
            }
            if (el.id === 'cccvc') {
                el.value = el.value.replace(/\D/g, '');
                if (el.maxLength === el.value.length) {
                    cvvCodeError = false;
                } else {
                    cvvCodeError = true;
                }
            }
            if (!cardNumberError && !expDateError && !cvvCodeError) {
                dm.enableElement(document.getElementById('submitButton'));
            } else {
                dm.disableElement(document.getElementById('submitButton'));
            }
        }
    }
}