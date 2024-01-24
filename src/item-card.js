import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/accent-card/accent-card.js";


class ItemCard extends LitElement {
  static properties = {
    header: { type: String },
    subheading: { type: String },
    content: { type: String },
    image: {type: String}
  }

  static styles = css`
    :host {
     
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--my-closet-background-color);
    }

    main {
      flex-grow: 1;
    }
  `;

  constructor() {
    super();
    this.header = "Accent Card";
    this.subheading = "A card with optional accent stylings.";
    this.content = "This card is highly customizable to contain any content you'd like"; 
    this.image = "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-LOUNGEWEAR-AP-TNK-0282-ONX-FL_1456x_jpeg.jpg?v=1675404669&width=1200";
  }

  render() {
    return html`
      <main>
      <accent-card image-src=${this.image} accent-color="red" horizontal accent-heading>
       <div slot="heading">${this.header}</div>
       <div slot="subheading">${this.subheading}</div>
      <div slot="content"><p>${this.content}</p></div>
      </accent-card>   
      </main>
    `;
  }
}
customElements.define('item-card', ItemCard);