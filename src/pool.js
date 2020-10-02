const exec = (time, asyncFunction) =>
  new Promise(resolve =>
    setTimeout(async () => resolve(await asyncFunction()), time * 1000)
  );

const pool = async (
  { intervaloDeExecucao = 2, maxTimer = 10, condicao = 0 },
  asyncFunction
) => {
  let timeControle = new Date().setTime(new Date().getTime() + maxTimer * 1000);
  let result = await exec(intervaloDeExecucao, asyncFunction);
  while (condicao !== result && new Date().getTime() < timeControle) {
    result = await exec(intervaloDeExecucao, asyncFunction);
  }

  if (condicao === result) {
    return true;
  } else return false;
};

module.exports = pool;