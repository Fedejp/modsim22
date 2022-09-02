export function calculateEulerPlus(
  eqDif,
  initialCondition,
  intervalStart,
  intervalEnd,
  nPoints
) {
  const t = 0;
  const f = (x, t) => {
    return eqDif(x, t);
  }

  let x = initialCondition;
  let h = (intervalEnd-intervalStart)/nPoints;
  
  let predictor = initialCondition + h*f(x, t) // (yn+1) = Yn + h*f(xn, yn)
  let fn_1 = initialCondition + (h/2)*(f(x, t) + f(x+1, predictor)) 

  let resultArray = [];
  for (let n = 0   ; n < nPoints; n++) {
    let x = initialCondition + h*n;
    let x_1 = x + h // X+1 
  }

  return [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 3, y: 3 },
  ];
}

