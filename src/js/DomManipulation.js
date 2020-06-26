export class DomManipulation {
    focusNext(id) {
        document.getElementById(id).focus();
    }

    addErrorClassName(element) {
        element.classList.add('inputErrorIcon');
    }

    removeErrorClassName(element) {
        element.classList.remove('inputErrorIcon');
    }


}