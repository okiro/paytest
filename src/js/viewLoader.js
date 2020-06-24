export async function getHtml(tag, link) {
    let response = await fetch(link)
        .then(r => r.text())
        .then(d => d);
    document.querySelector(tag).innerHTML = response;
}