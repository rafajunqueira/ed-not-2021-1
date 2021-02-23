//-- Aula 22-02-2021
// Números
let a = 10, b = 8, c = 10
console.log('Números - Comparações')
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log()

//Strings
console.log('Strings - Comparações')
a = 'CATIFUNDA'
b = 'FELISBINO'
// b = 'ÁGATHA'
c = 'CATIFUNDA'

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log()

console.log('Boolean - Comparações')

a = true
b = false
c = true

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log()

// VETORES
console.log('Vetores - Comparações')
a = [10, 20, 30, 40, 50]
b = [-3, -2, -1]
c = [10, 20, 30, 40, 50]

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

// Comparações diretas de vetores dão resultados inconsistentes 
// Não é possível comparar diretamente dois vetores

console.log()
console.log('Objetos - Comparações')

// Objetos 
// Objetos também não podem ser diretamente comparados entre si

a = { marca: 'Fiat', modelo: '147', ano: 1979 }
b = { marca: 'Chevrolet', modelo: 'Chevette', ano: 1982 }
c = { marca: 'Fiat', modelo: '147', ano: 1979 }

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)


//---------
// *** CONCLUSÃO: Apenas os seguintes tipos são diretamente comparáveis entre si:
// 1)  number
// 2)  string
// 3)  boolean
//---------