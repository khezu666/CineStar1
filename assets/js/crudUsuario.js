let data = JSON.parse(localStorage.getItem('usuarios')) || [];
/*
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
let dataTable;
let dataTableIsInitialized=false;

const dataTableOptions={
    lengthMenu:[5,10,15,20],
    columnDefs:[
        {className:"centered",targets:[0,1,2,3,4,5,6]},
        {className:"light",targets:[0,1,2,3,4,5,6]},
        {orderable:false, targets:[5,6]},
        {width: "5%", targets:[0]}
    ],
    pageLength:3,
    destroy:true,
    language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "No se encontraron resultados",
        info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registro",
        infoEmpty: "Ninguún usuario encontrado",
        infoFiltered: "(filtrado de un total de _MAX_ registros)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
}

const initDatatable = async() =>{
    if(dataTableIsInitialized){
        dataTable.destroy
    }
    await listUsers();
    dataTable=$("#datatable-users").DataTable(dataTableOptions);
    dataTableIsInitialized=true;
};

const listUsers = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        let content = ``;
        users.forEach((user, index) => {
            content+=`
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
                <td>${user.company.name}</td>
                <td><i class="fa-solid fa-check"></i></td>
                <td><button class="btn btn-sm btn-primary">
                <i class="fa-solid fa-pencil"></i></button><button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
        });
        const usuarios = document.querySelector('#tableBody_users')
        usuarios.innerHTML = content;
    }catch(ex){
        alert(ex);
    }
};

window.addEventListener("load", async () => {
await initDatatable();  
});