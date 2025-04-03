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
  // Limpiar el base path si está presente
  const cleanPath = path.replace(/^\/desafio-ppt/, "") || "/"; // Asegúrate de que no quede vacío

  const route = routes.find((route) => route.pathRegex.test(cleanPath));

  if (route) {
    // Limpiar el contenido actual y montar el nuevo elemento.
    const root = document.body;
    if (root) {
      root.innerHTML = ""; // Limpiar contenido previo
      const newPageEl = document.createElement(route.pageElName);
      root.appendChild(newPageEl);
    }
  } else {
    console.warn(`El path '${cleanPath}' no fue encontrado.`);
  }
}

// Inicializa el router, montando la ruta inicial y escuchando cambios en la URL.
export function initRouter(): void {
  const initialPath = getCleanPathFromURL();
  console.log(initialPath);

  // Llama a renderPath con la ruta inicial.
  renderPath(initialPath);

  window.addEventListener("popstate", function () {
    renderPath(window.location.pathname);
  });
}

export function getCleanPathFromURL(): string {
  const fullPath = window.location.pathname;
  const basePath = "/desafio-ppt";

  if (fullPath.startsWith(basePath)) {
    return fullPath.replace(basePath, "") || "/";
  }
  return fullPath;
}

export function isGithubPages() {
  return location.host.includes("github.io");
}
