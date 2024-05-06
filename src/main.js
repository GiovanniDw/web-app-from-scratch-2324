import { $, $$, app } from "~/utils/variables.js";
import Header from "~/components/Header.js";
import BentoGrid from "~/components/BentoGrid.js";
import { getStudents } from "~/utils/data.js";
import { renderStudents } from "~/components/StudentsSection.js";
import {initialRender} from '~/utils/state.js';
const App = async () => {
  app.innerHTML = initialRender()




  // try {
  //   await Header();
  //   const students = await getStudents();
  //   renderStudents(students.sort(() => 0.5 - Math.random()));
  // } catch {
  //   console.log("error");
  // } finally {
  //   console.log("done");
  // }
};

App();


if ('customElements' in window) {
  customElements.define('header-component', Header);
  customElements.define('bento-grid', BentoGrid);
}

app.addEventListener('DOMContentLoaded', () => {});