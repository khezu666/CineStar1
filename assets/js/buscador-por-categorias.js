// Seleciona el dropdown de categorías y el contenedor de elementos
const categoriaSelect = document.getElementById('categoria-select');
const elementosContainer = document.getElementById('elementos');

// Agrega un evento de cambio al dropdown de categorías
categoriaSelect.addEventListener('change', filtrarElementos);

// Función para filtrar elementos según la categoría seleccionada
function filtrarElementos() {
  const categoriaSeleccionada = categoriaSelect.value;
  const elementos = elementosContainer.children;

  // Oculta todos los elementos
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }

  // Muestra solo los elementos que pertenecen a la categoría seleccionada
  if (categoriaSeleccionada !== '') {
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].classList.contains(categoriaSeleccionada)) {
        elementos[i].style.display = 'block';
      }
    }
  } else {
    // Si no se seleccionó una categoría, muestra todos los elementos
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.display = 'block';
    }
  }
}