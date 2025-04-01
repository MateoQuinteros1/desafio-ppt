import { goTo } from "../../src/router";
class Button extends HTMLElement {
  shadowDom = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
    <button class="button-container">
      <h1 class="button__text">${this.textContent}</h1>
    </button>
    <style>
      .button-container {
        box-sizing: border-box;
        height: 87px;
        width: 322px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #006cfc;
        border: 10px solid #001997;
        border-radius: 10px;
      }
        @media (min-width: 760px) {
        .button-container {
          width: 404px;
        }
      }

      .button__text {
        font-family: "Odibee Sans";
        font-weight: 400;
        font-size: 45px;
        color: white;
        letter-spacing: 3px;
      }
    </style>`;
    if (this.hasAttribute("goto")) {
      const getButtonEl = this.shadowDom.querySelector(".button-container");
      getButtonEl?.addEventListener("click", () => {
        goTo(this.getAttribute("goto") as any);
      });
    }
  }
}
customElements.define("main-button", Button);
