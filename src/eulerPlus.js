import * as math from "mathjs";

export function calculateEulerPlus(eqDif, x0, a, b, nPoints) {
  const points = [];
  const h = (b - a) / nPoints;
  // points.push({ x: 0, y: x0 });

  const f = (t, x) => {
    const result = math.evaluate([`x = ${x}`, `t = ${t}`, eqDif])[2];
    return result;
  };

  let x = Number(x0);
  for (let tIndex = 0; tIndex <= nPoints; tIndex++) {
    let t = tIndex * h + Number(x0);
    let aproximacionX = x + h * f(t + 1, x);
    x = x + (h * (f(t, x) + f(t, aproximacionX))) / 2;

    points.push({ x: t, y: x });
  }
  console.log(points);

  return points;
}
