//--------------------------------
//  RAFAEL REZENDE JUNQUEIRA
//  11-02-2021 
//  ESTRUTURA DE DADOS
//  AULA 01 - REVISÃO JAVASCRIPT
//  ASSUNTO: VETORES
//--------------------------------

let frutas = ['banana','maçã','laranja','limão','uva','pêra','mamão','melancia']
let version = 0

//PRINT : LISTA DE FRUTAS INICIAL
console.log(`LISTA DE FRUTAS v.${version} : ${frutas}`)
version++

// POP = REMOVE o ÚLTIMO  elemento do vetor

let ultimaFruta = frutas.pop()
console.log(`\tÚltima Fruta = ${ultimaFruta}`)
console.log(`Frutas atualizadas v.${version} = ${frutas}`)
version++

// SHIFT = REMOVE o PRIMEIRO elemento do vetor
let primeiraFruta = frutas.shift()
console.log(`\tPrimeira Fruta = ${primeiraFruta}`)
console.log(`Frutas atualizadas v.${version} = ${frutas}`)
version++

// SPLICE = REMOVE elemento INTERMEDIÁRIO - à escolha
// SPLICE(posicaoRemoção,quantidadeElementosRemover)
//console.log(`Frutas atualizadas v.${version} = ${frutas}`)
//version++

//cria prompt para input do usuário
const prompt = require('prompt');
//inicia o prompt
prompt.start();

// define properties schema
var schema = {
    properties: {
        removerFruta: {
            description: `Escolha uma fruta de 1-${frutas.length}`,
            pattern: /\d+/g,
            type: 'integer',
            message: 'Apenas valores inteiros serão aceitos',
            required: true
        }
    }
};

// ask user for the input
prompt.get(schema, (err, result) => {
    if (err) {
        throw err;
    }
// print resultado
    let frutaIntermediaria = frutas.splice(result.removerFruta-1,1)
    console.log(`\tFruta selecionada para remoção: ${result.removerFruta} : ${frutaIntermediaria} `)
    console.log(`\tFruta removida: ${frutaIntermediaria}`)
    console.log(`Frutas atualizadas v.${version} = ${frutas}`)
    version++
});


//referência para prompt: https://attacomsian.com/blog/nodejs-read-input-from-cli