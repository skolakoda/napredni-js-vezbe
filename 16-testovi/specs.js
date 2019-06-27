describe("Testiranje funkcije saberi:", function() {

  it("Treba da sabere dva pozitivna broja.", function() {
    const rezultat = saberi(2, 3)
    expect(rezultat).toBe(5)
  })

  it("Treba da sabere dva negativna broja.", function() {
    const rezultat = saberi(-2, -3)
    expect(rezultat).toBe(-5)
  })

  it("Ne treba da sabira tekst i broj", () => {
    const rezultat = saberi("baba", 4)
    expect(rezultat).toBeNaN()
  })

  it("Ne treba da sabira objekat i undefined", () => {
    const rezultat = saberi({}, undefined)
    expect(rezultat).toBeNaN()
  })

  it("Moze da radi sa beskonacno", () => {
    const rezultat = saberi(Infinity, 1)
    expect(rezultat).toBe(Infinity)
  })

})

describe("Testiranje funkcije pomnozi:", function() {
  it("Moze da pomnozi dva broja", () => {
    const rezultat = pomnozi(2, 4)
    expect(rezultat).toBe(8)
  })

  it("Moze da pomnozi tri broja", () => {
    const rezultat = pomnozi(2, 4, 3)
    expect(rezultat).toBe(24)
  })
})