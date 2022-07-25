import { rem } from '../../utils/index.js';
import { interpolate } from '../../utils/index.js';

class ArticleCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  async getTemplateString() {
    const templateString = await fetch('./components/article-card/article-card.html');
    return templateString.text();
  }

  async getCssString() {
    const cssString = await fetch('./components/article-card/article-card.css');
    return cssString.text();
  }

  // getAttrs() {
  //   const attrs = [];
  //   const ghost = this.createGhost();
  // }

  // static get observedAttributes() {}

  connectedCallback() {
    this.getTemplateString()
      .then(template => this.shadowRoot.innerHTML = template);
    this.getCssString()
      .then(css => {
        const style = document.createElement('style');
        style.textContent = interpolate(css);
        this.shadowRoot.appendChild(style);
      });
  }

}

export default ArticleCard;