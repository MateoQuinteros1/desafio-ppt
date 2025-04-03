import { state } from "../../src/state";
import { goTo } from "../../src/router";
import { isGithubPages } from "../../src/router";
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
        background-size: 120px 120px;
        background-image: url("https://s3-alpha-sig.figma.com/img/d2fc/d311/9aea6ee5d39e70e777bd8fec3a82c58e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UZMrBd75u-8PoVYAvCDHlwfnt9A5ZUHrXps5qi6p6t9d6i~3F96INEl4n18LksVwwPZvtRvbdQoyHZ47Mb3zQTFMQUK-bJVZ2wfTlV77KEAXUMcD5fXJIck0u~2nthAxupYO0ydcpZBEpG1XesutwrGPnYZ9LqJ9DnIC9Yzm0fyWX3bO1ajlfQWjEIvBlEhsBTyU2xGf2CSHDUSE8M5JSc8Q1p2S34gaokaXJO28orQEYngyq5fvmYLAKlz62R1jCdch3tQRSkVDDTBRCEFF~IsoWQu6WnyKpyGVNtbkcTAaKP-Qai96fGH2QpWcWznJfz5C-lPjISJsw9kHUqdzhQ__");
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

    // Cambiar las URLs de las imágenes
    const gitHubDomain = isGithubPages();
    const prefix = gitHubDomain ? "/desafio-ppt" : "";

    // Personalización de la imagen que representa el movimiento del usuario
    newUserMoveEl.src = `${prefix}/public/mano-${this.usermove}.png`;
    newUserMoveEl.classList.add(`${this.usermove}`);
    newUserMoveEl.classList.add("usermove");
    newUserMoveEl.classList.add("imagen-aparecer");

    // Personalización de la imagen que representa el movimiento de la computadora
    newComputerMoveEl.src = `${prefix}/public/mano-${this.computermove}.png`;
    newComputerMoveEl.classList.add(`${this.computermove}`);
    newComputerMoveEl.classList.add("computermove");
    newComputerMoveEl.classList.add("imagen-aparecer");

    // Agregando ambos movimientos a la página
    getMovesContainer?.appendChild(newComputerMoveEl);
    getMovesContainer?.appendChild(newUserMoveEl);

    function goToResultPage() {
      // Cambiar la ruta dependiendo del dominio
      const resultPagePath = gitHubDomain ? "/desafio-ppt/result" : "/result";
      goTo(resultPagePath);
    }

    setTimeout(() => {
      goToResultPage();
    }, 4000);
  }
}
customElements.define("move-page", Move);
