export function cardValidation(){
    const inputFields = document.getElementsByTagName('input');    
    for (let el of inputFields){
        el.addEventListener('input', e => {
            el.value = el.value.replace(/\D/,'');
            el.value = el.value.replace(/(\d{4}\B)/g, '$1 ');
        })
    }
}