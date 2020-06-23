document.onreadystatechange = () =>{  
    document.readyState === 'complete'? calculateScreenSize() : null;
}

function calculateScreenSize(){
    let vh = window.innerHeight * 0.01;
    el = document.getElementById('container');
    el.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize',()=>
{
    calculateScreenSize();

    let v = window.matchMedia("(orientation: portrait)").matches;
    viewMode = (v) ? 'portrait' : 'landscape';
    console.log(viewMode);

})
