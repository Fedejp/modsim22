import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import React, { useEffect, useRef, useState } from "react";
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

function App() {
  const [eqDif, setEqDif] = useState("x + t");
  const [selectedMethod, setSelectedMethod] = useState("euler");
  const [initialCondition, setInitialCondition] = useState(0);
  const [intervalStart, setIntervalStart] = useState(0);
  const [intervalEnd, setIntervalEnd] = useState(1);
  const [nPoints, setPoints] = useState(10);
  const [graphDelay, setGraphDelay] = useState(0);
  const [graphPoints, setGraphPoints] = useState([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ]);

  const delayRef = useRef(graphDelay);
  const graphPointsRef = useRef(graphPoints);
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const timeouts = [];
    // setGraphPoints([dataPoints[0]]);
    for (let i = 0; i < dataPoints.length; i++) {
      timeouts.push(
        setTimeout(() => {
          setGraphPoints(...graphPoints, dataPoints[i]);
        }, graphDelay * 10 * i)
      );
    }

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [dataPoints]);

  const getPoints = (e) => {
    e.preventDefault();
    console.log(
      `Current State: ${eqDif} ${selectedMethod} ${initialCondition} ${intervalStart} ${intervalEnd} ${nPoints} ${graphDelay} `
    );
    let points = [];
    switch (selectedMethod) {
      case "euler":
        points = calculateEuler(
          eqDif,
          initialCondition,
          intervalStart,
          intervalEnd,
          nPoints
        );
        break;
      case "eulerPlus":
        points = calculateEulerPlus(
          eqDif,
          initialCondition,
          intervalStart,
          intervalEnd,
          nPoints
        );
        break;
      default:
        alert("Seleccione un metodo!");
        break;
    }

    setDataPoints(points);

    console.log(graphPoints);
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
            <LineSeries
              style={{
                strokeWidth: "4px",
                color: "black",
              }}
              opacity={0.4}
              lineStyle={{ stroke: "black" }}
              data={graphPoints}
            />
          </FlexibleXYPlot>
        </div>
      </div>
    </div>
  );
}

export default App;
