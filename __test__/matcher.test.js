const random = require("./random");
require('../src/matcher/deveRetornarDentroDoTempoEstipulado')


describe("Exemplo de cenario com falha", () => {
  test("Deve executar a função pelo tempo determinado, o teste falhará pois o intervalo passado é incoerente com a condição esperada.", async done => {
    jest.setTimeout(130000);

    await expect(random(5, 10)).deveRetornarDentroDoTempoEstipulado({
      intervaloDeExecucao: 2,
      condicao: 4,
      maxTimer: 120
    });
    done()
  });
});
