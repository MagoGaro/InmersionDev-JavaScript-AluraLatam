let url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_QFFF2Dg6Y0O1XqUq3mIISpmLhsLYp13tWzXlg48D&currencies=EUR%2CUSD%2CCLP%2CUYU%2CBRL%2CCNY&base_currency=ARS';

function convertir(divisas){
  const moneda = document.getElementById('divisa').value;
  const monto = parseFloat(document.getElementById('valor').value);
  
  let total = 0;
  
  for (let clave in divisas){
    let temp = divisas[clave]
    
    if( temp["code"] == moneda){
      
      total = monto * divisas[clave]["value"]
      
      convirtiendo.innerHTML = `<p>Usted tiene: ${total.toFixed(2)} ${divisas[clave]["code"]}</p>`;
    }
    
  }

   
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.data);
    activar.addEventListener("click", function (e) {
      e.preventDefault();
      convertir(data.data)
    });
    
  })
  .catch(error => {
    console.error(error);
  });