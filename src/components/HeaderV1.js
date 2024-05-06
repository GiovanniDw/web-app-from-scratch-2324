import { $, $$, app } from '~/utils/variables.js';
import { getMyData } from '~/utils/data.js';
// import data from '/data.json';
import '~/assets/header.css';
class Header extends HTMLElement {
  constructor() {
    super();
    // this.shadow = this.attachShadow({ mode: 'open' });
    // this.user = getMyData();
    // this.render()
    // const template = /*html*/ `
    // <div class="nav-container">
    // <div>
    // <img id="avatar" class="user-avatar" src="" />
    // </div>
    // <div class="toggle-mode"></div>
    // </div>
    // `;
    // this.innerHTML = template
  }
  // async connectedCallback() {
  // console.log(this.user)
  // // const user = await getMyData();
  // const nav = document.createElement("nav");
  // }
  // async getUser() {
  // const userData = await getMyData();
  // return userData
  // }
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  async connectedCallback() {
    // const user = this.getUser()
    this.render();
    const navBar = this.querySelector('nav-inner');
    function handleScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition > 100) {
        this.navBar.classList.add('scrolled');
      } else {
        this.navBar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll.bind(this));
    // const avatar = this.querySelector('#avatar');
    // console.log(this);
    // avatar.src = user.avatar_url
    const userData = await getMyData();
    this.setAvatar(userData.avatar_url);
  }
  setAvatar(avatarUrl) {
    const avatar = this.querySelector('#avatar');
    if (avatar) {
      avatar.src = avatarUrl;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  render() {
    this.innerHTML = /*html*/ `
<div class="nav-container">
<div class="nav-inner glass">
<div class="nav-left avatar-container">
<img id="avatar" class="user-avatar" src="" />
</div>
<div class="nav-right toggle-mode"><button id="toggle-theme" class="btn-icon"></button></div>
</div>
</div>
`;
  }
}
export default Header;
