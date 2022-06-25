const módulo1 = {
    func1: (a) => a + 1,
    func2: (a, cb) => a + cb(a)
}

module.exports = módulo1
