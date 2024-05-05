import { $, $$, app } from '~/utils/variables.js';
import {getMyData} from '~/utils/data.js';
// import data from '/data.json';


export const Header = async () => {
  try {
    const user = await getMyData();
    const nav = document.createElement('nav');

    nav.innerHTML = `
      <div class="nav-container">
        <div>
          <img class="p-avatar" src="${user.avatar_url}" />
        </div>
        <div class="toggle-mode"></div>
      </div>
  `;

    app.append(nav);
  } catch (error) {
    console.log(error);
  }
};
