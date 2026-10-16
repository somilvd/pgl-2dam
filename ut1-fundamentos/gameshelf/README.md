# Actividad 02. Mi primera app con React

### Somil Vasandani 2ºDAM

# Sesión 1 — Preparación e interfaz

## ¿Qué es React? ¿Es un lenguaje, una biblioteca o una herramienta para crear proyectos?

React es una biblioteca de JavaScript de código abierto creada por Meta (Facebook) para construir interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

https://es.wikipedia.org/wiki/React

## ¿Qué diferencia hay entre create-vite y Vite? ¿Qué hace Vite mientras ejecutamos npm run dev? ¿Qué crees que hará npm run build?

La diferencia principal es que Vite es la herramienta de construcción y el servidor de desarrollo en sí, mientras que create-vite es el asistente o generador que se usa para crear la estructura inicial de un proyecto de Vite.

https://es.vite.dev/guide/ 

## ¿Qué son Node.js y npm? ¿Para qué usamos npm create, npm install y npm run dev?

`Node.js` es un entorno de ejecución para JavaScript que permite ejecutar código fuera del navegador. Mientras que `npm` es el gestor de paquetes oficial de `Node.js`. Viene instalado por defecto con `Node.js`

https://recursoswebyseo.com/desarrollo-web/node-js-npm-para-principiantes/ 

https://kinsta.com/es/blog/que-es-npm/

## ¿Qué son las dependencias? ¿Por qué aparece node_modules?

Las dependencias son bloques de código o librerías desarrolladas por terceros que instalas para no programar todo desde cero.
La carpeta node_modules aparece porque es el almacén físico donde se descargan automáticamente esas librerías cuando ejecutas `npm install`. `Node.js` las guarda ahí de forma local para que tu proyecto pueda utilizarlas al ejecutarse.

## ¿Qué añade TypeScript a JavaScript?

TypeScript añade tipado estático a JavaScript, lo que te obliga a definir qué tipo de dato (texto, número, objeto) guarda cada variable o recibe cada función.

## ¿Qué significan JSX y TSX?

JSX y TSX son extensiones de archivo que permiten escribir código HTML directamente dentro de JavaScript y TypeScript, facilitando la creación de interfaces visuales.
JSX significa JavaScript XML y es la sintaxis estándar utilizada en librerías como React; te permite diseñar la estructura de tu página web combinando la lógica de programación y el diseño visual en un mismo lugar. Por otro lado, TSX significa TypeScript XML y es exactamente lo mismo, pero añade la capa de tipado fuerte de TypeScript. Esto significa que TSX no solo te permite maquetar visualmente, sino que además verifica que los datos que pasas a tus componentes visuales sean los correctos antes de ejecutar la aplicación.

# 4. Investiga los archivos


| Archivo/carpeta | Pregunta para investigar | Función (con tus palabras) |
| :--- | :--- | :--- |
| index.html | ¿Qué elemento tiene id="root"? | Un contenedor `<div>` que sirve como punto de anclaje donde React monta y dibuja toda la aplicación. |
| src/main.tsx | ¿Qué componente importa? ¿Dónde aparece createRoot? | Importa el componente `App`. Usa `createRoot` al inicio para conectar la lógica de React con el HTML real. |
| src/App.tsx | ¿Qué interfaz se muestra? | Define la pantalla principal o el componente inicial que el usuario ve al cargar la aplicación. |
| src/App.css | ¿Qué reglas visuales aparecen? | Contiene los estilos visuales específicos (colores, márgenes, alineaciones) aplicados únicamente al componente App. |
| src/index.css | ¿En qué se diferencia de App.css? | Define los estilos globales de la aplicación (como la tipografía base o el fondo) que afectan a toda la web. |
| package.json | ¿Qué comandos aparecen en scripts? | Comandos de control como `dev` (para arrancar el servidor local), `build` (para compilar) y `preview`. |
| tsconfig.json | ¿Qué indica "ts"? ¿Necesitas editarlo hoy? | Indica TypeScript. Configura las reglas del compilador del lenguaje y no necesitas editarlo en este momento. |
| vite.config.ts | ¿Qué nombre de herramienta aparece? | Aparece Vite, que funciona como el motor y servidor de desarrollo rápido que empaqueta todo tu proyecto. |
| public/ y src/assets/ | ¿Qué recursos encuentras? | Archivos estáticos de la aplicación como imágenes, logotipos, iconos o fuentes** necesarias para el diseño. |
| node_modules/ | ¿Qué contiene? ¿Por qué no se sube? | Contiene las librerías externas instaladas. No se sube por su excesivo peso, ya que cualquiera puede regenerarla con `npm install`. |
| .gitignore | ¿Qué archivos o carpetas ignora Git? | Indica a Git que no rastree archivos pesados o confidenciales, excluyendo carpetas como `node_modules/` o carpetas de producción. |


