//linkar o js com o html
let nomeFood = "";
let nomeDrink = "";
let nomeDessert = "";
function verficarPedidos(){
  if(nomeFood !== ""){
    if(nomeDrink !== ""){
      if(nomeDessert !==""){
        const btn = document.querySelector(".confirm")
        const btnDisable = document.querySelector(".realizing")
        btnDisable.classList.add("disable")
        btn.classList.remove("disable")

      }
    }
  }
}

function selecionadoFood(seletor) {
  nomeFood = seletor.innerHTML;
  console.log(seletor)
  const btnSelecionado = document.querySelector('.food .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
  verficarPedidos()
}

//fazer com que quando clicar em outro prato deselecionar o outro prato
//Drink
function selecionadoDrink(seletor) {
  nomeDrink = seletor.innerHTML;
  console.log(seletor)
  const btnSelecionado = document.querySelector('.drink .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
  verficarPedidos()
}
//dessert
function selecionadoDessert(seletor) {
  nomeDessert = seletor.innerHTML;
  console.log(seletor)
  const btnSelecionado = document.querySelector('.dessert .selecionado')
  if (btnSelecionado !== null) {
    btnSelecionado.classList.remove('selecionado')
  }
  //marcar o prato
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add('selecionado')
  verficarPedidos()
}
