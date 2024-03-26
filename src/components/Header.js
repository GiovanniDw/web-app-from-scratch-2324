import { $, $$, app } from '../utils/variables.js';

export const Header = async () => {
  try {
    const nav = document.createElement('nav');

    nav.innerHTML = `
    <div class="nav-container">
  <div>
    <img class="p-avatar"   />
  </div>
  <div class="toggle-mode" >

  </div>
  </div>
  `;

    app.append(nav);
  } catch (error) {
    console.log(error);
  }
};
