import { getPoint } from "./getPoint";
import * as math from "mathjs";

export function calculateEuler(eqDif, x0, a, b, nPoints) {
  const points = [getPoint(0, x0)];
  const h = (a + b) / nPoints;
  //   for (let i = 1; i < nPoints; i++) {
  //     const eulerX = a + i * h;
  //     console.log("eqDif: " + eqDif);
  //     const replacedExpression = eqDif
  //       .replace("x", points[i - 1].y)
  //       .replace("t", (i - 1) * h);
  //     console.log("replaced: " + replacedExpression);
  //     const prevValue = math.evaluate(replacedExpression);
  //     console.log("prevValue: " + replacedExpression);
  //     const eulerY = points[i - 1].y + h * prevValue;
  //     console.log(`x: ${eulerX}; y: ${eulerY}`);
  //     points.push(eulerX, eulerY);
  //   }
  return points;
}
