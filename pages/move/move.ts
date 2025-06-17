import { state } from "../../src/state";
import { goTo } from "../../src/router";
class Move extends HTMLElement {
  usermove: string = "";
  computermove: string = "";
  shadowDom = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.syncWithState();
  }

  syncWithState() {
    const getMovesList = state.data.moves;
    const getLastObjectPosition = getMovesList.length - 1;
    const getLastObjectMove = getMovesList[getLastObjectPosition];
    this.usermove = getLastObjectMove.usermove;
    this.computermove = getLastObjectMove.computermove;
    this.render();
  }
  render() {
    this.shadowDom.innerHTML = `
        <div class="page"></div>
    <style>
      .page {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-image: url("/ppt-fondo.svg");
      }
      .computermove {
        transform: rotate(180deg);
        position: absolute;
        top: -50px;
      }

      .usermove {
        position: absolute;
        bottom: -50px;
      }
      .piedra {
        height: 370px;
        width: 220px;
      }

      .papel {
        height: 370px;
        width: 270px;
      }
      .tijeras {
        height: 370px;
        width: 220px;
      }

      .imagen-aparecer {
        opacity: 0;
        animation: aparecer 2s ease-in forwards;
      }

      @keyframes aparecer {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    </style>
    `;
    const getMovesContainer = this.shadowDom.querySelector(".page");
    const newUserMoveEl = document.createElement("img");
    const newComputerMoveEl = document.createElement("img");

    // Personalización de la imagen que representa el movimiento del usuario
    newUserMoveEl.src = `/mano-${this.usermove}.png`;
    newUserMoveEl.classList.add(`${this.usermove}`);
    newUserMoveEl.classList.add("usermove");
    newUserMoveEl.classList.add("imagen-aparecer");

    // Personalización de la imagen que representa el movimiento de la computadora
    newComputerMoveEl.src = `/mano-${this.computermove}.png`;
    newComputerMoveEl.classList.add(`${this.computermove}`);
    newComputerMoveEl.classList.add("computermove");
    newComputerMoveEl.classList.add("imagen-aparecer");

    // Agregando ambos movimientos a la página
    getMovesContainer?.appendChild(newComputerMoveEl);
    getMovesContainer?.appendChild(newUserMoveEl);

    setTimeout(() => {
      goTo("/result");
    }, 4000);
  }
}
customElements.define("move-page", Move);
