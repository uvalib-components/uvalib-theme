import {html, LitElement, property} from 'lit-element';
import { uvalibBreakpointMixin } from './uvalib-breakpoint-mixin';

export class UvaLitElement extends uvalibBreakpointMixin(LitElement) {
  render() {
    return html`
      <p>Hello World</p>
      ${this.smallScreen? html`<h3>Small Screen</h3>`:''}
      ${this.mediumScreen? html`<h2>Medium Screen</h2>`:''}
      ${this.largeScreen? html`<h1>Large Screen</h1>`:''}
    `;
  }
  
}

customElements.define('uvalib-lit-element', UvaLitElement);
