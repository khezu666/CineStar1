/*
const formulario = document.querySelector('.crud');
const nombreInput = document.querySelector('#nombre')
const tabla =  document.querySelector(".tabla")

let data = JSON.parse(localStorage.getItem("usuarios")) || [];

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

     const nombre = nombreInput.value;

     if(nombre){
         const newData = (nombre);
         data.push(newData);
         guardarDatos();
         actualizarTabla();
         formulario.reset();
     }
})

function guardarDatos(){
    localStorage.setItem("usuarios",JSON.stringify(data));
}

function actualizarTabla(){
    tabla.innerHTML =  ''

    data.forEach(function (item, index){
        const row = document.createElement('tr');
        const nombreCelda = document.createElement('td');

        nombreCelda = item.nombre;

        row.appendChild(nombreCelda);

        tabla.appendChild(row);
    });
}
*/

const BD = localStorage.getItem(usuarios)
