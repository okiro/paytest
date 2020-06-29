export class DomManipulation {
    get windowHeight() {
        return window.innerHeight;
    }
    get windowWidth() {
        return window.innerWidth;
    }

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

    submitButton(label, action) {
        let el = document.getElementById('submitButton');
        el.onclick = () => {
            el.textContent = label;
            action();
        };
    }

    step1success() {
        document.getElementById('step1c').className = "stepCircle cdone"
    }

    step2active() {
        document.getElementById('step2c').className = "stepCircle c2active"
    }

    disableElement(element) {
        element.disabled = true
    }

    enableElement(element) {
        element.disabled = false
    }



}