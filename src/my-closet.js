import { LitElement, html, css } from 'lit';
import "./item-card.js";


class MyCloset extends LitElement {
  static get tag(){
    return 'my-closet';
  }
  static get properties(){
    return{
        items: {type: Array}
    }
}
constructor(){
  super();
  this.items = [{
    "header": "T-Shirt",
    "subheading": "A card with optional accent stylings.",
    "content": "This card is highly customizable to contain any content you'd like",
  }]; 
}

static get styles(){
  return css `
    :host{s
      display: block;
    }
    .wrapper{
      border: 2px solid black; 
      display flex; 
    }
    .item{
      display: inline-flex; 
    }
  `;
}


render(){
  return html`
  <div class= "wrapper">
  ${this.items.map(item => html`
  <div class="item">
  <my-closet header="${item.header}" subheading="${item.subheading}" content="${item.content}" image="${item.image}"></my-closet>
  </div>
  `)}
</div>
  `
}

}
customElements.define('my-closet', MyCloset);