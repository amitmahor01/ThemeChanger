
const btn= document.getElementById('theme-change-button');
const container= document.getElementById('main-container')

btn.addEventListener('click',()=>{
    if(btn.innerText === 'Light'){
        container.style.backgroundColor='black';
        btn.innerText='Dark';

    }
    else {
        
    container.style.backgroundColor='White';
    btn.innerText='Light';
    }
})