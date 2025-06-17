type SupportedMoves = "piedra" | "papel" | "tijeras";
const Moves: SupportedMoves[] = ["piedra", "papel", "tijeras"];
export type MoveObj = {
  usermove: string;
  computermove: string;
  winner: string | undefined;
};

export const state = {
  data: {
    moves: [] as Array<MoveObj>,
    points: {
      user: 0,
      computer: 0,
    },
  },
  listeners: [] as Array<() => void>,
  loadDataToState() {
    const getMovesList = localStorage.getItem("moves");
    const getPoints = localStorage.getItem("points");
    if (!getMovesList && !getPoints) {
      localStorage.setItem("moves", JSON.stringify([]));
      localStorage.setItem("points", JSON.stringify({ user: 0, computer: 0 }));
      const getLsMovesList = JSON.parse(
        localStorage.getItem("moves") as string
      );
      const getUserPoints = JSON.parse(
        localStorage.getItem("points") as string
      );
      this.data.moves = getLsMovesList;
      this.data.points = getUserPoints;
      for (const cb of this.listeners) {
        cb();
      }
    } else {
      const parseMovesList = JSON.parse(getMovesList as string);
      const parsePoints = JSON.parse(getPoints as string);
      this.setState({
        moves: parseMovesList,
        points: parsePoints,
      });
      for (const cb of this.listeners) {
        cb();
      }
    }
  },
  updateLocalStorage() {
    const getMovesList = localStorage.getItem("moves");
    const getPoints = localStorage.getItem("points");
    const parseMovesList = JSON.parse(getMovesList as string);
    const parsePoints = JSON.parse(getPoints as string);
    //Logica para renovar el array de movimientos en el local storage.
    const newMovesData = [
      ...parseMovesList,
      this.data.moves[this.data.moves.length - 1],
    ];
    //Logica para renovar los puntos en el local storage
    if (this.data.moves[this.data.moves.length - 1].winner == "user") {
      parsePoints.user = parsePoints.user + 1;
    } else if (
      this.data.moves[this.data.moves.length - 1].winner == "computer"
    ) {
      parsePoints.computer = parsePoints.computer + 1;
    }
    //Agregandolos al local storage
    localStorage.setItem("moves", JSON.stringify(newMovesData));
    localStorage.setItem("points", JSON.stringify(parsePoints));
  },
  getState() {
    return this.data;
  },
  setState(newState: any) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  subscribe(callback: () => void) {
    this.listeners.push(callback);
  },

  setMove(usermove: SupportedMoves) {
    let random = Math.floor(Math.random() * 3);
    const computerMove = Moves[random];
    const winner = this.whoWins(usermove, computerMove);
    const newMoveObj = {
      usermove: usermove,
      computermove: computerMove,
      winner: winner,
    };
    this.data.moves.push(newMoveObj);
    for (const cb of this.listeners) {
      cb();
    }
  },

  whoWins(usermove: SupportedMoves, computermove: SupportedMoves) {
    const userWins = [
      usermove == "piedra" && computermove == "tijeras",
      usermove == "papel" && computermove == "piedra",
      usermove == "tijeras" && computermove == "papel",
    ];
    const userLoses = [
      usermove == "papel" && computermove == "tijeras",
      usermove == "tijeras" && computermove == "piedra",
      usermove == "piedra" && computermove == "papel",
    ];
    const draw = [
      usermove == "papel" && computermove == "papel",
      usermove == "piedra" && computermove == "piedra",
      usermove == "tijeras" && computermove == "tijeras",
    ];
    for (const m of userWins) {
      if (m == true) {
        this.data.points.user += 1;
        return "user";
      }
    }
    for (const m of userLoses) {
      if (m == true) {
        this.data.points.computer += 1;
        return "computer";
      }
    }
    for (const m of draw) {
      if (m == true) {
        return "draw";
      }
    }
  },
};

/*   
createAndUpdateState() {
    if (!localStorage.getItem("moves")) {
      localStorage.setItem("moves", JSON.stringify(this.data.moves));
    } else {
      const parsedMoves = JSON.parse(localStorage.getItem("moves") as string);
      const newMovesList = [
        ...parsedMoves,
        this.data.moves[this.data.moves.length - 1],
      ];
      localStorage.setItem("moves", JSON.stringify(newMovesList));
    }

    if (!localStorage.getItem("points")) {
      localStorage.setItem("points", JSON.stringify(this.data.points));
    } else {
      const parsedPoints = JSON.parse(localStorage.getItem("points") as string);
      const getLastMoveObj = this.data.moves[this.data.moves.length - 1];
      if (getLastMoveObj && getLastMoveObj.winner == "user") {
        parsedPoints.user = parsedPoints.user + 1;
      } else if (getLastMoveObj && getLastMoveObj.winner == "computer") {
        parsedPoints.computer = parsedPoints.computer + 1;
      }
      localStorage.setItem("points", JSON.stringify(parsedPoints));
    }
    const getUpdatedMoves = localStorage.getItem("moves");
    const getUpdatedPoints = localStorage.getItem("points");
    this.data.moves = JSON.parse(getUpdatedMoves as string);
    this.data.points = JSON.parse(getUpdatedPoints as string);
  }
    */
