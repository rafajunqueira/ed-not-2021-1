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

pessoa.email = 'email@email.com'
pessoa.cel = '1699998888'

console.log(pessoa.email)
console.log(pessoa.cel)
console.log(pessoa)


let carro = {}

carro.marca = 'Volkswagen'
carro.modelo = 'Kombi'
carro.ano = 1971
carro['combustivel'] = 'gasolina'
carro.cor = 'bege'

console.table(carro)

delete carro.ano 

console.table(carro)
