const registro = document.querySelector('.formulario');
registro.addEventListener("submit", (e)=>{
    e.preventDefault();

    /*Toma los valores de los inputs del registro como constantes*/
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const genero = document.querySelector('#genero').value;
    const fecnacimiento = document.querySelector('#fecnacimiento').value;
    const correo = document.querySelector('#correo').value;
    const usuario = document.querySelector('#usuario').value;
    const cedula = document.querySelector('#cedula').value;
    const contrasena = document.querySelector('#contrasena').value;
    const habitacion = document.querySelector('#habitacion').value;

    /*Crea un JSON con el contenido en el localStorage si hay, si no, crea un array vacío*/
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioregistrado = usuarios.find(usuarios => usuarios.usuario === usuario);
    const correoregistrado = usuarios.find(usuarios => usuarios.correo === correo);
    const cedularegistrado = usuarios.find(usuarios => usuarios.cedula === cedula);

    /*Validaciones*/
    /*Las validaciones se manejan con regex en funciones más abajo*/
    /*Primero se valida si los campos están vacíos, si estan mandan alertas, si no se realizan el resto de validaciones*/
    if(camposVacios()){    
        Swal.fire({
            icon: "error",
            title: "Por favor, llene los campos vacíos",
            confirmButtonColor: "#808080",
        }); 
        return true
    }
    else{
    valNombre();
    valApellido();
    valGenero();
    valCorreo();
    valUsuario();
    valCedula();
    valContrasena();
    valRepiteContrasena();
    valHabitacion();
    valCorrectas();
    if(valCorrectas()){
        if(usuarioregistrado || correoregistrado || cedularegistrado){
            return Swal.fire({
                icon: "error",
                title: "Este usuario ya esta registrado",
                confirmButtonColor: "#808080",
            }); 
        }
        else{
            usuarios.push({nombre:nombre, apellido:apellido, genero:genero, fecnacimiento:fecnacimiento, correo:correo, usuario:usuario, cedula:cedula, contrasena:contrasena, habitacion:habitacion});
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            Swal.fire({
                icon: "success",
                title: "Usuario registrado correctamente",
                timer: 3000,
            });
            if(document.querySelector("title") == Crud){
                window.location.href="crud.html";
            } else{
                window.location.href="index.html";
            }
            }
        }
    }
})

/*Validaciones de registro*/ 

function camposVacios(){
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const genero = document.querySelector('#genero').value;
    const fecnacimiento = document.querySelector('#fecnacimiento').value;
    const correo = document.querySelector('#correo').value;
    const usuario = document.querySelector('#usuario').value;
    const cedula = document.querySelector('#cedula').value;
    const contrasena = document.querySelector('#contrasena').value;
    const repiteContrasena = document.querySelector('#repitecontrasena').value;
    const habitacion = document.querySelector('#habitacion').value;

    if(nombre === "" || apellido === "" || genero === "" || fecnacimiento === "" || correo === "" || usuario === "" || cedula === "" || contrasena === "" || repiteContrasena === "" || habitacion === ""){
    document.getElementById('error').innerHTML = 'Debe llenar todos los campos';
    return true;
    }
    else{
        document.getElementById('error').innerHTML= '';
        return false;
    }
}

function valCorreo() {
    const correo = document.querySelector('#correo').value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!regex.test(correo)){
        document.getElementById('errorCorreo').innerHTML = 'Correo electrónico no válido.'
        return false
    }
    else{
        document.getElementById('errorCorreo').innerHTML = '';
        return true
    }
}

function valNombre(){
    const nombre = document.querySelector('#nombre').value;
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(!regex.test(nombre)){
        document.getElementById('errorNombre').innerHTML = 'Nombre no válido, elimine los numeros y símbolos.'
        return false;
    }
    else{
        document.getElementById('errorNombre').innerHTML = '';
        return true;
    }
}

