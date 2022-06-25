const módulo1 = require('./módulo1')

describe('basic feature', () => {
    it('The function must return one specified number plus 1.', () => {
        expect(módulo1.func1(10)).toBe(11)

        //É importante verificar se os testes também retornam erros.
    })

    it('The second function must return one the sum of a value plus \'cb\' receiving another value.', () => {
        const cb = jest.fn()
        cb.mockReturnValue(1)
        expect(módulo1.func2(10, cb)).toBe(11)
        expect(cb.mock.calls[0][0]).toBe(10)
        console.log(cb.mock.calls)
    })
})

//Para rodar um teste, use o comando a seguir (sem aspas): "npm test".
