let url_post = "https://script.google.com/macros/s/AKfycbw-XB0c3rGXEcCkNQIPevZ2WTjBwxzh54YHfOId9YzVXrASuWWj-XldD1nbmv2sawDH3w/exec";

let url_get = "https://script.google.com/macros/s/AKfycbwcJfZpmwfzB-zcVbSeav_i-6bajyaJ0vKTri6bYgzjgmGM2F_Nn1rshGEm8HTXMWzoLQ/exec";

fetch(url_get)
.then(response => response.json())
.then(data => {
  //console.log(data.datos);
  for (var i = 0; i < (data.datos).length; i++) {
    listado.innerHTML += `<div class="carrusel-item">
      <img src="${data.datos[i].enlace}" >
</div>` ;
  }
  
})
.catch(error => console.log(error));

const form = document.forms['agregar-pelicula']

function limpiar(){
  document.getElementById('enlace').value = '';
}

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(url_post, { method: 'POST', body: new FormData(form)})
    .then(response =>alert('Enviado!', response),limpiar())
    .catch(error => console.error('Error!', error.message))
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