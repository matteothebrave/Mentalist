var numeroSecreto = parseInt(Math.random() * 11)
function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11)
  var elementoResultado = document.getElementById('resultado')
  var chute = parseInt(document.getElementById('valor').value)

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Acertou Mizeravi'
    elementoResultado.style.backgroundColor = 'green'
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = 'Somente de números de 0 a 10'
  } else {
    elementoResultado.innerHTML = 'Errou Rude, Jovem'
    elementoResultado.style.backgroundColor = 'red'
  }
}
