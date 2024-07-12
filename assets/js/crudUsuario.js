/*const form = document.querySelector('#CRUD');
const tablacuerpo = document.querySelector('#tablacuerpo');

let data = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const genero = document.querySelector('#genero').value;
    const fechadenacimiento = document.querySelector('#fecnacimiento').value;
    const correo = document.querySelector('#correo').value;
    const usuario = document.querySelector('#usuario').value;
    const contraseña = document.querySelector('#contrasena').value;
    const repitecontraseña = document.querySelector('#repitecontrasena').value;
    const cedula = document.querySelector('#cedula').value;
    const habitacion = document.querySelector('#habitacion').value;

    if(nombre && apellido && genero && fechadenacimiento && correo && usuario && contraseña && repitecontraseña && cedula && habitacion) {
        const newdata = {nombre,apellido,genero,fechadenacimiento,correo,usuario,contraseña,repitecontraseña,cedula,habitacion};
        data.push(newdata);
        saveDataToLocalStorage();
        renderTable();
        form.reset();
    }
})

function saveDataToLocalStorage() {
    localStorage.setItem('formData',JSON.stringify(data))
}

function renderTable() {
    tablacuerpo.innerHTML = '';
    
    data.forEach(function(item, index){
        const row = document.createElement('tr');
        const nombreCell = createElement('td');
        const apellidoCell = createElement('td');
        const generoCell = createElement('td');
        const fechadenacimientoCell = createElement('td');
        const correoCell = createElement('td');
        const usuarioCell = createElement('td');
        const contraseñaCell = createElement('td');
        const repitecontraseñaCell = createElement('td');
        const cedulaCell = createElement('td');
        const habitacionCell = createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        nombreCell.textContent = item.nombre;
        apellidoCell.textContent = item.apellido;
        generoCell.textContent = item.genero;
        fechadenacimientoCell.textContent = item.fechadenacimiento;
        correoCell.textContent = item.correo;
        usuarioCell.textContent = item.usuario;
        contraseñaCell.textContent = item.contraseña;
        repitecontraseñaCell.textContent = item.repitecontraseña;
        cedulaCell.textContent = item.cedula;
        habitacionCell.textContent = item.habitacion;
        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete'

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(nombreCell)
        row.appendChild(apellidoCell)
        row.appendChild(generoCell)
        row.appendChild(fechadenacimientoCell)
        row.appendChild(correoCell)
        row.appendChild(usuarioCell)
        row.appendChild(contraseñaCell)
        row.appendChild(repitecontraseñaCell)
        row.appendChild(cedulaCell)
        row.appendChild(habitacionCell)
        row.appendChild(actionCell)

        tablacuerpo.appendChild(row);
    })

}

renderTable();
*/
const listUsers = async() => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data=response.json();
    }catch{ex}{
        alert(ex)
    }
}

window.addEventListener("load", async() => {
await listUsers();
});