function valApellido(){
    const apellido = document.querySelector('#apellido').value;
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(!regex.test(apellido)){
        document.getElementById('errorApellido').innerHTML = 'Apellido no válido, elimine los numeros y símbolos.'
        return false;
    }
    else{
        document.getElementById('errorApellido').innerHTML = '';
        return true;
    }
}

function valGenero(){
    const genero = document.querySelector('#genero').value;
    if(genero === "a"){
        document.getElementById('errorGenero').innerHTML = 'Debe seleccionar un género';
        return false;
    }
    else{
        document.getElementById('errorGenero').innerHTML = '';
        return true;
    }
}

function valNacimiento(){
    const fecnacimiento = document.querySelector('#fecnacimiento');
    const nacimiento = new Date(fecnacimiento.value);

    if (isNaN(nacimiento.getTime())) {
        return false;
    }

    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();

    const añoNacimiento = nacimiento.getFullYear();
    const mesNacimiento = nacimiento.getMonth();
    const diaNacimiento = nacimiento.getDate();

    if(añoActual - añoNacimiento >= 18){
        return true;
    } 
    else {
        if(añoActual - añoNacimiento === 17){
            if(mesActual > mesNacimiento){
            return true;
            }
            else{
                if (mesActual === mesNacimiento){
                    if (diaActual >= diaNacimiento) {
                    return true;
                }
                }
            }
        }
    }
    return false;
    }

document.querySelector('#fecnacimiento').addEventListener('input', function(){
    let mayorDeEdad = valNacimiento();
    if(!mayorDeEdad){
        document.getElementById('errorNacimiento').innerHTML = 'Debe ser mayor de edad';
        return false;
    }
    else{
        document.getElementById('errorNacimiento').innerHTML = '';
        return true;
    }
}) 

function valCedula(){
    const cedula = document.querySelector('#cedula').value;
    if(cedula.length < 7 || cedula.length > 8){
        document.getElementById('errorCedula').innerHTML = 'La cédula debe tener entre 7 y 8 numeros';
        return false;
    }
    else{
        document.getElementById('errorCedula').innerHTML = '';
        return true;
    }
}

function valUsuario(){
    const usuario = document.querySelector('#usuario').value;    
    const regex = /^[A-Za-z0-9]{1,12}$/;
    if(!regex.test(usuario)){
        document.getElementById('errorUsuario').innerHTML = 'El usuario debe tener entre 1 y 12 caracteres, sólo letras y números.'
        return false;
    }
    else{
        document.getElementById('errorUsuario').innerHTML = '';
        return true;
    }
}

function valHabitacion(){
    const habitacion = document.querySelector('#habitacion').value;
    if(habitacion.length > 200){
        document.getElementById('errorHabitacion').innerHTML = 'La descripción de la habitación debe ser breve'
        return false;
    }
    else{
        document.getElementById('errorHabitacion').innerHTML = '';
        return true;
    }
}

function valContrasena(){
    const contrasena = document.querySelector('#contrasena').value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*_/])[A-Za-z\d*_/]{8,}$/;
    if(!regex.test(contrasena)){
        document.getElementById('errorContrasena').innerHTML = 'La contraseña debe tener al menos 8 caracteres, una mayuscula y un símbolo especial (*_/).'
        return false;
    }
    else{
        document.getElementById('errorContrasena').innerHTML = '';
        return true
    }     
}

function valRepiteContrasena(){
    const contrasena = document.querySelector('#contrasena').value;
    const repiteContrasena = document.querySelector('#repitecontrasena').value;
    if(contrasena !== repiteContrasena){
        document.getElementById('errorRepitContra').innerHTML = 'Las contraseñas no coinciden.'
        return false;
    }
    else{
        document.getElementById('errorRepitContra').innerHTML = '';
        return true;
    }
}

function valCorrectas(){
    if(valNombre() && valApellido() && valGenero() && valCorreo() && valCedula() && valUsuario() && valHabitacion() && valContrasena() && valRepiteContrasena()){
        return true;
    } 
    else {
        return false;
    }
}
/*Validaciones de registro*/


