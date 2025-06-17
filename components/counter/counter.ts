class Counter extends HTMLElement {
  shadowDom = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }
  render() {
    this.shadowDom.innerHTML = `
      <div class="counter-circle">5</div>
    <style>
      .counter-circle {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 90px;
        font-weight: 700;
        font-family: "Roboto";
        border: 18px solid black;
      }
      @media (min-width: 760px) {
        .counter-circle {
          width: 250px;
          height: 250px;
          font-size: 160px;
        }
      }
    </style>`;

    const getCounterNumberEl: any =
      this.shadowDom.querySelector(".counter-circle");

    let counter = 5;
    const intervalo = setInterval(() => {
      const numberToString = JSON.stringify(counter);
      getCounterNumberEl.textContent = numberToString;
      counter--;
      if (counter < 0) {
        clearInterval(intervalo);
      }
    }, 1000);
  }
}

customElements.define("counter-comp", Counter);
