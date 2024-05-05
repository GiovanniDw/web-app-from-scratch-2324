(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const app = document.querySelector("#app");
const getStudents = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-2324/forks?per_page=100"
    );
    const teams = await res.json();
    return teams.map(({ owner }) => owner);
  } catch (error) {
    console.log(error);
  }
};
const getMyData = async () => {
  try {
    const res = await fetch(
      "https://giovannidw.github.io/web-app-from-scratch-2324/info.json"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const Header = async () => {
  try {
    const user = await getMyData();
    const nav = document.createElement("nav");
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
function renderStudents(students) {
  const container = document.createElement("section");
  const list = document.createElement("ul");
  list.classList.add("student-list");
  students.map((student) => {
    const item = document.createElement("li");
    const anchor = document.createElement("a");
    document.createElement("p");
    const avatar = document.createElement("img");
    anchor.href = `https://${student.login}.github.io/web-app-from-scratch-2324/`;
    anchor.alt = `WAFS fork from ${student.login}`;
    anchor.target = "_blank";
    anchor.textContent = `@${student.login}`;
    anchor.classList.add("link-student");
    anchor.target = "_blank";
    avatar.src = student.avatar_url;
    avatar.classList.add("avatar");
    item.append(avatar);
    item.append(anchor);
    list.append(item);
  });
  app.append(container);
  const heading = document.createElement("h2");
  heading.innerText = "Students";
  container.append(heading);
  container.append(list);
}
const main = async () => {
  try {
    await Header();
    const students = await getStudents();
    renderStudents(students.sort(() => 0.5 - Math.random()));
  } catch {
    console.log("error");
  } finally {
    console.log("done");
  }
};
main();
//# sourceMappingURL=index-2wrf4tf6.js.map
