let url_post = "https://script.google.com/macros/s/AKfycbw-XB0c3rGXEcCkNQIPevZ2WTjBwxzh54YHfOId9YzVXrASuWWj-XldD1nbmv2sawDH3w/exec";

let url_get = "https://script.google.com/macros/s/AKfycbwcJfZpmwfzB-zcVbSeav_i-6bajyaJ0vKTri6bYgzjgmGM2F_Nn1rshGEm8HTXMWzoLQ/exec";

let form = document.forms['agregar-pelicula']

function añadirPelícula(){
let peliculaFavorita = document.getElementById('enlace').value;
  form = document.forms['agregar-pelicula']

  if(( peliculaFavorita.endsWith('jpg')) || ( peliculaFavorita.endsWith('jpeg')) || ( peliculaFavorita.endsWith('png'))){


      fetch(url_post, { method: 'POST', body: new FormData(form)})
        .then(response =>alert('Enviado!', response))
        .catch(error => console.error('Error!', error.message))

  
    limpiarCampos();
    recargarPeliculas();

  } else {

    document.getElementById('mensajeDeError').innerHTML = 'Dirección de imagen no válida, inténtalo de nuevo';
    limpiarCampos();

  }
}

function  limpiarCampos(){
   document.getElementById('enlace').value = '';
   document.getElementById('trailer').value = '';
}

function recargarPeliculas(){
  fetch(url_get)
  .then(response => response.json())
  .then(data => {
    //console.log(data.datos);
    for (var i = 0; i < (data.datos).length; i++) {
      listado.innerHTML += `<div class="carrusel-item">
        <a href="${data.datos[i].trailer}" target="_blank"><img src="${data.datos[i].enlace}" >
  </div>` ;
    }
    
  })
  .catch(error => console.log(error));
}

form.addEventListener('submit', e => {
  e.preventDefault()
  añadirPelícula()
})

const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();
recargarPeliculas()