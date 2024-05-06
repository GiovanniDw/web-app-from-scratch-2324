import { getMyData } from '~/utils/data.js';
import '~/assets/header.css';

class Header extends HTMLElement {
  constructor() {
    super();
    // this.shadow = this.attachShadow({ mode: 'open' });
    this.render();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  async connectedCallback() {
    const userData = await getMyData();
    this.setAvatar(userData.avatar_url);

    requestAnimationFrame(() => {
      this.setupScrollHandler();
    });
  }

  setAvatar(avatarUrl) {
    const avatar = this.querySelector('#avatar');
    if (avatar) {
      avatar.src = avatarUrl;
    }
  }

  setupScrollHandler() {
    const navInner = this.querySelector('.nav-inner');

    if (navInner) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition > 100) {
          navInner.classList.add('scrolled');
        } else {
          navInner.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);
      this.handleScroll = handleScroll;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.handleScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    this.innerHTML = `
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