import * as math from "mathjs";

export function calculateEulerPlus(eqDif, x0, a, b, nPoints) {
  const points = [{ x: Number(a), y: Number(x0) }];
  const h = (b - a) / nPoints;
  // points.push({ x: 0, y: x0 });

  const f = (x, t) => {
    const der = math.derivative(eqDif, "t").toString();
    const result = math.evaluate([`x = ${x}`, `t = ${t}`, der])[2];
    return result;
  };

  let x = Number(x0);
  for (let index = 1; index <= nPoints; index++) {
    let t = index * h + Number(a);
    let aproximacionX = x + h * f(x, (index - 1) * h + Number(a));
    x = x + (h * (f(x, t) + f(aproximacionX, t))) / 2;

    points.push({ x: t, y: x });
  }
  console.log(points);

  return points;
}
