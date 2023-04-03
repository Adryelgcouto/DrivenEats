//linkar o js com o html
function selecionadoFood(seletor) {
  console.log(seletor)
  const btnSelecionado = document.querySelector('.food .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
}

//fazer com que quando clicar em outro prato deselecionar o outro prato
//Drink
function selecionadoDrink(seletor) {
  console.log(seletor)
  const btnSelecionado = document.querySelector('.drink .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
}
//dessert
function selecionadoDessert(seletor) {
  console.log(seletor)
  const btnSelecionado = document.querySelector('.dessert .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
}
