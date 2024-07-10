/*function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('buscador');
  filter = input.value.toUpperCase();
  carteleras = document.querySelector(".carteleras");
  peliculas = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
*/

/*<div class="search-container">
<input type="text" id="buscador" onkeyup="searchMovies()" placeholder="buscar peliculas...">
  <button id="searchButton" onclick="searchMovies()">buscar</button>
<select id="categorias">
    <option value="todos">Todos</option>
    <option value="animacion">Animación</option>
    <option value="comedia">Comedia</option>
    <option value="drama">Drama</option>
    <option value="accion">Acción</option>
    <option value="carreras">Carreras</option>
    <option value="crimen">Crimen</option>
    <option value="terror">Terror</option>
  </select>
</div>*/

/*const busqueda = document.querySelectorAll('#peliculas')*/

function buscador() {
  var input, filter, div, h4, i;
  input = document.getElementById("buscador");
  filter = input.value.toUpperCase();
  div = document.getElementById("peliculas");
  h4 = div.getElementsByTagName("h4");

  for (i = 0; i < h4.length; i++) {
    h4 = h4[i].getElementsByTagName("h4")[0];
    if (h4) {
      var palabrasEnFiltro = filter.split(' ');
      var hallado = 0;
      for (var filtro of palabrasEnFiltro) {
        if (h1.innerHTML.toUpperCase().indexOf(filtro) > -1) {
          hallado++;
        }
      }

      if (hallado === palabrasEnFiltro.length) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }

    }
  }

}
