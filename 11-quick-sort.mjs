/*

QUICK SORT - Escolhe um dos elementos do vetor para ser o pivô ( na nossa implementação , o último elemento )
e na primeira passada, divide o vetor, a partir da posição final do vetor , em um subvetor à esquerda contendo
apenas valores maiores que o pivô.

Em seguida, recursivamente, repete o processo em cada um dos subvetores até que todo o vetor esteja ordenado.
*/

let trocas, comps, pass

function quickSort(vetor, ini = 0, fim = vetor.length - 1) {
    if (fim > ini) {
        pass++
        const pivot = fim
        let div = ini - 1

        for (let i = ini; i < fim; i++) {
            if (vetor[i] < vetor[pivot]) {
                comps++
                div++
                if (i !== div) {
                    [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
                    trocas++
                }
            }
        }
        div++
        if (vetor[pivot] < vetor[div]) {
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }
        comps++

        //ordena a esquerda do pivot
        quickSort(vetor, ini, div - 1)
        //ordena a direita do pivot
        quickSort(vetor, div + 1, fim)
    }
}

trocas = 0, comps = 0, pass = 0
let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

quickSort(nums)

console.log(nums)
console.log({ trocas, comps, pass })