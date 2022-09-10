# Representación aproximada de ecuaciones diferenciales

## Modelado y simulación - UADE - 2do Cuatrimestre 2022

Autores:
Federico J. Parodi
Carlos S. Yanzon

### Instalación

Prerrequisito: contar con Node v16 o superior instalado en el dispositivo.

1. Descomprimir el paquete .zip provisto en Webcampus o clonar el repositorio en una carpeta vacía.
2. Abrir una ventana de terminal, posicionarse en la carpeta donde se ha descomprimido o clonado el proyecto y ejecutar el comando npm i. En caso de que se produzca un error por la librería ‘react-vis’, agregar el argumento --force.
3. Ejecutar el comando npm run start. Se abrirá una ventana del navegador con la herramienta lista para usar. Si no es el caso, acceder a través de http://localhost:3000, o el puerto que se haya indicado.

### Uso: Representación aproximada de ecuaciones diferenciales

1. Seleccionar el método de aproximación (Euler, Euler Mejorado o Comparación)
2. Introducir la ecuación diferencial deseada. Para referencia de formato y ejemplos, dirigirse a https://mathjs.org/docs/expressions/syntax.html.
3. Indicar la condición inicial (x0)
4. Indicar el inicio del intervalo de interés (a)
5. Indicar el fin del intervalo de interés (b)
6. Indicar la cantidad de segmentos a utilizar para aproximar la función (n)
7. Clickear en “Graficar!” y analizar el resultado obtenido en el gráfico de la derecha.
   a) En la consola, se devuelven los valores de los puntos graficados tanto para Euler como para Euler mejorado.
8. Debajo del gráfico se ofrece información del método seleccionado y la implementación en Javascript del mismo, como referencia.
