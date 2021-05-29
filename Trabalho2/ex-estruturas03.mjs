/*
    Implemente um programa que receba números em ordem aleatória, mas os
    insira em ordem crescente em uma lista encadeada. Os números devem ser
    adicionados à lista um por vez.

    Por exemplo, inserir o número 25, a lista fica ( 25 )
    Na sequência, insira o número 14, a lista fica ( 14, 25 )
    Insira o número 19, a lista fica (14, 19, 25)
    Insira o número 3, a lista fica (3, 14, 19, 25)

    A cada inserção, o programa deve determinar a posição correta de inserção
    para manter a lista em ordem.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { LinkedList } from "../lib/LinkedList.mjs";
const orderedLinkedList = new LinkedList();

function sortedInsertion(val) {
  console.log(`\nINSERINDO O VALOR ${val}`);
  
  if (orderedLinkedList.empty) {
    // PRIMEIRA INSERÇÃO
    orderedLinkedList.insert(0, val);
    console.log(orderedLinkedList.print());
  } else {

    // DEMAIS INSERÇÕES
    // TESTE 1: VALOR A SER INSERIDO É MENOR DO QUE O VALOR NO "HEAD" DA LISTA ENCADEADA?
    // SE TRUE, O VALOR INSERIDO SE TORNA HEAD DA LISTA

    if (orderedLinkedList.peekHead() > val) {
      orderedLinkedList.insertHead(val);
    } 
    // TESTE 2: VALOR A SER INSERIDO É MAIOR DO QUE VALOR NO "TAIL" DA LISTA ENCADEADA?
    // SE TRUE, O VALOR INSERIDO SE TORNA TAIL DA LISTA

    else if (orderedLinkedList.peekTail() < val) {
      orderedLinkedList.insertTail(val);
    } 
    // TESTE 3: SE VALOR A SER INSERIDO NÃO É MENOR DO QUE HEAD, NEM MAIOR DO QUE TAIL,
    // ENTÃO ELE PERTENCE À UMA POSIÇÃO INTERMEDIÁRIA QUE DEVE SER ENCONTRADA

    else {
      // INICIO PESQUISA NA POSIÇÃO 1 DO VETOR (ISTO PORQUE O VALOR A SER INSERIDO NÃO É MENOR QUE HEAD (POSIÇÃO 0) (TESTE 1)
      let pos = 1;

      // ENQUANTO O VALOR A SER INSERIDO FOR MAIOR OU IGUAL AO VALOR DA POSIÇÃO ATUAL, INCREMENTA A POSIÇÃO A SER TESTADA (VAI PARA PRÓXIMO NODO)
      while (orderedLinkedList.peek(pos) <= val) {
        pos++;
      }
      //console.log(`pos: ${pos}`);

      // ASSIM QUE A CONDIÇÃO DE VALOR A SER INSERIDO É MAIOR OU IGUAL AO VALOR DA POSIÇÃO ATUAL
      // FOR FALSA, ISTO É, O VALOR A SER INSERIDO É MENOR DO QUE O VALOR DA POSIÇÃO ATUAL,
      // ENTÃO O NOVO VALOR É INSERIDO NA POSIÇÃO ADEQUADA DA LISTA ENCADEADA
      orderedLinkedList.insert(pos, val);
    }
    console.log(orderedLinkedList.print());
  }
}

sortedInsertion(25);
sortedInsertion(14);
sortedInsertion(19);
sortedInsertion(3);
// sortedInsertion(778);
// sortedInsertion(9187);
// sortedInsertion(10);
// sortedInsertion(11);
// sortedInsertion(100);
// sortedInsertion(9);
// sortedInsertion(15);
// sortedInsertion(2);
// sortedInsertion(75);
// sortedInsertion(995);
// sortedInsertion(500);
// sortedInsertion(-5);
// sortedInsertion(50);
// sortedInsertion(0);
// sortedInsertion(3);
