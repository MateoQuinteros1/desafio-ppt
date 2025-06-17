// Tipo para las rutas, cada ruta tiene un regex para el path y una función render que devuelve un elemento HTML.
type RouterPath = {
  pathRegex: RegExp;
  pageElName: string;
};

// Definición de rutas, con tres rutas de ejemplo.
const routes: RouterPath[] = [
  {
    pathRegex: /\/$/,
    pageElName: "welcome-page",
  },
  {
    pathRegex: /\/instructions/,
    pageElName: "instructions-page",
  },
  {
    pathRegex: /\/play/,
    pageElName: "play-page",
  },
  {
    pathRegex: /\/move/,
    pageElName: "move-page",
  },
  {
    pathRegex: /\/result/,
    pageElName: "result-page",
  },
];

// Función para renderizar el contenido en base al path actual.

export function goTo(path: string) {
  window.history.pushState({}, "", path);
  renderPath(path);
}

function renderPath(path: string): void {
  console.log("Path renderizado");
  const route = routes.find((route) => route.pathRegex.test(path));

  if (route) {
    // Limpiar el contenido actual y montar el nuevo elemento.
    const root = document.body;
    if (root) {
      root.innerHTML = ""; // Limpiar contenido previo
      const newPageEl = document.createElement(route.pageElName);
      root.appendChild(newPageEl);
    }
  } else {
    console.warn(`El path '${path}' no fue encontrado.`);
  }
}

// Inicializa el router, montando la ruta inicial y escuchando cambios en la URL.
export function initRouter(): void {
  const initialPath = window.location.pathname;
  console.log(initialPath);

  // Llama a renderPath con la ruta inicial.
  renderPath(initialPath);

  window.addEventListener("popstate", function () {
    renderPath(window.location.pathname);
  });
}
