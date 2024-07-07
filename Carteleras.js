document.addEventListener('keyup', e =>{
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.peliculas').forEach(pelicula => {
            pelicula.textContent.toLowerCase().includes(e.target.value)
        })
    }
})