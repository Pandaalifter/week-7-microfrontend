import { LitElement, html, css } from 'lit';
import "./professor-card2.js"

class ProfessorDirectory extends LitElement {
  static get tag(){
    return 'professor-directory';
  }
  static properties = {
    professors: {type: Array},
    college: {type: String}
  }
  static styles = css`
  :host{
    display: block;
  }
  .wrapper{
    width: 400px;
  }
  .item{
    display: inline-flex;
  }
  `;

  constructor(){
    super();
    this.professors = [];
    this.college = 'Penn State IST';
    this.updateDirectory();
  }

  updateDirectory(){
    const address = new URL('../api/directory.js', import.meta.url).href;
    const data = fetch(address).then((response) => {
        if(response.ok){
            return response.json();
        }
        return [];
    })
    .then((data) => {
        this.professors = data;
    });
    console.log(data);
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
                    profilePic="${professor.profilePic}"
                    >
                </professor-card2>
            </div>
            `)}
        </div>
    `
  }
}

customElements.define(ProfessorDirectory.tag, ProfessorDirectory);