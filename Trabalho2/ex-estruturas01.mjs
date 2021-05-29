/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

function decToBase(dec) {
    return parseInt(dec).toString(2);
  }
  
  console.log(decToBase(6));  // 110
  console.log(decToBase(20)); // 10100
  console.log(decToBase(64)); // 1000000
  console.log(decToBase(123)); // 1111011
  console.log(decToBase(5222)); // 1010001100110
  