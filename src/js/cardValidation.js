export function cardValidation(){
    let inputFields = document.getElementsByTagName('input');  
    for (let el of inputFields){
        el.addEventListener('input', e => {
            el.value = el.value.replace(/\D/,'');
            cardNumber(el);
            expDate(el);
        })
    }
}


function cardNumber(el){
    el.value = el.value.replace(/(\d{4}\B)/g, '$1 ');
}
function expDate(el){

}