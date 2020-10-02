const random = (intervaloInicial = 0, intervaloFinal = 10) => () =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          Math.floor(
            Math.random() * (intervaloFinal - intervaloInicial) +
              intervaloInicial
          )
        ),
      1000
    )
  );

module.exports = random;
