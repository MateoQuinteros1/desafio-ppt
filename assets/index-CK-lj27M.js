var m=Object.defineProperty;var u=(s,i,e)=>i in s?m(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e;var a=(s,i,e)=>u(s,typeof i!="symbol"?i+"":i,e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();class g extends HTMLElement{constructor(){super();a(this,"shadowDom",this.attachShadow({mode:"open"}));this.render()}render(){this.shadowDom.innerHTML=`
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
        font-family: "American Typewriter";
        border: 18px solid black;
      }
      @media (min-width: 760px) {
        .counter-circle {
          width: 250px;
          height: 250px;
          font-size: 160px;
        }
      }
    </style>`;const e=this.shadowDom.querySelector(".counter-circle");let t=5;const o=setInterval(()=>{const n=JSON.stringify(t);e.textContent=n,t--,t<0&&clearInterval(o)},1e3)}}customElements.define("counter-comp",g);const f=[{pathRegex:/\/$/,pageElName:"welcome-page"},{pathRegex:/\/instructions/,pageElName:"instructions-page"},{pathRegex:/\/play/,pageElName:"play-page"},{pathRegex:/\/move/,pageElName:"move-page"},{pathRegex:/\/result/,pageElName:"result-page"}];function h(s){window.history.pushState({},"",s),d(s)}function d(s){const i=s.replace(/^\/desafio-ppt/,"")||"/",e=f.find(t=>t.pathRegex.test(i));if(e){const t=document.body;if(t){t.innerHTML="";const o=document.createElement(e.pageElName);t.appendChild(o)}}else console.warn(`El path '${i}' no fue encontrado.`)}function x(){const s=w();console.log(s),d(s),window.addEventListener("popstate",function(){d(window.location.pathname)})}function w(){const s=window.location.pathname,i="/desafio-ppt";return s.startsWith(i)?s.replace(i,"")||"/":s}function l(){return location.host.includes("github.io")}class b extends HTMLElement{constructor(){super();a(this,"shadowDom",this.attachShadow({mode:"open"}));this.render()}render(){if(this.shadowDom.innerHTML=`
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
    </style>`,this.hasAttribute("goto")){const e=this.shadowDom.querySelector(".button-container");e==null||e.addEventListener("click",()=>{h(this.getAttribute("goto"))})}}}customElements.define("main-button",b);class y extends HTMLElement{constructor(){super();a(this,"shadowDom",this.attachShadow({mode:"open"}));this.render()}render(){this.shadowDom.innerHTML=`
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
    `}}customElements.define("winner-star",y);class v extends HTMLElement{constructor(){super();a(this,"shadowDom",this.attachShadow({mode:"open"}));this.render()}render(){this.shadowDom.innerHTML=`
          <div class="container">
        <img class="green" src="/public/estrella-roja.svg" alt="" />
        <h1>Perdiste</h1>
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
          top: -175px;
          left: 75px;
          color: white;
          font-family: "Odibee Sans";
          letter-spacing: 4px;
          font-size:35px;
        }
      </style>
      `}}customElements.define("loser-star",v);class S extends HTMLElement{constructor(){super();a(this,"shadowDom",this.attachShadow({mode:"open"}));this.render()}render(){this.shadowDom.innerHTML=`
    <div class="container">
  <img class="yellow" src="/public/estrella-amarilla.svg" alt="" />
  <h1>Empate</h1>
</div>
<style>
  .container {
    width: 255px;
    height: 260px;
  }

  .yellow {
    height: 250px;
    width: 250px;
  }

  h1 {
    position: relative;
    top: -175px;
    left: 75px;
    color: white;
    font-family: "Odibee Sans";
    letter-spacing: 4px;
    font-size:35px;
  }
</style>
`}}customElements.define("draw-star",S);class E extends HTMLElement{constructor(){super();a(this,"shadowDom",this.attachShadow({mode:"open"}));this.render()}render(){this.shadowDom.innerHTML=`
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
    `;const e=this.shadowDom.querySelector("main-button"),t=this.shadowDom.querySelectorAll("img");l()&&(e.setAttribute("goto","/desafio-ppt/instructions"),t.forEach(n=>{const r=n.getAttribute("src");n.setAttribute("src",`/desafio-ppt${r.replace("/public","")}`)}))}}customElements.define("welcome-page",E);class D extends HTMLElement{constructor(){super();a(this,"shadowDom",this.attachShadow({mode:"open"}));this.render()}render(){this.shadowDom.innerHTML=`
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
    `;const e=this.shadowDom.querySelector("main-button"),t=this.shadowDom.querySelectorAll("img");l()&&(e.setAttribute("goto","/desafio-ppt/play"),t.forEach(n=>{const r=n.getAttribute("src");n.setAttribute("src",`/desafio-ppt${r.replace("/public","")}`)}))}}customElements.define("instructions-page",D);const L=["piedra","papel","tijeras"],c={data:{moves:[],points:{user:0,computer:0}},listeners:[],loadDataToState(){const s=localStorage.getItem("moves"),i=localStorage.getItem("points"),e=JSON.parse(s),t=JSON.parse(i);this.setState({moves:e,points:t});for(const o of this.listeners)o()},updateLocalStorage(){const s=localStorage.getItem("moves"),i=localStorage.getItem("points"),e=JSON.parse(s),t=JSON.parse(i),o=[...e,this.data.moves[this.data.moves.length-1]];this.data.moves[this.data.moves.length-1].winner=="user"?t.user=t.user+1:this.data.moves[this.data.moves.length-1].winner=="computer"&&(t.computer=t.computer+1),localStorage.setItem("moves",JSON.stringify(o)),localStorage.setItem("points",JSON.stringify(t))},getState(){return this.data},setState(s){this.data=s;for(const i of this.listeners)i()},subscribe(s){this.listeners.push(s)},setMove(s){let i=Math.floor(Math.random()*3);const e=L[i],t=this.whoWins(s,e),o={usermove:s,computermove:e,winner:t};this.data.moves.push(o);for(const n of this.listeners)n()},whoWins(s,i){const e=[s=="piedra"&&i=="tijeras",s=="papel"&&i=="piedra",s=="tijeras"&&i=="papel"],t=[s=="papel"&&i=="tijeras",s=="tijeras"&&i=="piedra",s=="piedra"&&i=="papel"],o=[s=="papel"&&i=="papel",s=="piedra"&&i=="piedra",s=="tijeras"&&i=="tijeras"];for(const n of e)if(n==!0)return this.data.points.user+=1,"user";for(const n of t)if(n==!0)return this.data.points.computer+=1,"computer";for(const n of o)if(n==!0)return"draw"}};class M extends HTMLElement{constructor(){super();a(this,"shadowDom",this.attachShadow({mode:"open"}));this.render()}render(){this.shadowDom.innerHTML=`
        <div class="page">
      <div class="counter-container">
        <counter-comp></counter-comp>
      </div>
      <div class="hands-container">
        <img class="paper" src="/public/mano-papel.png" />
        <img class="rock" src="/public/mano-piedra.png" />
        <img class="scissors" src="/public/mano-tijeras.png" />
      </div>
    </div>
    <style>
      .page {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-size: 120px 120px;
        background-image: url("https://s3-alpha-sig.figma.com/img/d2fc/d311/9aea6ee5d39e70e777bd8fec3a82c58e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UZMrBd75u-8PoVYAvCDHlwfnt9A5ZUHrXps5qi6p6t9d6i~3F96INEl4n18LksVwwPZvtRvbdQoyHZ47Mb3zQTFMQUK-bJVZ2wfTlV77KEAXUMcD5fXJIck0u~2nthAxupYO0ydcpZBEpG1XesutwrGPnYZ9LqJ9DnIC9Yzm0fyWX3bO1ajlfQWjEIvBlEhsBTyU2xGf2CSHDUSE8M5JSc8Q1p2S34gaokaXJO28orQEYngyq5fvmYLAKlz62R1jCdch3tQRSkVDDTBRCEFF~IsoWQu6WnyKpyGVNtbkcTAaKP-Qai96fGH2QpWcWznJfz5C-lPjISJsw9kHUqdzhQ__");
      }

      .hands-container {
        display: flex;
        gap: 11px;
      }

      @media (min-width: 760px) {
        .hands-container {
          gap: 160px;
        }
      }

      .paper {
        width: 120px;
        height: 235px;
        position: relative;
        top: 170px;
      }
      @media (min-width: 760px) {
        .paper {
          top: 230px;
          width: 160px;
          height: 300px;
        }
      }
      .rock {
        width: 80px;
        position: relative;
        top: 170px;
      }
      @media (min-width: 760px) {
        .rock {
          top: 230px;
          width: 100px;
          height: 300px;
        }
      }

      .scissors {
        width: 90px;
        position: relative;
        top: 170px;
      }
      @media (min-width: 760px) {
        .scissors {
          top: 230px;
          width: 100px;
        }
      }
        img{
        cursor:grab;
        }
    </style>
    `;const e=this.shadowDom.querySelector(".paper"),t=this.shadowDom.querySelector(".rock"),o=this.shadowDom.querySelector(".scissors"),n=l();e==null||e.addEventListener("click",()=>{t.style.display="none",o.style.display="none",c.setMove("papel")}),t.addEventListener("click",()=>{e.style.display="none",o.style.display="none",c.setMove("piedra")}),o.addEventListener("click",()=>{e.style.display="none",t.style.display="none",c.setMove("tijeras")});function r(){h(n?"/desafio-ppt/move":"/move")}setTimeout(()=>{r()},7e3)}}customElements.define("play-page",M);class k extends HTMLElement{constructor(){super();a(this,"usermove","");a(this,"computermove","");a(this,"shadowDom",this.attachShadow({mode:"open"}));this.syncWithState()}syncWithState(){const e=c.data.moves,t=e.length-1,o=e[t];this.usermove=o.usermove,this.computermove=o.computermove,this.render()}render(){this.shadowDom.innerHTML=`
        <div class="page"></div>
    <style>
      .page {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-size: 120px 120px;
        background-image: url("https://s3-alpha-sig.figma.com/img/d2fc/d311/9aea6ee5d39e70e777bd8fec3a82c58e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UZMrBd75u-8PoVYAvCDHlwfnt9A5ZUHrXps5qi6p6t9d6i~3F96INEl4n18LksVwwPZvtRvbdQoyHZ47Mb3zQTFMQUK-bJVZ2wfTlV77KEAXUMcD5fXJIck0u~2nthAxupYO0ydcpZBEpG1XesutwrGPnYZ9LqJ9DnIC9Yzm0fyWX3bO1ajlfQWjEIvBlEhsBTyU2xGf2CSHDUSE8M5JSc8Q1p2S34gaokaXJO28orQEYngyq5fvmYLAKlz62R1jCdch3tQRSkVDDTBRCEFF~IsoWQu6WnyKpyGVNtbkcTAaKP-Qai96fGH2QpWcWznJfz5C-lPjISJsw9kHUqdzhQ__");
      }
      .computermove {
        transform: rotate(180deg);
        position: absolute;
        top: -50px;
      }

      .usermove {
        position: absolute;
        bottom: -50px;
      }
      .piedra {
        height: 370px;
        width: 220px;
      }

      .papel {
        height: 370px;
        width: 270px;
      }
      .tijeras {
        height: 370px;
        width: 220px;
      }

      .imagen-aparecer {
        opacity: 0;
        animation: aparecer 2s ease-in forwards;
      }

      @keyframes aparecer {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    </style>
    `;const e=this.shadowDom.querySelector(".page"),t=document.createElement("img"),o=document.createElement("img"),n=l(),r=n?"/desafio-ppt":"";t.src=`${r}/mano-${this.usermove}.png`,t.classList.add(`${this.usermove}`),t.classList.add("usermove"),t.classList.add("imagen-aparecer"),o.src=`${r}/mano-${this.computermove}.png`,o.classList.add(`${this.computermove}`),o.classList.add("computermove"),o.classList.add("imagen-aparecer"),e==null||e.appendChild(o),e==null||e.appendChild(t);function p(){h(n?"/desafio-ppt/result":"/result")}setTimeout(()=>{p()},4e3)}}customElements.define("move-page",k);class P extends HTMLElement{constructor(){super();a(this,"winner","");a(this,"userscore",0);a(this,"computerscore",0);a(this,"shadowDom",this.attachShadow({mode:"open"}));this.syncWithState()}syncWithState(){const e=c.data.moves,t=e.length-1,o=e[t];this.winner=o.winner,this.userscore=c.data.points.user,this.computerscore=c.data.points.computer,this.render()}render(){this.shadowDom.innerHTML=`
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
        <main-button goto="/">Volver a jugar</main-button>
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
  </style>`;const e=this.shadowDom.querySelector(".page"),t=this.shadowDom.querySelector(".star-container"),n=l()?"/desafio-ppt/":"/";if(this.shadowDom.querySelector("main-button").setAttribute("goto",n),this.winner=="user"){const p=document.createElement("winner-star");t==null||t.appendChild(p),e==null||e.classList.add("winner-background")}else if(this.winner=="computer"){const p=document.createElement("loser-star");t==null||t.appendChild(p),e==null||e.classList.add("loser-background")}else if(this.winner=="draw"){const p=document.createElement("draw-star");t==null||t.appendChild(p),e==null||e.classList.add("draw-background")}}}customElements.define("result-page",P);(function(){x(),c.loadDataToState(),c.subscribe(()=>{c.updateLocalStorage()})})();
