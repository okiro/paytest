document.onreadystatechange = () =>{  
    document.readyState === 'complete'? calculateScreenSize() : null;
}

function calculateScreenSize(){
    let vh = `${window.innerWidth}px x ${window.innerHeight}px`;
    
    document.getElementById("screenSize").textContent = vh;
}

window.addEventListener('resize', () =>{    
    let vh = `${window.innerWidth}px x ${window.innerHeight}px`;
    document.getElementById("screenSize").textContent = vh;
})

 