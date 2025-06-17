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
      background-image: url("/ppt-fondo.svg");
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
      font-family: "Roboto";
      font-weight: bold;
      font-size:36px;
      text-align: center;
      margin-bottom: 50px;
    }
    @media (min-width: 760px) {
      .instructions-title {
        padding: 0 35px;
        margin-bottom: 60px;
        font-size: 45px;
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
          <img class="scissors" src="/mano-tijeras.png" alt="scissors" />
          <img class="rock" src="/mano-piedra.png" alt="rock" />
          <img class="paper" src="/mano-papel.png" alt="paper" />
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define("instructions-page", Instructions);
