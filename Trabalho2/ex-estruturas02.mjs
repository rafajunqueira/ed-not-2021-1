/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { Deque } from "../lib/Deque.mjs";

function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false; // texto inválido
  }

  const deque = new Deque(); // inicializa uma nova estrutura de Deque
  const lowerString = aString // converte string em letras minúsculas, remove os espaços entre a palavras (caso tenha mais de uma palavra), normaliza e susbtitui caracteres especiais ou acentos por caracteres padrão, para fazer a comparação posterior
    .toLocaleLowerCase()
    .split(" ")
    .join("")
    .normalize("NFD")
    .replace(/[^a-zA-Zs]/g, "");

  let isCharEqual = true; // flag inicia em verdadeiro, se em alguma das comparações o caracter não for idêntico ao seu equivalente (em posição, seguindo a lógica do deque), a função já retorna false (não é um palíndromo)
  let firstChar, lastChar; // primeiro caracter e último caracter: sempre serão comparados, se forem idênticos, a comparação segue para o próximo nodo (firstChar: head++, lastChar: tail--)

  for (let i = 0; i < lowerString.length; i++) {
    // laço de repetição para inserir cada caracter do texto(input) na estrutura Deque
    deque.insertBack(lowerString.charAt(i));
  }

  // Enquanto houver caracter para ser testado E flag de char idêntico for TRUE, continua com as comparações
  while (deque.size() > 1 && isCharEqual) {
    firstChar = deque.removeFront(); // firstChar recebe o caracter na posição 1 (front) e
    lastChar = deque.removeBack(); // lastChar recebe o caracter da última posição (back)
    if (firstChar !== lastChar) {
      // compara firstChar com lastChar, se for idêntico = segue no loop WHILE, se não
      isCharEqual = false; // sai do loop WHILE e retorna resultado false (não é palíndromo)
    }
  }

  return isCharEqual; // retorno da função true (é palíndromo) ou false (não é palíndromo)
}

// TESTES
console.log("x", palindromeChecker("x"));
console.log("xx", palindromeChecker("xx"));
console.log("yx", palindromeChecker("yx"));
console.log("arara", palindromeChecker("arara"));
console.log(
  "Luza Rocelina a namorada do Manuel leu na moda da Romana: anil é cor azul",
  palindromeChecker(
    "Luza Rocelina a namorada do Manuel leu na moda da Romana: anil é cor azul"
  )
);
console.log(
  "Socorram-me subi no ônibus em Marrocos",
  palindromeChecker("Socorram-me subi no ônibus em Marrocos")
);
console.log("Livre do poder vil", palindromeChecker("Livre do poder vil"));
