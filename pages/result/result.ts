import { state } from "../../src/state";
class Result extends HTMLElement {
  winner: string | undefined = "";
  userscore: number = 0;
  computerscore: number = 0;
  shadowDom = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.syncWithState();
  }

  syncWithState() {
    const getMovesList = state.data.moves;
    const getLastMovePosition = getMovesList.length - 1;
    const getLastObjectMove = getMovesList[getLastMovePosition];
    this.winner = getLastObjectMove.winner;
    this.userscore = state.data.points.user;
    this.computerscore = state.data.points.computer;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
        <div class="page">
      <div class="content-container">
        <div class="star-container"></div>
        <div class="score">
          <h1 class="score__title">Score</h1>
          <div class="scores-container">
            <p class="userscore">Vos: ${this.userscore}</p>
            <p class="computerscore">Máquina: ${this.computerscore}</p>
          </div>
        </div>
        <main-button goto="/welcome">Volver a jugar</main-button>
      </div>
    </div>
  <style>
  *{
  overflow:hidden;
  }
    .loser-background {
      background-color: #894949e5;
    }

    .winner-background {
      background-color: #888949e5;
    }

     .draw-background {
      background-color:#deb223;
    }

    .page {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    @media(min-width:760px){
    .page{
    align-items:center;
    }
    }
    .content-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .score {
      width: 259px;
      height: 217px;
      background-color: white;
      border: 10px solid;
      border-radius: 10px;
      padding-right: 18px;
      margin-bottom: 27px;
    }

    .score__title {
      font-family: "Odibee Sans";
      font-weight: 400;
      font-size: 55px;
      letter-spacing: 2px;
      text-align: center;
      margin-top: 0px;
      margin-bottom: 0px;
    }

    .scores-container {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 10px;
    }
    .userscore {
      align-self: flex-end;
      justify-self: flex-start;
      margin: 0;
      font-family: "Odibee Sans";
      font-weight: 400;
      font-size: 45px;
      letter-spacing: 2px;
    }
    .computerscore {
      align-self: flex-end;
      margin: 0;
      font-family: "Odibee Sans";
      font-weight: 400;
      font-size: 45px;
      letter-spacing: 2px;
    }
  </style>`;
    const getPage = this.shadowDom.querySelector(".page");
    const getStarContainer = this.shadowDom.querySelector(".star-container");
    /*Dependiendo el valor de this.winner, que es el resultado de la jugada,
    cambia la estrella y el color de fondo*/
    if (this.winner == "user") {
      const newWinnerStarEl = document.createElement("winner-star");
      getStarContainer?.appendChild(newWinnerStarEl);
      getPage?.classList.add("winner-background");
    } else if (this.winner == "computer") {
      const newLoserStarEl = document.createElement("loser-star");
      getStarContainer?.appendChild(newLoserStarEl);
      getPage?.classList.add("loser-background");
    } else if (this.winner == "draw") {
      const newDrawStarEL = document.createElement("draw-star");
      getStarContainer?.appendChild(newDrawStarEL);
      getPage?.classList.add("draw-background");
    }
  }
}
customElements.define("result-page", Result);
