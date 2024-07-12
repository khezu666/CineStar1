const form = document.getElementById('CRUD');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const genero = document.getElementById('genero');
const fechadenacimiento = document.getElementById('fechadenacimiento');
const correo = document.getElementById('correo');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const repitecontraseña = document.getElementById('repitecontraseña');
const cedula = document.getElementById('cedula');
const habitacion = document.getElementById('habitacion');
const tablacuerpo = document.getElementById('tablacuerpo');

let data = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = nombre.value;
    const apellido = apellido.value;
    const genero = genero.value;
    const fechadenacimiento = fechadenacimiento.value;
    const correo = correo.value;
    const usuario = usuario.value;
    const contraseña = contraseña.value;
    const repitecontraseña = repitecontraseña.value;
    const cedula = cedula.value;
    const habitacion = habitacion.value;

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