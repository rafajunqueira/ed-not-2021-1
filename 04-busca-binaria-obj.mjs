let comps

function buscaBinaria(vetor, fnComp) {
    let ini = 0
    let fim = vetor.length - 1
    let meio
    comps = 0
    while (fim >= ini) {
        meio = Math.floor((fim + ini) / 2) // Math floor arredonda pra baixo
        switch (fnComp(vetor[meio])) {
            case 0:
                comps++
                return meio
            case 1:
                comps += 2
                ini = meio + 1
                break;
            default:
                comps += 2
                fim = meio - 1
        }
    }
    return -1 //Valor de busca não encontrado
}

const comparaNome=(obj,busca = 'FAUSTO') => {
    if (busca===obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}


import { objNomes } from './includes/vetor-obj-nomes.mjs'


console.time('Buscando LAMARA')
console.log(buscaBinaria(objNomes, (obj,busca = 'LAMARA') => {
     if (busca===obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), { comps })
console.timeEnd('Buscando LAMARA')

console.time('Buscando ZOZIMO')
console.log(buscaBinaria(objNomes, (obj,busca = 'ZOZIMO') => {
     if (busca===obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), { comps })
console.timeEnd('Buscando ZOZIMO')

console.time('Buscando ORKUTILSON')
console.log(buscaBinaria(objNomes, (obj,busca = 'ORKUTILSON') => {
     if (busca===obj.first_name) return 0
    else if (busca < obj.first_name) return -1
    else return 1
}), { comps })
console.timeEnd('Buscando ORKUTILSON')
