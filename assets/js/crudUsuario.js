let data = JSON.parse(localStorage.getItem('usuarios')) || [];
console.log(data)
/*
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
*/