import "../components/counter/counter";
import "../components/button/button";
import "../components/results/winner";
import "../components/results/loser";
import "../components/results/draw";
import "../pages/welcome/welcome";
import "../pages/instructions/instructions";
import "../pages/play/play";
import "../pages/move/move";
import "../pages/result/result";

import { state } from "./state";
import { initRouter } from "./router";
(function () {
  initRouter();
  state.loadDataToState();
  state.subscribe(() => {
    state.updateLocalStorage();
  });
  /* 
  const moves: Array<MoveObj> = [];
  const points = {
    user: 0,
    computer: 0,
  };

  localStorage.setItem("moves", JSON.stringify(moves));
  localStorage.setItem("points", JSON.stringify(points)); */

  /*   const data = [
    {
      user: "piedra",
      computer: "papel",
      winner: "computer",
    },
    {
      user: "tijeras",
      computer: "piedra",
      winner: "computer",
    },
  ];
  localStorage.setItem("data", JSON.stringify(data));
  const parsedData = JSON.parse(localStorage.getItem("data") as string);
  const newData = [
    ...parsedData,
    { user: "papel", computer: "papel", winner: "draw" },
  ];
  localStorage.setItem("data", JSON.stringify(newData)); */
})();
