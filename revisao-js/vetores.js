//--------------------------------
//  RAFAEL REZENDE JUNQUEIRA
//  11-02-2021 
//  ESTRUTURA DE DADOS
//  AULA 01 - REVISÃO JAVASCRIPT - comandos manipulação de vetores
//  AULA 01 - REVISÃO JAVASCRIPT - laços de repetição
//  ASSUNTO: VETORES (aula 01; 02;)
//--------------------------------

let frutas = ['banana','maçã','laranja','limão','uva','pêra','mamão','melancia','morango']
let version = 0

//PRINT : LISTA DE FRUTAS INICIAL
console.table(`LISTA DE FRUTAS v.${version} : ${frutas}`)
version++

// POP = REMOVE o ÚLTIMO  elemento do vetor

console.table('----POP----')
let ultimaFruta = frutas.pop()
console.table(`\tÚltima Fruta = ${ultimaFruta}`)
console.table(`Frutas atualizadas v.${version} = ${frutas}`)
version++

// SHIFT = REMOVE o PRIMEIRO elemento do vetor
console.table('----SHIFT----')
let primeiraFruta = frutas.shift()
console.table(`\tPrimeira Fruta = ${primeiraFruta}`)
console.table(`Frutas atualizadas v.${version} = ${frutas}`)
version++

// SPLICE = REMOVE elemento INTERMEDIÁRIO - à escolha
// SPLICE(posicaoRemoção,quantidadeElementosRemover)
//console.table(`Frutas atualizadas v.${version} = ${frutas}`)
//version++

    console.table('----SPLICE----')
    let frutaIntermediaria = frutas.splice(3,1)
    let removerFruta = 3
    console.table(`\tFruta selecionada para remoção: ${removerFruta} : ${frutaIntermediaria} `)
    console.table(`\tFruta removida: ${frutaIntermediaria}`)
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++
    
    console.table('----UNSHIFT----')
    frutas.unshift('jaboticaba')
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++

    console.table('----SPLICE INSERE UM ITEM----')
    frutas.splice(2,0,'melão') // posição, número de elementos a serem excluídos, valor inserido
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++

    console.table('----SPLICE INSERE MÚLTIPLO ITENS----')
    frutas.splice(4,0,'pêssego','tangerina') // posição, número de elementos a serem excluídos, valor inserido
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++

    console.table('----SPLICE SUBSTITUI ITENS----')
    frutas.splice(4,1,'ameixa',) // posição, número de elementos a serem excluídos, valor inserido
    console.table(`Frutas atualizadas v.${version} = ${frutas}`)
    version++

    console.log('------ ***************** ---------')
    console.log('------ ***************** ---------')
    console.log('------ LAÇOS DE REPETIÇÃO ---------')
    console.log('------ LAÇO   :   FOR ---------')

    //for tradicional
    for (let i = 0 ; i < frutas.length ; i++){
        console.log(`pos = ${i}, ${frutas[i]}`)
    }

    console.log('------ LAÇO   :   FOR INVERSO ---------')

    //for tradicional, em ordem inversa
    for (let i = frutas.length - 1 ; i>=0; i--){
        console.log(`pos = ${i}, ${frutas[i]}`)
    }

//referência para prompt: https://attacomsian.com/blog/nodejs-read-input-from-cli

    console.log('------ LAÇO   :   FOR OF (sem index) ---------')

    //for tradicional, em ordem inversa
    for (let f of frutas){
        console.log(`${f}`);
    }

    frutas.forEach(function (elemento){
        console.log(elemento);
    });

    frutas.forEach((element) => {
        console.log(element);
    });
