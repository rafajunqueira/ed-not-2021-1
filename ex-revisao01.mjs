// /*
//     1. Identifique o algoritmo abaixo.
//     2. Comente o que faz cada uma das linhas.
//     3. Introduza a função de comparação e faça os ajustes necessários para o
//        respectivo funcionamento.
//     4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
//        por SG_UE e depois por NR_CANDIDATO.
// */
// const a = b => {
//     const c = (d, e) => {
//         let f = e
//         for(let g = e + 1; g < d.length; g++) if(d[g] < d[f]) f = g
//         return f
//     }
//     for(let h = 0; h < b.length - 1; h++) {
//         let i = c(b, h + 1)
//         if(b[h] > b[i]) [b[h], b[i]] = [b[i], b[h]]
//     }
// }

// *****************************************
//                  RESPOSTA
// *****************************************

/*
    MAPA DAS VARIÁVEIS
    a -> função de ordenação
    b -> vetor que será ordenado
    c -> subfunção
    d -> parâmetro da subfunção (vetor) 
    e -> parâmetro da subfunção (posição inicial do subvetor)
    f -> valor inicial igual variável a, posição do menor valor igual no subvetor
    g -> contador for da subfunção, começa na variável e + 1 e vai até o último valor da variável d
    h -> contador do for da função principal (ordenação - variável a), roda da posição inicial = 0 até último valor de d (variável g), respeitando o tamanho máximo do vetor (variável d)
    i -> resultado da subfunção (variável c)
*/

// 1. Identifique o algoritmo abaixo.
// R: Selection Sort

// 2. Comente o que faz cada uma das linhas.
//

// 3. Introduza a função de comparação e faça os ajustes necessários para o
//    respectivo funcionamento.

// 4.  Teste oalgoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
//     por SG_U E e depois por NR_CANDIDATO.

const a = (b, fnComp) => {
  const c = (d, e) => {
    let f = e;
    for (let g = e + 1; g < d.length; g++) if (fnComp(d[f], d[g])) f = g; // se sinal de comparação menor, inverter parâmetros -> fnComp
    return f;
  };
  for (let h = 0; h < b.length - 1; h++) {
    let i = c(b, h + 1);
    if (fnComp(b[h], b[i])) [b[h], b[i]] = [b[i], b[h]];
  }
};

import { candidatos } from "./includes/candidatos-2018.mjs";

a(candidatos, (a, b) => {
  if (a.SG_UE === b.SG_UE) {
    return a.NR_CANDIDATO > b.NR_CANDIDATO;
  } else return a.SG_UE > b.SG_UE;
});

console.log(candidatos);
