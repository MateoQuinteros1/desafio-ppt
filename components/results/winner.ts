class Winner extends HTMLElement {
  shadowDom = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
        <div class="container">
      <img class="green" src="/public/estrella-verde.svg" alt="" />
      <h1>Ganaste</h1>
    </div>
    <style>
      .container {
        width: 255px;
        height: 260px;
      }
      .green {
        height: 250px;
        width: 250px;
      }
      h1 {
        position: relative;
        top: -177px;
        left: 75px;
        color: white;
        font-family: "Odibee Sans";
        letter-spacing: 4px;
        font-size:35px;
      }
    </style>
    `;
  }
}
customElements.define("winner-star", Winner);
