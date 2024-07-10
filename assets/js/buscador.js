document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    if (e.key === "Escape") e.target.value = ""
    document.querySelectorAll('.pelicula').forEach(pelicula => {
        if (pelicula.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
        pelicula.classList.remove('filtro');
        }
        else{
          pelicula.classList.add('filtro');
        }
      })
  }
})