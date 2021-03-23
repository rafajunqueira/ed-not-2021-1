/*
    // FATORIAL DE UM NÚMERO
    // FUNÇÃO DE CÁLCULO DO FATORIAL, PELO MÉTODO INTERATIVO
*/

function fatorial1(n) {
    let res = 1
    for (let i = n; i > 1; i--) res *= i
    return res
}

console.log(fatorial1(5))
console.log(fatorial1(4))


// 5! = 5 * 4 * 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1 (24)
// 5! = 5 * 4!
// 5! = 5 * (5-1)!
// n! = n * (n-1)!
// 1! = 1
// 0! = 1

function fatorial2(n){
    if (n <= 1) return 1
    else return n * fatorial2(n - 1)
}

console.log(fatorial2(5))
console.log(fatorial2(4))