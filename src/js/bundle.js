import { getHtml } from './viewLoader.js';
import { cardValidation } from './cardValidation.js';

getHtml('header', './views/header.html');
getHtml('main', './views/step2.html', cardValidation);
getHtml('footer', './views/footer.html');

class ScreenSize {
    static height() {
        return window.innerHeight;
    }
    static width() {
        return window.innerWidth;
    }
}

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
    el.style.setProperty('--vh', `${ScreenSize.height()}px`);
}

//removeIf(production)
function showNotification() {
    let timeoutId;
    return () => {
        clearTimeout(timeoutId);
        let el = createElement('div', 'notification');
        let v = window.matchMedia("(orientation: portrait)").matches;
        let viewMode = (v) ? 'Portrait' : 'Landscape';
        el.textContent = `${viewMode} mode: ${ScreenSize.height()}x${ScreenSize.width()}`;
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