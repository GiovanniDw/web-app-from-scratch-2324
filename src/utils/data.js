export const getStudents = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-2324/forks?per_page=100",
    );
    const teams = await res.json();
    return teams.map(({ owner }) => owner);
  } catch (error) {
    console.log(error);
  }
};

export const getMyData = async () => {
  try {
    const res = await fetch(
      "https://giovannidw.github.io/web-app-from-scratch-2324/info.json",
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
