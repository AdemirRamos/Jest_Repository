//O "describe()" é uma função que serve para descrever o que se espera do teste a ser realizado.

const students = require('./students')

describe('Testes para alunos.', () => {
    it('A função deve retornar 10 quando as notas forem 5, 3 e 2.', () => {
        const notas = [5, 3, 2]
        expect(students.sum(notas)).toEqual(10)
    })

    it('A função deve retornar 0 quando uma das notas for 0.', () => {
        const notas = [1, 2, 3, 0]
        expect(students.sum(notas)).toEqual(0)
    })

    it('A função deve dobrar a nota quando o aluno tiver mais do que 5 notas.', () => {
        const notas = [1, 2, 3, 4, 5, 6, 7]
        expect(students.sum(notas)).toEqual(56)
    })

    it('A função deve dobrar a nota quando ela foi maior do que 9', () => {
        const notas = [10, 5, 3]
        expect(students.sum(notas)).toEqual(28)
    })
})
