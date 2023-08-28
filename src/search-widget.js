import { LitElement, html, css } from 'lit';

export class SearchWidget extends LitElement {
    static get properties() {
      return {
        value: { type: String },
      }
    }
  
    static get styles() {
      return css`

      host:{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 700px;
      margin: 0 auto;
      }
      
      input{
        border:none;
        font-family: 'Montserrat', sans-serif;
        width: 300px;
        height: 45px;
        background-color: #F7FAFC;
      }
      main {
        flex-grow: 1;
      }
      `;
    }
  
    constructor() {
      super();
      this.value = 'Search Content, Topics, and People';
    }
  
    render() {
      return html`
        <main>
        <input type="text" value="${this.value}" @input="${this._handleInput}"/>
        </main>
      `;
    }
    _handleInput(e) {
      this.value = e.target.value;
      this.dispatchEvent(new CustomEvent('value-changed', {
        detail: {
          value: this.value,
        }
      }));
    }
  }
  
  customElements.define('search-widget', SearchWidget);