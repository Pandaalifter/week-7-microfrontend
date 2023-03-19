import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"; 

class ProfessorCard2 extends LitElement {
  static get properties() { return{
    title: {type: String, reflect: true},
    subtitle: {type: String},
    infoLabel: {type: String},
    top: {type: String},
    bottom: {type: String},
    profilePic: {type: String},
    changeBackground: {type: Boolean, reflect: true},
    toggleOpening: {type: Boolean, reflect: true}
  }}

  static get styles(){ return css`
    :host{
      display: inline-block;
    }
    :host([changeBackground]) .card{
      background-color: var(--professor-card-changeBackground-background-color, hotpink);
    }
    .card{
      border-radius: 24px;
      border: 3px solid #041E42;
      padding: 8px;
      width: 400px;
      position: relative;
      overflow: hidden;
      box-shadow: 0px 8px 24px #999;
      background-color: lightgrey;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 8px;
      margin-left: 8px;
    }
    .card:hover{
      border: 3px solid purple;
      box-shadow: 0px 8px 24px yellow;
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
    .btnStyle{
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
    .btnStyle:hover{
      color: #e0e0e0;
      background-color: #07377a;
      box-shadow: 0px 10px 24px white;
      border: 1px solid #07377a;
      font-size: 18px;
      font-weight: bold;
      line-height: 22px;
    }
    .btnStyle:focus{
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
    .subtitle{
      color: white;
      font-size: 16px;
      text-shadow: -1px 1px 2px #000,
                      1px 1px 2px #000,
                      1px -1px 0 #000,
                      -1px -1px 0 #000;
    }
    .picStyle{
      max-width: 200px;
      max-height: 200px;
      box-shadow: 0px 10px 24px #999;
      border: 1px solid #07377a; 
      float: left;
    }
    @media only screen and (max-width: 1366px){
      .card{
        margin-left: 4px;
      }
    }
    @media only screen and (min-width: 880px) and (max-width: 1280px){
      .card{
        background-color: maroon;
        width: 376px;
      }
      .btnStyle{
        margin-right: 16px;
      }
    }
    @media only screen and (max-width: 880px){
      .card{
        background-color: lightblue;
        width: 320px;
      }
      .title{
        font-size: 20px;
      }
      .subtitle{
        font-size: 14px;
      }
      .btnStyle{
        margin-right: 48px;
        width: 80px;
        height: 16px;
        font-size: 16px;
        line-height: 8px;
      }
      .btnStyle:hover{
        font-size: 15px;
        line-height: 8px;
      }
      .textbox{
        font-size: 12px;
      }
      .picStyle{
        max-width: 120px;
        max-height: 120px;
      }
    }
  `;}

  constructor() {
    super();
    this.title = "Professor Giacobe";
    this.subtitle = "Chad of Cyber IST";
    this.infoLabel = "Details";
    this.top = "Giacobe";
    this.bottom = "Overlaid";
    this.profilePic = "https://cdn.discordapp.com/attachments/703281782111338586/1076698279712137346/unknown.png";
    this.changeBackground = false;
    this.toggleOpening = false;
  }

  //Changes state of boolean property "toggleOpening" when the details attribute matches
  toggleEvent(e){
    if(this.shadowRoot.querySelector('details').getAttribute('open') == ""){
      this.toggleOpening = true;
    }
    else{
      this.toggleOpening = false;
    }
  }

  //Creates new event listener to record when the toggleEvent is invoked
  updated(changedProperties){
    changedProperties.forEach((oldValue, propName)=>{
      if(propName === "toggleOpening"){
        this.dispatchEvent(new CustomEvent('opened-changed', {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail:{
            value: this[propName]
          }
        }));
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      }
    });
  }

  render() {
    return html`
      <div class="card">
      
        <!--Text in Top Section-->
        <h1 class="title">${this.title}</h1>
        <h2 class="subtitle">${this.subtitle}</h2>

        <!--Image in Left Section-->
        <div class="picStyle">
          <meme-maker 
            image-url="${this.profilePic}" 
            top-text="${this.top}" 
            bottom-text="${this.bottom}">
          </meme-maker>
        </div>

        <!--Button and Text in Right Section-->
        <div class="textbox">
          <details .open="${this.toggleOpening}" @toggle="${this.toggleEvent}">
            <summary class="btnStyle">${this.infoLabel}</summary>
            <div class="description">
              <slot></slot>
            </div>
          </details>

        </div>
      </div>
    `;
  }
}

customElements.define('professor-card2', ProfessorCard2);