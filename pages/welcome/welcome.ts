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
          <img class="paper" src="/mano-papel.png" alt="paper" />
          <img class="rock" src="/mano-piedra.png" alt="rock" />
          <img class="scissors" src="/mano-tijeras.png" alt="scissors" />
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
        background-image: url("/ppt-fondo.svg");
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
