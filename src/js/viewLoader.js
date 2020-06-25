export async function getHtml(tag, link, callback) {
    await fetch(link)
        .then(r => r.text())
        .then(d => {
            document.querySelector(tag).innerHTML = d;
        });
    if(callback) callback();
}