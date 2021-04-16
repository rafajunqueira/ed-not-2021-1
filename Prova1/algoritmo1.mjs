/*
    MAPEAMENTO DAS VARIÁVEIS

    i -> variável de controle do laço for, inicia na posicial inicial do vetor (variável n)
    k -> função/algoritmo de ordenação
    m -> vetor a ser ordenado
    n -> posição inicial do vetor
    o -> posição final do vetor
    p -> pivot da função (nesta implementação, o pivot é o último elemento) 
      -- serve como parâmetro para realizar as operações de ordenação, quando o vetor é dividido em dois subvetores
    q -> posição intermediária do vetor principal

*/

//Algoritmo = QuickSort
function k(m, fnComp, n = 0, o = m.length - 1) {
    if (o <= n) return;
    const p = o;
    let q = n - 1;
    for (let i = n; i < o; i++) {
        if (fnComp(m[p], m[i])) {
            q++;
            if (i !== q) [m[i], m[q]] = [m[q], m[i]];
        }
    }
    q++;
    if (fnComp(m[p] < m[q])) [m[p], m[q]] = [m[q], m[p]];
    k(m, fnComp, n, q - 1);
    k(m, fnComp, q + 1, o);
}

// 2. Importar o vetor contido em `countries.mjs` e ordená-lo primeiro pelo campo `continent` e depois pelo campo `country`.
import { countries } from './countries.mjs'

// Ordenação por continent, depois por country
console.time('Ordenando Continentes, Países...')

k(countries, (a, b) => {
    if (a.continent === b.continent) {   // Empate no Continente
        // Empate no continente, desempate no país
        return a.country > b.country
    }
})

console.timeEnd('Ordenando Continentes, Países...')
