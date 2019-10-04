import {html, LitElement, property} from 'lit-element';

class UvaLitElement extends LitElement {
  @property({type: String}) myProp = 'stuff';
  render() {
    return html`
      <p>Hello World</p>
      ${this.myProp}
    `;
  }
}

customElements.define('uvalib-lit-element', UvaLitElement);
