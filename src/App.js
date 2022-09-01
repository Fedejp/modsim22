import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import React from "react";
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleXYPlot,
  LineSeries,
} from "react-vis";

function App() {
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
          <form>
            <label>
              Método de aproximación:
              <select>
                <option value="euler">Euler</option>
                <option value="eulerPlus">Euler Mejorado</option>
              </select>
            </label>
            <label>
              Función (F(x,t))
              <input type="text"></input>
            </label>
            <label>
              Condición inicial (X<sub>0</sub>)<input type="number"></input>
            </label>
            <label>
              Inicio intervalo (a)
              <input type="number"></input>
            </label>
            <label>
              Fin intervalo (b)
              <input type="number"></input>
            </label>
            <label>
              Número de puntos a evaluar (N)
              <input type="number"></input>
            </label>
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
                strokeWidth: "1px",
                color: "black",
              }}
              opacity={0.4}
              lineStyle={{ stroke: "black" }}
              data={[
                { x: 0, y: 0 },
                { x: 1, y: 1 },
              ]}
              size={2}
            />
          </FlexibleXYPlot>
        </div>
      </div>
    </div>
  );
}

export default App;
