import { calculateEuler } from "./euler";

export const eulerInfo = `#### Método de Euler

#### Implementacion en JavaScript
~~~js
import * as math from "mathjs";

export function calculateEuler(eqDif, x0, a, b, nPoints) {
  const points = [{ x: Number(a), y: Number(x0) }];
  const h = (b - a) / nPoints;

  const f = (x, t) => {
    const result = math.evaluate([\`x = \${x}\`, \`t = \${t}\`, eqDif])[2];
    return result;
  };

  let x = Number(x0);
  for (let index = 1; index <= nPoints; index++) {
    let t = index * h + Number(a);

    x = x + h * f(x, (index - 1) * h + Number(a));
    points.push({ x: t, y: x });
  }
  console.log(points);

  return points;
}
~~~
`;

export const eulerPlusInfo = `#### Método de Euler Mejorado

#### Implementacion en JavaScript
~~~js
import * as math from "mathjs";

export function calculateEulerPlus(eqDif, x0, a, b, nPoints) {
  const points = [{ x: Number(a), y: Number(x0) }];
  const h = (b - a) / nPoints;
  // points.push({ x: 0, y: x0 });

  const f = (x, t) => {
    const result = math.evaluate([\`x = \${x}\`, \`t = \${t}\`, eqDif])[2];
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
~~~

`;

export const compareInfo = `#### Comparación entre los métodos
Euler = Verde
Euler mejorado = Celeste

#### Implementacion en JavaScript (Euler)
~~~js
import * as math from "mathjs";

export function calculateEuler(eqDif, x0, a, b, nPoints) {
  const points = [{ x: Number(a), y: Number(x0) }];
  const h = (b - a) / nPoints;

  const f = (x, t) => {
    const result = math.evaluate([\`x = \${x}\`, \`t = \${t}\`, eqDif])[2];
    return result;
  };

  let x = Number(x0);
  for (let index = 1; index <= nPoints; index++) {
    let t = index * h + Number(a);

    x = x + h * f(x, (index - 1) * h + Number(a));
    points.push({ x: t, y: x });
  }
  console.log(points);

  return points;
}
~~~

#### Implementacion en JavaScript (Euler Mejorado)
~~~js
import * as math from "mathjs";

export function calculateEulerPlus(eqDif, x0, a, b, nPoints) {
  const points = [{ x: Number(a), y: Number(x0) }];
  const h = (b - a) / nPoints;
  // points.push({ x: 0, y: x0 });

  const f = (x, t) => {
    const result = math.evaluate([\`x = \${x}\`, \`t = \${t}\`, eqDif])[2];
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
~~~
`;
