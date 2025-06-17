import { goTo } from "../../src/router";
import { state } from "../../src/state";

class PlayPage extends HTMLElement {
  shadowDom = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
        <div class="page">
      <div class="counter-container">
        <counter-comp></counter-comp>
      </div>
      <div class="hands-container">
        <img class="paper" src="/mano-papel.png" />
        <img class="rock" src="/mano-piedra.png" />
        <img class="scissors" src="/mano-tijeras.png" />
      </div>
    </div>
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

      .hands-container {
        display: flex;
        gap: 11px;
      }

      @media (min-width: 760px) {
        .hands-container {
          gap: 160px;
        }
      }

      .paper {
        width: 120px;
        height: 235px;
        position: relative;
        top: 170px;
      }
      @media (min-width: 760px) {
        .paper {
          top: 230px;
          width: 160px;
          height: 300px;
        }
      }
      .rock {
        width: 80px;
        position: relative;
        top: 170px;
      }
      @media (min-width: 760px) {
        .rock {
          top: 230px;
          width: 100px;
          height: 300px;
        }
      }

      .scissors {
        width: 90px;
        position: relative;
        top: 170px;
      }
      @media (min-width: 760px) {
        .scissors {
          top: 230px;
          width: 100px;
        }
      }
        img{
        cursor:grab;
        }
    </style>
    `;
    const getPaperImg: any = this.shadowDom.querySelector(".paper");
    const getRockImg: any = this.shadowDom.querySelector(".rock");
    const getScissorsImg: any = this.shadowDom.querySelector(".scissors");
    //Escuchadores de eventos para que al hacer click en una opción, las otras desaparezcan
    /*     if (gitHubDomain) {
      getPaperImg.setAttribute("src", "/desafio-ppt/public/mano-papel.png");
      getRockImg.setAttribute("src", "/desafio-ppt/public/mano-piedra.png");
      getScissorsImg.setAttribute(
        "src",
        "/desafio-ppt/public/mano-tijeras.png"
      );
    } */

    getPaperImg?.addEventListener("click", () => {
      getRockImg.style.display = "none";
      getScissorsImg.style.display = "none";
      state.setMove("papel");
    });
    getRockImg.addEventListener("click", () => {
      getPaperImg.style.display = "none";
      getScissorsImg.style.display = "none";
      state.setMove("piedra");
    });
    getScissorsImg.addEventListener("click", () => {
      getPaperImg.style.display = "none";
      getRockImg.style.display = "none";
      state.setMove("tijeras");
    });

    setTimeout(() => {
      goTo("/move");
    }, 7000);
  }
}
customElements.define("play-page", PlayPage);
