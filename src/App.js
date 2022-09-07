import "./App.css";
import { eulerInfo, eulerPlusInfo, compareInfo } from "./info";
import "../node_modules/react-vis/dist/style.css";
import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleXYPlot,
  LineSeries,
} from "react-vis";
import { calculateEuler } from "./euler";
import { calculateEulerPlus } from "./eulerPlus";
import Slider from "react-input-slider";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function App() {
  const [eqDif, setEqDif] = useState("x + t");
  const [selectedMethod, setSelectedMethod] = useState("euler");
  const [initialCondition, setInitialCondition] = useState(0);
  const [intervalStart, setIntervalStart] = useState(0);
  const [intervalEnd, setIntervalEnd] = useState(1);
  const [nPoints, setPoints] = useState(10);
  const [graphDelay, setGraphDelay] = useState(0);
  const [eulerPoints, setEulerPoints] = useState([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ]);
  const [eulerPlusPoints, setEulerPlusPoints] = useState([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ]);
  const [showEuler, setShowEuler] = useState(true);
  const [showEulerPlus, setShowEulerPlus] = useState(false);
  const [containsInfinity, setContainsInfinity] = useState(false);
  // useEffect(() => {
  //   const timeouts = [];
  //   // setGraphPoints([dataPoints[0]]);
  //   for (let i = 0; i < dataPoints.length; i++) {
  //     timeouts.push(
  //       setTimeout(() => {
  //         setGraphPoints(...graphPoints, dataPoints[i]);
  //       }, graphDelay * 10 * i)
  //     );
  //   }

  //   return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  // }, [dataPoints]);

  useEffect(() => {
    const infinityPointEuler = eulerPoints.find(
      (point) => point.x === Infinity || point.y === Infinity
    );
    const infinityPointEulerPlus = eulerPlusPoints.find(
      (point) => point.x === Infinity || point.y === Infinity
    );

    setContainsInfinity(
      infinityPointEuler !== undefined || infinityPointEulerPlus !== undefined
    );
  }, [eulerPoints, eulerPlusPoints]);

  const getPoints = (e) => {
    e.preventDefault();
    console.log(
      `Current State: ${eqDif} ${selectedMethod} ${initialCondition} ${intervalStart} ${intervalEnd} ${nPoints} ${graphDelay} `
    );
    setEulerPoints(
      calculateEuler(
        eqDif,
        initialCondition,
        intervalStart,
        intervalEnd,
        nPoints
      )
    );
    setEulerPlusPoints(
      calculateEulerPlus(
        eqDif,
        initialCondition,
        intervalStart,
        intervalEnd,
        nPoints
      )
    );
    switch (selectedMethod) {
      case "euler":
        setShowEuler(true);
        setShowEulerPlus(false);
        break;
      case "eulerPlus":
        setShowEuler(false);
        setShowEulerPlus(true);
        break;
      case "compare":
        setShowEuler(true);
        setShowEulerPlus(true);
        break;
      default:
        setShowEuler(false);
        setShowEulerPlus(false);
        alert("Seleccione un metodo!");
        break;
    }
  };

  return (
    <div className="App">
      <h1>Modelado y simulación - 2022</h1>
      <h2>Ecuaciones diferenciales</h2>
      <p>
        Este proyecto ofrece una graficadora de ecuaciones diferenciales,
        aproximadas por distintos métodos
      </p>
      <p>
        Autores: Parodi, Federico Javier (L.U.: 1089654); Yanzon, Carlos
        Santiago (L.U.: 1.089.992)
      </p>
      <div className="content">
        <div className="form">
          <h3>Inputs:</h3>
          <form onSubmit={getPoints}>
            <label>
              Método de aproximación:
              <select
                value={selectedMethod}
                onChange={(e) => setSelectedMethod(e.target.value)}
              >
                <option value="euler">Euler</option>
                <option value="eulerPlus">Euler Mejorado</option>
                <option value="compare">
                  Comparar Euler con Euler Mejorado
                </option>
              </select>
            </label>
            <label>
              Función (F(x,t))
              <input
                type="text"
                value={eqDif}
                onChange={(e) => setEqDif(e.target.value)}
              ></input>
            </label>
            <label>
              Condición inicial (X<sub>0</sub>)
              <input
                value={initialCondition}
                onChange={(e) => setInitialCondition(e.target.value)}
                type="number"
              ></input>
            </label>
            <label>
              Inicio intervalo (a)
              <input
                type="number"
                value={intervalStart}
                onChange={(e) => setIntervalStart(e.target.value)}
              ></input>
            </label>
            <label>
              Fin intervalo (b)
              <input
                type="number"
                value={intervalEnd}
                onChange={(e) => setIntervalEnd(e.target.value)}
              ></input>
            </label>
            <label>
              Número de puntos a evaluar (N)
              <input
                type="number"
                value={nPoints}
                onChange={(e) => setPoints(e.target.value)}
              ></input>
            </label>
            <div className="slider">
              <label>
                Retraso en graficación (en ms)
                <Slider
                  axis="x"
                  x={graphDelay}
                  styles={{
                    track: {
                      width: "100%",
                    },
                    active: {
                      backgroundColor: "#04AA6D",
                    },
                  }}
                  onChange={({ x }) => setGraphDelay(x)}
                />
              </label>
            </div>
            <input type="submit" value="Graficar!"></input>
          </form>
        </div>
        <div className="graph">
          <h3> Grafico aproximado: </h3>
          <FlexibleXYPlot
            width={1280}
            height={550}
            style={{
              backgroundColor: "#FFFFFF",
              position: "center",
              marginTop: 20,
              padding: 8,
            }}
            dontCheckIfEmpty={true}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            {showEuler && (
              <LineSeries
                style={{
                  strokeWidth: "4px",
                  color: "black",
                }}
                opacity={0.4}
                lineStyle={{ stroke: "black" }}
                data={eulerPoints}
              />
            )}
            {showEulerPlus && (
              <LineSeries
                style={{
                  strokeWidth: "4px",
                  color: "red",
                }}
                opacity={0.4}
                lineStyle={{ stroke: "red" }}
                data={eulerPlusPoints}
              />
            )}
            {containsInfinity && (
              <span className="error">
                {" "}
                Los parámetros introducidos han alcanzado el límite
                computacional del dispositivo. El resultado del gráfico está
                truncado.
              </span>
            )}
          </FlexibleXYPlot>
        </div>
      </div>
      <div className="info">
        <h3>Información acerca del método de aproximación</h3>
        {showEuler && <ReactMarkdown children={eulerInfo}></ReactMarkdown>}
        {showEulerPlus && (
          <ReactMarkdown children={eulerPlusInfo}></ReactMarkdown>
        )}
        {showEuler && showEulerPlus && (
          <ReactMarkdown children={compareInfo}></ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default App;
