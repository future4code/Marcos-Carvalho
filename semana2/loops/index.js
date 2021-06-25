/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

10 */

/* 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
19,21,23,25,27,30 */


/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*
**
***
*** */
/* 
Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

- 💡 Dica

    Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

c) Por fim, imprima o array com os nomes dos bichinhos no console */


let quantidadeMaiorQueZero = []
let bichinhosDoUsuario = Number(prompt("Quantos animais de estimação voce tem?"))
if(bichinhosDoUsuario === 0){
  console.log("Que pena! Voce pode adotar um pet!")

  
}else if(quantidadeMaiorQueZero >0) {
  let i = 0
  let mensagem
  while (i < bichinhosDoUsuario) {
    const mensagem = prompt("Digite os nomes")
    arrayDeAnimais.push(mensagem)
    i++

  }
}
console.log("Então eles são:", arrayDeAnimais)