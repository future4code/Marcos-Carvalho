/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) *///Globo 14 horas

/* 
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */ /// Juca,SRD, IDADE 3, IDADE 3 ,JUBA,SRD, IDADE 3 NOME JUBO,SRD
///Espalhamento ou spread Existe uma sintaxe interessante, através da qual
/* conseguimos realizar uma cópia inteira de um
objeto para outro e mudar (ou adicionar), se
quisermos, apenas uma ou outra propriedade */

/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
A= dEU FALSE PQ ERA BOOLEANO, e undefined pq não foi atribuido a const de altura */



// Exemplo de entrada
/* const pessoa = {
    nome: "Marco", 
    apelidos: ["markinho", "trappster", "slumber"]
 }
 
 // Exemplo de saída
 console.log(`Meu nome  é ${pessoa.nome},e vc pode chamar de ${pessoa.apelidos} `)

 const novapessoa = {
     ...pessoa,
     apelidos: ["fome", "preguiça", "sono"]
 }
 console.log(`Meu nome  é ${pessoa.nome},e vc pode chamar de ${novapessoa.apelidos[0]}, ${novapessoa.apelidos[1]},${novapessoa.apelidos[2]}`) */

const pessoa = {
    nome: "Marcos",
    idade: 23,
    profissao: "Vagabundo"
}
const novapessoa = {
    nome: "Paul",
    idade: 23,
    profissao: "Vagabundotambém"
}
    funcao(pessoa) [nome,length,idade,profissão,length]
   
 