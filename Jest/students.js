module.exports = {
    sum: notas => {
        if(Math.min(...notas)) { //A função "Math.min()" não pode receber um "array" - por isso o uso do "spread".
            const result = notas.reduce((acc, nota) => {
                acc += nota >= 9 ? nota * 2 : nota
                return acc
            }, 0)

            return notas.length > 5 ? result * 2 : result
        }

        return 0
    }
}
