import { getPoint } from "./getPoint";
import * as math from "mathjs";

export function calculateEuler(eqDif, x0, a, b, nPoints) {
  const points = [getPoint(0, x0)];
  const h = (b-a) / nPoints;
  points.push({x: 0, y: x0});

  const f = (t) => {
    const replacedExpression = eqDif.replace("x", points[t].y).replace("t", t * h);
    console.log("eqDif: " + eqDif, "replaced: " + replacedExpression, h*t);
    return math.evaluate(replacedExpression);
  }

  console.log("h: ", h, "b: ", b, "a: ", a, "N: ", nPoints);

  for (let t = 0; t < nPoints; t++) {
    let yt = points[t].y + h*f(t);
    
    console.log(h*t, `x: ${h*t}; y: ${yt}`);
    points.push({x: points[t].y, y: yt});
  }
  console.log(points)
  return points;
}
