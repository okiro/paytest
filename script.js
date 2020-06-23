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
        showNotification();
    };
}

function setMobileViewportHeight() {
    let el = document.getElementById('container');
    el.style.setProperty('--vh', `${ScreenSize.height()}px`);
}

window.addEventListener('resize', () => {
    setMobileViewportHeight();
    showNotification();

})

function showNotification() {
    let el = document.getElementById('notification')
    let v = window.matchMedia("(orientation: portrait)").matches;
    viewMode = (v) ? 'Portrait' : 'Landscape';
    el.textContent = `${viewMode} mode: ${ScreenSize.height()}x${ScreenSize.width()}`;
    el.className = 'show';
    setTimeout(() => { el.className = 'hide' }, 3000);
}