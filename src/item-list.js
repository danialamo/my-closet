import { LitElement, html, css } from 'lit';
import "./my-closet.js";
import "./search-widget.js";

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
        this.updateItem(); 
    }
    updateItem(){
      const address = new URL("../api/item.js", import.meta.url).href; 
      const data = fetch(address).then((response) => {
        if(response.ok){
          return response.json()``
        }
        return[];
      }).then((data) => {
        this.items = data;
      });
    }


    render(){
        return html`
        <div class="wrapper">
        ${this.items.map(item => html`
        <div class="item"> 
          <my-closet header="${item.header}" subheader="${item.subheader}" content="${item.content}" image="${item.image}"></my-closet>
        </div>
        `)}
        </div>
        `
    }
}
customElements.define(ItemList.tag, ItemList); 