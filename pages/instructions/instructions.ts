import { isGithubPages } from "../../src/router";
class Instructions extends HTMLElement {
  shadowDom = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
      <style>
    .page {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: end;
      background-size: 120px 120px;
      background-image: url("https://s3-alpha-sig.figma.com/img/d2fc/d311/9aea6ee5d39e70e777bd8fec3a82c58e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UZMrBd75u-8PoVYAvCDHlwfnt9A5ZUHrXps5qi6p6t9d6i~3F96INEl4n18LksVwwPZvtRvbdQoyHZ47Mb3zQTFMQUK-bJVZ2wfTlV77KEAXUMcD5fXJIck0u~2nthAxupYO0ydcpZBEpG1XesutwrGPnYZ9LqJ9DnIC9Yzm0fyWX3bO1ajlfQWjEIvBlEhsBTyU2xGf2CSHDUSE8M5JSc8Q1p2S34gaokaXJO28orQEYngyq5fvmYLAKlz62R1jCdch3tQRSkVDDTBRCEFF~IsoWQu6WnyKpyGVNtbkcTAaKP-Qai96fGH2QpWcWznJfz5C-lPjISJsw9kHUqdzhQ__");
    }
    @media (min-width: 760px) {
      .page {
        align-items: center;
      }
    }
    .content-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media (min-width: 760px) {
      .content-container {
        width: 420px;
        height: 600px;
      }
    }
    .instructions-title {
      font-family: "American Typewriter";
      font-weight: bold;
      font-size: 40px;
      text-align: center;
      margin-bottom: 50px;
    }
    @media (min-width: 760px) {
      .instructions-title {
        padding: 0 35px;
        margin-bottom: 60px;
        font-size: 48px;
      }
    }
    .hands-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: end;
      gap: 46px;
      margin-top: 10px;
    }

    @media (min-width: 760px) {
      .hands-container {
        gap: 80px;
      }
    }

    img {
      width: 57px;
      align-self: flex-end;
    }

    @media (min-width: 760px) {
      img {
        width: 80px;
        height: 180px;
      }
    }
    .paper {
      position: relative;
      top: 50px;
    }
    @media (min-width: 760px) {
      .paper {
        width: 110px;
        top: 107px;
      }
    }

    .rock {
      position: relative;
      top: 5px;
    }

    @media (min-width: 760px) {
      .rock {
        top: 107px;
        width: 80px;
      }
    }

    .scissors {
      position: relative;
      top: 30px;
    }
    @media (min-width: 760px) {
      .scissors {
        width: 100px;
        top: 100px;
      }
    }
  </style>
  <body>
    <div class="page">
      <div class="content-container">
        <h1 class="instructions-title">
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los
          5 segundos.
        </h1>
        <main-button goto="/play">¡Jugar!</main-button>
        <div class="hands-container">
          <img class="scissors" src="/public/mano-tijeras.png" alt="scissors" />
          <img class="rock" src="/public/mano-piedra.png" alt="rock" />
          <img class="paper" src="/public/mano-papel.png" alt="paper" />
        </div>
      </div>
    </div>
    `;
    const getButtonEl: any = this.shadowDom.querySelector("main-button");
    const images = this.shadowDom.querySelectorAll("img");

    const gitHubDomain = isGithubPages();
    if (gitHubDomain) {
      getButtonEl.setAttribute("goto", "/desafio-ppt/play");
      images.forEach((img) => {
        // Cambia la URL de cada imagen agregando el prefijo
        const originalSrc = img.getAttribute("src");
        img.setAttribute("src", `/desafio-ppt${originalSrc}`);
      });
    }
  }
}
customElements.define("instructions-page", Instructions);
