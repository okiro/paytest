import { getHtml } from './viewLoader.js';
import { DomManipulation } from './DomManipulation.js';
import { cardValidation } from './cardValidation.js';

let currentPage = 'step1';
let dm = new DomManipulation();

function step2() {
    getHtml('main', './views/step2.html', () => {
        dm.focusNext('ccnumber');
        cardValidation();
        dm.submitButton('22.00 ₼ ÖDƏ', () => {
            if (currentPage === 'step2') {
                dm.disableElement(document.getElementById('submitButton'));
                document.getElementById('overlay').style.visibility = 'visible';
                document.getElementById('otp').src = "https://exchangeratesapi.io";
            }
        })
    })
}


getHtml('header', './views/header.html');
getHtml('main', './views/step1.html');
getHtml('footer', './views/footer.html', () => {
    dm.submitButton('22.00 ₼ ÖDƏ', () => {
        if (currentPage === 'step1') {
            step2();
            dm.step1success();
            dm.step2active();
            dm.disableElement(document.getElementById('submitButton'));
            currentPage = 'step2';
        }
    })
});


document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        setMobileViewportHeight();
    };
}
window.addEventListener('resize', () => {
    setMobileViewportHeight();
    //removeIf(production)
    showNotification()();
    //endRemoveIf(production)
})

function setMobileViewportHeight() {
    let el = document.getElementById('container');
    el.style.setProperty('--vh', `${dm.windowHeight}px`);
}

//removeIf(production)
function showNotification() {
    let timeoutId;
    return () => {
        clearTimeout(timeoutId);
        let el = createElement('div', 'notification');
        let v = window.matchMedia("(orientation: portrait)").matches;
        let viewMode = (v) ? 'Portrait' : 'Landscape';
        el.textContent = `${viewMode} mode: ${dm.windowHeigh}x${dm.windowWidth}`;
        el.className = 'show';
        timeoutId = setTimeout(() => { el.className = 'hide' }, 2000);
    }
}

function createElement(elementName, elemendId = '') {
    if (elemendId != '') {
        let foundEl = document.getElementById(elemendId);
        if (foundEl) {
            return foundEl;
        }
    }
    let el = document.createElement(elementName);
    el.setAttribute('id', elemendId);
    document.body.appendChild(el);
    return el;
}
//endRemoveIf(production)