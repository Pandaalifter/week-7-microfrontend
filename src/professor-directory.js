import { LitElement, html, css } from 'lit';
import "./professor-card2.js"

class ProfessorDirectory extends LitElement {
  static get tag(){
    return 'professor-directory';
  }
  static get properties() { return {
    professors: {type: Array},
    college: {type: String}
  }}
  static get styles(){ return css`
  :host{
    display: block;
  }
  .wrapper{
    display: inline;
  }
  .item{
    display: inline-block;
  }
  `;}

  constructor(){
    super();
    this.professors = [];
    this.college = 'Penn State IST';
    this.updateDirectory();
  }

  updateDirectory(){
    const address = '../api/directories';
    fetch(address).then((response) => {
        if(response.ok){
            return response.json();
        }
        return [];
    })
    .then((data) => {
        this.professors = data;
    });
  }

  render(){
    return html`
        <h2>${this.college}</h2>
        <div class="wrapper">
            ${this.professors.map(professor => html`
            <div class="item">
                <professor-card2 
                    title="${professor.title}" 
                    subtitle="${professor.subtitle}" 
                    infoLabel="${professor.infoLabel}"
                    top="${professor.top}"
                    bottom="${professor.bottom}"
                    profilePic="${professor.profilePic}"> 
                    Taco Tuesday, the Tuesday of Tacos. Taco time is a taco rhyme. Taco taco taco whopper.
                </professor-card2>
            </div>
            `)}
        </div>
    `
  }
}

customElements.define(ProfessorDirectory.tag, ProfessorDirectory);