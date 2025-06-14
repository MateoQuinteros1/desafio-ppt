import { goTo } from "../../src/router";
import { state } from "../../src/state";
import { isGithubPages } from "../../src/router";

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
        <img class="paper" src="/public/mano-papel.png" />
        <img class="rock" src="/public/mano-piedra.png" />
        <img class="scissors" src="/public/mano-tijeras.png" />
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
        background-size: 120px 120px;
        background-image: url("https://s3-alpha-sig.figma.com/img/d2fc/d311/9aea6ee5d39e70e777bd8fec3a82c58e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UZMrBd75u-8PoVYAvCDHlwfnt9A5ZUHrXps5qi6p6t9d6i~3F96INEl4n18LksVwwPZvtRvbdQoyHZ47Mb3zQTFMQUK-bJVZ2wfTlV77KEAXUMcD5fXJIck0u~2nthAxupYO0ydcpZBEpG1XesutwrGPnYZ9LqJ9DnIC9Yzm0fyWX3bO1ajlfQWjEIvBlEhsBTyU2xGf2CSHDUSE8M5JSc8Q1p2S34gaokaXJO28orQEYngyq5fvmYLAKlz62R1jCdch3tQRSkVDDTBRCEFF~IsoWQu6WnyKpyGVNtbkcTAaKP-Qai96fGH2QpWcWznJfz5C-lPjISJsw9kHUqdzhQ__");
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
    const gitHubDomain = isGithubPages();
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

    function goToMovePage() {
      // Cambiar la ruta dependiendo del dominio
      const movePagePath = gitHubDomain ? "/desafio-ppt/move" : "/move";
      goTo(movePagePath);
    }

    setTimeout(() => {
      goToMovePage();
    }, 7000);
  }
}
customElements.define("play-page", PlayPage);
