let toggle=document.getElementById('toggle');
let iconito=document.getElementById('iconito');
toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked
    document.body.classList.toggle('light');
    if(checked==true){
        iconito.innerHTML='<i class="fa-solid fa-moon"></i>';
    }else{
        iconito.innerHTML='<i class="fa-solid fa-sun"></i>';
    }
})