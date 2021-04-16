// O algoritmo de busca é o Busca Binária.

function k(m, n,fnComp) {
    let o = 0, p = m.length - 1, q
    while (p >= o) {
        q = Math.floor((p + o) / 2)
        if (fnComp(m[q] === n)) return q // Achou
        else if (n > m[q]) o = q + 1
        else p = q - 1
    }
    return -1  // Não existe
}

/*
    MAPEAMENTO DE VARIÁVEIS
    k -> Função/Algoritmo de busca 
    m -> Vetor utilizado na busca
    n -> Valor buscado
    o -> Posição inicial do vetor
    p -> posição final do vetor
    q -> posição intermediária do vetor

*/

//2. Importar o vetor contido em `countries.mjs` e fazer uma busca pelo valor `Brazil` 
// no campo `country`.
import { countries } from './countries.mjs'


const result = k(countries, 'Brazil',(obj) => {
    return obj.country
})

console.log(result)

console.log()

