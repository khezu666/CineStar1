let dataTable;
let dataTableIsInitialized=false;

const dataTableOptions={
    lengthMenu:[5,10,15,20],
    columnDefs:[
        {className:"centered",targets:[0,1,2,3,4,5,6,7,8,9]},
        {className:"light",targets:[0,1,2,3,4,5,6,7,8,9]},
        {orderable:false, targets:[8,9]},
        {width: "5%", targets:[0]}
    ],
    pageLength:10,
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
        dataTable.destroy();
    }
    await listUsers();
    dataTable=$("#datatable-users").DataTable(dataTableOptions);
    dataTableIsInitialized=true;
};

const listUsers = async () => {
    try{
        /*const response = await fetch('https://jsonplaceholder.typicode.com/users');*/
        let datos = JSON.parse(localStorage.getItem('usuarios')) || [];
        /*console.log(datos)*/
        /*const users = await response.json();*/

        let content = ``;
        /*users.forEach((user, index) => {*/
        datos.forEach((user, index) => {
            content+=`
            <tr>
                <td>${index + 1}</td>
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.usuario}</td>
                <td>${user.cedula}</td>
                <td>${user.correo}</td>
                <td>${user.genero}</td>
                <td>${user.fecnacimiento}</td>
                <td>${user.habitacion}</td>
                <td><button class="btn btn-sm btn-primary"><i class="fa-solid fa-pencil"></i></button><button class="btn btn-sm btn-danger" onclick="borrar(${user.id})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
        });
        const usuarios = document.querySelector('#tableBody_users')
        usuarios.innerHTML = content;
    }catch(ex){
        alert(ex);
    }
};

window.borrar = (id) => {
    let datos = JSON.parse(localStorage.getItem('usuarios')) || [];
    let index = datos.findIndex((user) => user.id == id);

    let validar = confirm(
        Swal.fire({
            title: '¿Está seguro/a que quiere eliminar el usuario ${datos[index].usuario}?',
            showDenyButton: true,
            confirmButtonText: "Eliminar",
            denyButtonText: 'Cancelar'
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire("Usuario Borrado", "", "Proceso exitoso");
        } else if (result.isDenied) {
            Swal.fire("Cancelado", "", "");
        }
        })
    );

    if (validar) {
    datos.splice(index, 1);
    cargarTabla();
    }
};

window.addEventListener("load", async () => {
await initDatatable();  
});
