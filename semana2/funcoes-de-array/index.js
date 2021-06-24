



//----------->Exercício 1<---------------
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })a- aparece uma lista com os nomes e os apelidos */
//----------->Exercício 2<---------------
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
aparece os 3 nomes ordenados com os seus sobrenomes, começando do 0 */



//----------->Exercício 3<---------------
/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
aparece uma lista com 2 números,com o nome da amanda e laíscom seus respectivos apelidos */

//----------->Exercício 4<---------------
/* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const retornaNomeDosPets = (pets) => {
    return pets.raca
   }
     const nomeDasRacas = pets.map(retornaNomeDosPets)
 console.log(nomeDasRacas)
 
     const nnomeDasRacas2 = pets.map((pets) => {
       return pets.racas
     })
     const apenasraca = pets.filter((racas, indice, array) => {
        return pets.racas === "Salsicha"
     })

     console.log("Você ganhou um cupom de desconto de 10% para tosar o/a Madame!")
     console.log("Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!")
 */
  
     const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]  
     
     
const produtosMercado = produtos.filter((produto) => {
    return produto.categoria === 'ListaDeProdutos'
  })
  
  console.log(produtosMercado)

  