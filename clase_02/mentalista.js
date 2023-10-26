var numeroSecreto = parseInt(Math.random() * 1000);
let intentos = 0;

function adivinar(){
  const numero = document.getElementById("valor").value;

  if(numeroSecreto != numero){
    if(numero < numeroSecreto){
      convirtiendo.innerHTML = `<p>El número es <spam class="mayor">mayor</spam> , volve a intentar</p>`;
      intentos ++;
      convirtiendo.innerHTML += `<p>Intentos: ${intentos}</p>`;
    }else{
      convirtiendo.innerHTML = `<p>El número es <spam class="menor">menor</spam> , volve a intentar</p>`;
      intentos ++;
      convirtiendo.innerHTML += `<p>Intentos: ${intentos}</p>`;
    }
  
  }else{
    convirtiendo.innerHTML = `<p>Felicidades acertaste en: ${intentos} intentos</p>`;
  }
}

activar.addEventListener("click", function (e) {
  e.preventDefault();
  adivinar();
});

reset.addEventListener("click", function (e){
  e.preventDefault();
  location.reload();
});

/*
while(numeroDigitado != numeroSecreto) {
  var numeroDigitado = prompt('Ingrese un número entre 1 y 1000');
  //si el numeroDigitado es igual al número secreto
  if (numeroDigitado == numeroSecreto) {
    alert('¡Acertaste!');
  } else if (numeroDigitado > numeroSecreto) {
    alert('Te equivocaste... el número secreto es menor');
  } else if (numeroDigitado < numeroSecreto) {
    alert('Te equivocaste... el número secreto es mayor');
  }
}*/