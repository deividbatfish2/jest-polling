const pool = require('../pool')

expect.extend({
    async deveRetornarDentroDoTempoEstipulado(asyncFunction, options) {
      const result = await pool(options, asyncFunction);
      if (result) {
        return {
          message: () => `O valor ${options.condicao} foi encontrado`,
          pass: true
        };
      } else {
        return {
          message: () =>
            `O valor ${options.condicao} NÃO foi encontrado dentro do tempo previsto (${options.maxTimer}s)`,
          pass: false
        };
      }
    }
  });