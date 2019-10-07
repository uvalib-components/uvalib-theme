import {html, LitElement, property} from 'lit-element';

export class UvaLitElement extends LitElement {
  @property({type: Boolean, reflect: true, attribute: 'small-screen'}) smallScreen = false;
  @property({type: Boolean, reflect: true, attribute: 'medium-screen'}) mediumScreen = false;
  @property({type: Boolean, reflect: true, attribute: 'large-screen'}) largeScreen = false;
  render() {
    return html`
      <p>Hello World</p>
      ${this.smallScreen? html`<h3>Small Screen</h3>`:''}
      ${this.mediumScreen? html`<h2>Medium Screen</h2>`:''}
      ${this.largeScreen? html`<h1>Large Screen</h1>`:''}
    `;
  }
  constructor() {
    super();

    const small = window.matchMedia("(max-width: 600px)");
    if (small.matches) this.__setscreen('small');
    small.addListener(q=>{ if (q.matches) this.__setscreen('small'); });
    const medium = window.matchMedia("(min-width: 600px) and (max-width: 992px)");
    if (medium.matches) this.__setscreen('medium');
    medium.addListener(q=>{ if (q.matches) this.__setscreen('medium'); });
    const large = window.matchMedia("(min-width: 993px)");
    if (large.matches) this.__setscreen('large');
    large.addListener(q=>{ if (q.matches) this.__setscreen('large'); });
  }
  __setscreen(sz){
    if (sz == "small") {
      this.smallScreen = true;
      this.mediumScreen = false;
      this.largeScreen = false;
    }
    else if (sz == "medium") {
      this.smallScreen = false;
      this.mediumScreen = true;
      this.largeScreen = false;
    }
    else {
      this.smallScreen = false;
      this.mediumScreen = false;
      this.largeScreen = true;
    }
  }
}

customElements.define('uvalib-lit-element', UvaLitElement);
