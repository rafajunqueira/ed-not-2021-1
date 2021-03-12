let trocas, pass, comps

function selectionSort(vetor, fnComp) {

    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        // Este loop vai até a última posição
        for (let j = inicio + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) menor = j
            comps++
        }
        return menor
    }

    // Percurso do vetor até a PENÚLTIMA posição
    for (let i = 0; i <= vetor.length - 2; i++) {
        pass++
        let menor = encontrarMenor(i + 1)
        if (vetor[menor] < vetor[i]) {
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
            trocas++
        }
        comps++
    }
}

// Função de comparação retorna true caso o PRIMEIRO objeto seja MAIOR que o SEGUNDO

let nums = [7, 4, 9, 6, 0, 1, 8, 2, 5, 3]

selectionSort(nums)
console.log(nums)
console.log({ trocas, pass, comps })