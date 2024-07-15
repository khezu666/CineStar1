let toggle = document.getElementById('toggle');
let iconito = document.getElementById('iconito');

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('light');
    iconito.innerHTML = '<i class="fa-solid fa-moon"></i>';
    if (checked) {
        iconito.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        iconito.innerHTML = '<i class="fa-solid fa-sun"></i>';
    };

    // guardamos el modo en localstorage.
    if(document.body.classList.contains('light')){
        localStorage.setItem('light-mode', 'true');
    }else {
        localStorage.setItem('light-mode', 'false');
    }   
});

// obtenemos el modo actual.
if (localStorage.getItem('light-mode') === 'true') {
    document.body.classList.add('light');
    iconito.innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
    document.body.classList.remove('light');
    iconito.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

/*
toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked
    document.body.classList.toggle('light');
    if(checked==true){
        iconito.innerHTML='<i class="fa-solid fa-moon"></i>';
    }else{
        iconito.innerHTML='<i class="fa-solid fa-sun"></i>';
    };

    // guardamos el modo en localstorage.
    if(document.body.classList.contains('light')){
        localStorage.setItem('light-mode', 'true');
    }else {
        localStorage.setItem('light-mode', 'false');
    }   
});

// obtenemos el modo actual.
if(localStorage.getItem('light-mode') === 'true'){
    document.body.classList.add('light');
} else {
    document.body.classList.remove('light');
}*/