# 5. Capturas que debe incluir el README.md

## Estructura del proyecto en VS Code

Estructura inicial:

![Estructura inical del proyecto](/capturas/estructura-inicial.png)

Estructura final:

![Estructura final del proyecto]()

## Primera pantalla de GameShelf

![Primera pantalla de la app](/capturas/primera-pantalla.png)

## Filtro de disponibilidad activo

## Aplicación final con el filtro de precio

# 8. Añade datos y muestra tres tarjetas

## 1. ¿Qué es una función?

Función es un bloque de código reutilizable diseñado para realizar una tarea específica.

## 2. ¿Qué diferencia hay entre definirla y llamarla?

Definir una función es escribir su código y darle un nombre. Consiste en programar las instrucciones y guardarlas en la memoria, pero el ordenador todavía no las ejecuta.
Llamar una función es ordenar al programa que se ejecute. Consiste en usar el nombre de la función para que el ordenador realice las instrucciones que habías guardado en su definición.

## 3. ¿Qué recibe el parámetro game en cada vuelta?

En cada iteración del método `.map()`, el parámetro game recibe un objeto individual del array games. Específicamente, en la primera vuelta recibe el objeto de Hollow Knight, en la segunda el de Celeste, y en la tercera el de Stardew Valley.

## 4. ¿Qué devuelve la función flecha dentro de map()?

Devuelve un componente visual `<GameCard />` configurado con las propiedades específicas (title, genre, price, available y key) extraídas del videojuego de esa vuelta. Al final, `.map()` recolecta todas estas devoluciones y genera una lista de componentes listos para renderizarse en pantalla.

Enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions 

# 9. Investiga y crea los estilos CSS

# Sesión 3 — Interactividad, documentación y publicación

# 10. Añade el filtro de disponibilidad

## 10.1 Importa y utiliza useState

Arriba de `src/App.tsx` añadí este import junto al import de App.css y GameCard:

```js
import { useState } from "react";
```

Dentro de function App(), antes de return, añadí:

```js
const [onlyAvailable, setOnlyAvailable] = useState(false);
```

## 10.2 Calcula qué juegos mostrar

Debajo del estado y antes del return, escribí:

```js
const visibleGames = onlyAvailable
  ? games.filter((game) => game.available)
  : games;
```

## 10.3 Añade el botón

Dentro del return, debajo del párrafo, añadí:

```js
<button onClick={() => setOnlyAvailable(!onlyAvailable)}>
  {onlyAvailable ? "Mostrar todos" : "Mostrar disponibles"}
</button>
```

### Qué diferencia hay entre estado y variable normal, y qué hace onClick.


+ Variable normal: Guarda el dato, pero no avisa a la pantalla. Si el valor cambia, la interfaz se queda igual y el usuario no ve ninguna actualización.
+ Estado (useState): Guarda el dato y avisa a React en cuanto cambia. Al recibir el aviso, React vuelve a pintar el componente y muestra el nuevo valor al usuario.

### ¿Qué hace onClick?

Es un botón. Detecta el momento exacto en el que el usuario pulsa un elemento y ejecuta la función que le hayas asignado.