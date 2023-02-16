import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"; 

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class ProfessorCard extends LitElement {
  static properties = {
    name: { type: String, reflect: true },
  }

  static styles = css`
    .card{
      border-radius: 24px;
      border: 3px solid #041E42;
      padding: 8px;
      width: 400px;
      display: block;
      margin: auto;
      position: relative;
      overflow: hidden;
      box-shadow: 0px 8px 24px #999;
      background-color: lightgrey;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 10px;
    }
    .textbox{
      font-size: 15px;
      margin-left: 112px;
      text-align: right;
      border-radius: 24px;
    }
    .description{
      text-shadow: -1px 1px 2px #FFFFFF,
                      1px 1px 2px #FFFFFF,
                      1px -1px 0 #FFFFFF,
                      -1px -1px 0 #FFFFFF;
    }
    .haxbtn{
      display:inline-block;
      text-align: center;
      color: white;
      background-color: #041E42;
      border-radius: 5px;
      font-size: 20px;
      width: 120px;
      height: 32px;
      box-shadow: 0px 10px 24px #999;
      border: 1px solid #041E42;
      visibility: visible;
      padding-top: 10px;
      margin-right: 32px;
    }
    .haxbtn:hover{
      color: #e0e0e0;
      background-color: #07377a;
      box-shadow: 0px 10px 24px white;
      border: 1px solid #07377a;
    }
    .haxbtn:focus{
      color: #e0e0e0;
      background-color: #07377a;
      box-shadow: 0px 10px 24px white;
      border: 1px solid #07377a;
    }
    .title{
      color: white;
      font-size: 24px;
      text-shadow: -1px 1px 2px #000,
                      1px 1px 2px #000,
                      1px -1px 0 #000,
                      -1px -1px 0 #000;
    }
    .giaImg{
      width: 200px;
      border-radius: 24px;
      box-shadow: 0px 10px 24px #999;
      float: left;
    }
    .btnSpacing{
      display: inline-block;
    }
    .outsideBtn{
      color: white;
      background-color: #041E42;
      border-radius: 5px;
      font-size: 20px;
      width: 120px;
      height: 50px;
      box-shadow: 0px 10px 24px #999;
      border: 1px solid #041E42;
      margin-right: 32px;
      margin-bottom: 16px;
    }
    .outsideBtn:hover{
      color: #e0e0e0;
      background-color: #07377a;
      box-shadow: 0px 10px 24px white;
      border: 1px solid #07377a;
    }
    .outsideBtn:focus{
      color: #e0e0e0;
      background-color: #07377a;
      box-shadow: 0px 10px 24px white;
      border: 1px solid #07377a;
    }
    .basic{
      background-color: hotpink;
    }
    .hoverCard{
      border: 3px solid purple;
      box-shadow: 0px 8px 24px yellow;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="card">
        <h1 class="title">Chad of Cyber IST</h1>

        <img class="giaImg" src="https://media.discordapp.net/attachments/963095262363017246/1020131830323744788/unknown.png?width=468&height=468" alt="Professor Giacobe"/>

        <div class="textbox">
          <details>
            <summary class="haxbtn">Details</summary>
            <p class="description pScale">Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
          </details>

        </div>
      </div>
    `;
  }
}

customElements.define('professor-card', ProfessorCard);