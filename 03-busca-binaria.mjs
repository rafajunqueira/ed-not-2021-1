/**
 *  BUSCA BINÁRIA
 *
 * Requer um conjunto de dados ORDENADO.
 * Atua dividindo o vetor sucessivamente em metades aproximadas,
 * até que o valor pesquisado seja localizado, ou que o ponteiro
 * de fim chegue na posição anterior ao ponteiro de inicio. Essa última
 * situação indica que o valor pesquisado não existe no conjunto.
 *
 * **/

const numArray = [
    37,
    46,
    50,
    76,
    96,
    95,
    69,
    82,
    92,
    85,
    6,
    16,
    41,
    80,
    79,
    41,
    34,
    12,
    20,
    97,
    80,
    58,
    58,
    47,
    11,
    30,
    69,
    39,
    3,
    15,
    50,
    80,
    88,
    18,
    67,
    9,
    52,
    24,
    81,
    41,
    43,
    43,
    13,
    21,
    88,
    56,
    39,
    16,
    77,
    45,
    2
  ];
  
  console.log(numArray);
  
  numArray.sort((a, b) => {
    return a - b;
  });
  
  console.log(numArray, 'ordenado');

  function buscaBinaria(vetor, valorBusca) {
    let ini = 0;
    let fim = vetor.lenght - 1;
    let meio;
    while (fim >= ini) {
      meio = Math.floor((fim + ini) / 2); // arredonda para baixo caso tam. do vetor seja ímpar
      if (vetor[meio] === valorBusca) return meio;
      else if (valorBusca < vetor[meio]) fim = meio - 1;
      else ini = meio + 1;
    }
    return -1 ;
  }
  
  //console.log(numArray, " Valor pesquisado = 45");
  //console.log(buscaBinaria(numArray, 2));
  