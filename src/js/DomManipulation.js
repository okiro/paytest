export class DomManipulation {
    focusNext(id) {
        document.getElementById(id).focus();
    }

    addErrorClassName(element) {
        element.classList.add('inputErrorIcon');
        document.getElementById('inputError').style.visibility = 'visible';
    }

    removeErrorClassName(element) {
        element.classList.remove('inputErrorIcon');
        document.getElementById('inputError').style.visibility = 'hidden';
    }


}