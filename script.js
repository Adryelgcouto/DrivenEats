//linkar o js com o html
let nomeFood = ''
let nomeDrink = ''
let nomeDessert = ''
let valorPrato = ''
let valorDrink = ''
let total = 0;
let m = ''
function verficarPedidos() {
  if (nomeFood !== '') {
    if (nomeDrink !== '') {
      if (nomeDessert !== '') {
        const btn = document.querySelector('.confirm')
        const btnDisable = document.querySelector('.realizing')
        btnDisable.classList.add('disable')
        btn.classList.remove('disable')
      }
    }
  }
}
function fecharPedido() {
  total = Number(x1) + Number(y1) + Number(z1);
  const nova = Number(total).toFixed(2)
  console.log(nova)
  const envPratoNome = document.querySelector(
    '.food .selecionado .insideCard h3'
  )
  const envDrinkNome = document.querySelector(
    '.drink .selecionado .insideCard h3'
  )
  const envDessertNome = document.querySelector(
    '.dessert .selecionado .insideCard h3'
  )
  let WhatsTxt =
    `Olá, gostaria de fazer o pedido:%0A` +
    `- Prato: ${envPratoNome.innerHTML}%0A` +
    `- Bebida: ${envDrinkNome.innerHTML}%0A` +
    `- Sobremesa: ${envDessertNome.innerHTML}%0A` +
    `Total: R$ ${nova}%0A%0A`
    console.log(total)
  ;+window.open(`https://wa.me/+5561996014439?text=${WhatsTxt}`)
}

function selecionadoFood(seletor) {
  nomeFood = seletor.innerHTML
  console.log(seletor)
  const btnSelecionado = document.querySelector('.food .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
  verficarPedidos()
  valorPrato = document.querySelector('.food .selecionado .insideCard h4')
  x1 = valorPrato.innerHTML.replace('R$', '').replace(',', '.')
  console.log(x1)
}

//fazer com que quando clicar em outro prato deselecionar o outro prato
//Drink
function selecionadoDrink(seletor) {
  nomeDrink = seletor.innerHTML
  console.log(seletor)
  const btnSelecionado = document.querySelector('.drink .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
  verficarPedidos()
  valorDrink = document.querySelector('.drink .selecionado .insideCard h4')
  y1 = valorDrink.innerHTML.replace('R$', '').replace(',', '.')
  console.log(y1)
}
//dessert
function selecionadoDessert(seletor) {
  nomeDessert = seletor.innerHTML
  console.log(seletor)
  const btnSelecionado = document.querySelector('.dessert .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
  verficarPedidos()
  valorDessert = document.querySelector('.dessert .selecionado .insideCard h4')
  z1 = valorDessert.innerHTML.replace('R$', '').replace(',', '.')
  console.log(z1)
}
