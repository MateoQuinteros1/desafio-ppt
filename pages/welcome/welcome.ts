class WelcomePage extends HTMLElement {
  shadowDom = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
    <div class="page">
      <div class="welcome-content__container">
        <h1 class="welcome__title">
          Piedra Papel <span class="opacityletter"> ó </span>Tijera
        </h1>
        <main-button goto="/instructions">Empezar</main-button>
        <div class="hands-container">
          <img class="paper" src="/public/mano-papel.png" alt="paper" />
          <img class="rock" src="/public/mano-piedra.png" alt="rock" />
          <img class="scissors" src="/public/mano-tijeras.png" alt="scissors" />
        </div>
      </div>
    </div>
        <style>
      .page {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        background-size: 120px 120px;
        background-image: url("https://s3-alpha-sig.figma.com/img/d2fc/d311/9aea6ee5d39e70e777bd8fec3a82c58e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UZMrBd75u-8PoVYAvCDHlwfnt9A5ZUHrXps5qi6p6t9d6i~3F96INEl4n18LksVwwPZvtRvbdQoyHZ47Mb3zQTFMQUK-bJVZ2wfTlV77KEAXUMcD5fXJIck0u~2nthAxupYO0ydcpZBEpG1XesutwrGPnYZ9LqJ9DnIC9Yzm0fyWX3bO1ajlfQWjEIvBlEhsBTyU2xGf2CSHDUSE8M5JSc8Q1p2S34gaokaXJO28orQEYngyq5fvmYLAKlz62R1jCdch3tQRSkVDDTBRCEFF~IsoWQu6WnyKpyGVNtbkcTAaKP-Qai96fGH2QpWcWznJfz5C-lPjISJsw9kHUqdzhQ__");
      }
      .welcome-content__container {
        box-sizing: border-box;
        height: 100%;
        width: 330px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      @media (min-width: 760px) {
        .welcome-content__container {
          width: 460px;
          align-items: center;
          gap: 70px;
        }
      }
      .welcome__title {
        font-size: 65px;
        font-weight: 700;
        font-family: "Slackey";
        color: #009048;
        margin-top: 70px;
        margin-bottom: 0px;
      }

      @media (min-width: 760px) {
        .welcome__title {
          font-size: 90px;
        }
      }
      .opacityletter {
        opacity: 0.6;
      }

      .hands-container {
        box-sizing: border-box;
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
          width:80px;
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
    `;
  }
}
customElements.define("welcome-page", WelcomePage);
