import { LitElement, html, css } from 'lit';
import "./my-closet.js";

export class ItemList extends LitElement{
    static get tag(){
        return 'item-list'; 
    }
    static get properties(){
        return {
            items: {type: Array}
        }
    }

    static get styles(){
        return css `
          :host{
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

    constructor(){
        super();
        this.items = [];
    }

    updateRoster(){
        fetch(new URL('../assets/list.json', import.meta.url).href);
    }



    render(){
        return html`
        <div class="wrapper">
        ${this.items.map(item => html`
        <div class="item"> 
          <my-closet header="${item.header}" subheader="${item.subheader}" content="${item.content}" image="${item.image}"></my-closet>
        </div>
        </div>
        `)}
        `

    }
}
customElements.define(ItemList.tag, ItemList); 