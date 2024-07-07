function modoOscuro(){
    let claro = document.querySelector('.cvcontainer');
    claro.className = 'modoOscuro';
    let navs = document.getElementsByClassName('nav-link claro');
    navs.className = 'nav-link oscuro';
}

function modoClaro(){
    let oscuro = document.querySelector('.modoOscuro');
    oscuro.className = 'cvcontainer';
    let navs = document.getElementsByClassName('nav-link oscuro');
    navs.className = 'nav-link claro';
}

function tema(){
    document.querySelector('div').getAttribute("class") === 'cvcontainer'?
    modoOscuro():modoClaro();
}

