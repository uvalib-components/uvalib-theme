import {property} from 'lit-element';
export let uvalibBreakpointMixin = (superclass) => class extends superclass {
  static get properties() {
    return {
      smallScreen: {
        type: Boolean,
        reflect: true,
        attribute: 'small-screen'
      },
      mediumScreen: {
        type: Boolean,
        reflect: true,
        attribute: 'medium-screen'
      },
      largeScreen: {
        type: Boolean,
        reflect: true,
        attribute: 'large-screen'
      },
    };
  }
  firstUpdated() {
    this.smallScreen = this.mediumScreen = this.largeScreen = false;
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
};
