import * as math from "mathjs";

export function calculateEuler(eqDif, x0, a, b, nPoints) {
  const points = [];
  const h = (b - a) / nPoints;

  const f = (t, x) => {
    const result = math.evaluate([`x = ${x}`, `t = ${t}`, eqDif])[2];
    return result;
  };

  let x = Number(x0);
  for (let tIndex = 0; tIndex <= nPoints; tIndex++) {
    let t = tIndex * h + Number(x0);
    x = x + h * f(t, x);
    points.push({ x: t, y: x });
  }
  console.log(points);

  return points;
}
