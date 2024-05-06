import '~/assets/bento-grid.css'


class BentoGrid extends HTMLElement {
  constructor() {
    super();
    // this.shadow = this.attachShadow({mode: 'open'});
  }
  
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }


  connectedCallback() {
    this.render();

  }

  render() {
    this.innerHTML = /*html*/`
                <main>
                
                </main>
    `;
}

}

export default BentoGrid