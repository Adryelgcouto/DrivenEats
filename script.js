//linkar o js com o html 
function selecionadoFood(seletor){
  console.log(seletor)
  const prato1 = document.querySelector(".selecionado")
  //marcar o prato 
  prato1.classList.remove("selecionado");
  const bntClicado = document.querySelector(seletor)
  bntClicado.classList.add("selecionado")
}
 
//fazer com que quando clicar em outro prato deselecionar o outro prato