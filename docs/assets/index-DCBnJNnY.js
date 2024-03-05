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
async function getStudents() {
  const res = await fetch("https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-2324/forks?per_page=100");
  const teams = await res.json();
  console.log(teams);
  return teams.map(({ owner }) => owner);
}
main().then(() => console.log("done"));
async function main() {
  const students = await getStudents();
  renderStudents(students.sort(() => 0.5 - Math.random()));
}
function renderStudents(students) {
  const container = document.querySelector("[data-students]");
  const list = document.createElement("ul");
  students.map((student) => {
    const item = document.createElement("li");
    const anchor = document.createElement("a");
    document.createElement("p");
    const avatar = document.createElement("img");
    anchor.href = `https://${student.login}.github.io/web-app-from-scratch-2324/`;
    anchor.alt = `WAFS fork from ${student.login}`;
    anchor.target = "_blank";
    anchor.textContent = student.login;
    avatar.src = student.avatar_url;
    item.append(avatar);
    item.append(anchor);
    list.append(item);
  });
  container.append(list);
}
//# sourceMappingURL=index-DCBnJNnY.js.map
