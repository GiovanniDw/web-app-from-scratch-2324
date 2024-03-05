export async function getStudents() {
  const res = await fetch('https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-2324/forks?per_page=100')
  const teams = await res.json()
  console.log(teams);
  return teams.map(({owner}) => owner)
}
