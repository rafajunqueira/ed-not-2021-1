let pessoa = {

    nome: 'Rafael',
    sexo: 'M',
    dataNasc: '07/07/1994',
    ocupacao: 'Estudante',
    'cidade de origem': 'Franca/SP',
    gostos: ['jogos','doces','dormir']
}

console.log (pessoa.nome)
console.log (pessoa.ocupacao)
console.log (pessoa['cidade de origem'])

let x = 'sexo'
console.log(pessoa[x])

let y = 'dataNasc'
console.log(pessoa[y])

//incluindo novas propriedades ao objeto
pessoa.email = 'email@email.com'
pessoa.cel = '1699998888'

console.log(pessoa.email)
console.log(pessoa.cel)
console.log(pessoa)


//declarando novo objeto
let carro = {}

carro.marca = 'Volkswagen'
carro.modelo = 'Kombi'
carro.ano = 1971
carro['combustivel'] = 'gasolina'
carro.cor = 'bege'

console.table(carro)

//excluindo uma propriedade do objeto
delete carro.ano 

console.table(carro)
//-- Aula 22-02-2021

console.log('---------------')

//exibindo as propriedades de um objeto
for (let p in pessoa){
    console.log(p)
}

console.log('---------------')

//exibindo as propriedades de um objeto
for (let c in carro){
    console.log(c)
}
console.log('---------------')

for (let attrib in pessoa){
    console.log(attrib + ' -> ' + pessoa[attrib])
}