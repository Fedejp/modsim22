export const eulerInfo = `#### Método de Euler
  Es el método de Runge-Kutta más simple: aproxima el valor de f(x,t) en “un sólo paso”. 
  
  Al evaluar la función dada en su primera derivada, se obtiene el valor de la pendiente en el punto inicial. De esta forma, ese número se puede utilizar como entrada para calcular el valor de x en el resto de los puntos del intervalo de interés (a,b).
  
  La fómula utilizada para calcular cada punto de éste método es:

  ![Formula de Euler](./../euler.png)

  …siendo k el número de paso (o iteración) del método, y h, la distancia en 't' que se avanza en cada iteración.

  Éste método genera, de forma iterativa, una poligonal que aproxima el resultado de la función f(x,t). A más grande valor de n, más cercano al valor real estará el resultado, pero más puede afectar la capacidad de cómputo del dispositivo utilizado en el redondeo del error al multiplicar por valores muy pequeños.

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
  Una forma de reducir el error en la aproximación del método de Euler es introducir el concepto de un “predictor”: el método de Euler asume que el valor de la pendiente de la función en Xk es igual al de la pendiente en Xk+1, y ésto no siempre es verdad.
  
  Recalculando ésta en ambos puntos y promediando sus valores, se puede obtener una mejor aproximación de la pendiente de la función real en el intervalo (k, k+1). Éste es un método de Runge-Kutta de grado 2.
  
  Si calculamos el valor de Xk con el método de Euler y lo llamamos X0k, podemos usarlo como *predictor* en el cálculo final de Xk, usando la fórmula:

  ![Formula de Euler Mejorado](./../eulerPlus.png)

  De esta manera, el método obtiene una poligonal que aproxima la función objetivo con menor porcentaje de error que el método de Euler simple, pero con las mismas salvedades para el tamaño de n y h.

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
Euler = Linea Verde

Euler mejorado = Linea Celeste

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
