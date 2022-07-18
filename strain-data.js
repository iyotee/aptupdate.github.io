/* CONSTANTES */

const searchQuery = document.getElementById("search_q");
const searchButton = document.getElementById("search-btn");

/* FUNCTIONS */

// Favicon
function setFavicons(favImg) {
  let headTitle = document.querySelector("head");
  let setFavicon = document.createElement("link");
  setFavicon.setAttribute("rel", "shortcut icon");
  setFavicon.setAttribute("href", favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons("./favicon.ico");

// Get strain data from API and display it in the page (search results)
const getStrainData = (query) => {
  /* Fetch to get JWT token from the API */
  fetch("https://enigmatic-retreat-23952.herokuapp.com/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "admin" }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res.token;
    })
    .then((token) => getStrainsList(token));

  /* Fetch to get the strain list from the API */
  const getStrainsList = (token) => {
    fetch(
      `https://enigmatic-retreat-23952.herokuapp.com/api/strains/${query}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // updating UI
        document
          .getElementById("update_img")
          .setAttribute("src", data.data.picture);
        document.getElementById("update_name").innerHTML = data.data.name;
        document.getElementById(
          "update_thc"
        ).innerHTML = `THC ${data.data.thc}%`;
        document.getElementById(
          "update_cbd"
        ).innerHTML = `CBD ${data.data.cbd}%`;
        document.getElementById(
          "update_aka"
        ).innerHTML = `aka: ${data.data.aka}`;
        document.getElementById(
          "update_feelings_1"
        ).innerHTML = `${data.data.feelings[0]}`;
        document.getElementById(
          "update_feelings_2"
        ).innerHTML = `${data.data.feelings[1]}`;
        document.getElementById(
          "update_feelings_3"
        ).innerHTML = `${data.data.feelings[2]}`;
        document.getElementById(
          "update_negatives_1"
        ).innerHTML = `${data.data.negatives[0]}`;
        document.getElementById(
          "update_negatives_2"
        ).innerHTML = `${data.data.negatives[1]}`;
        document.getElementById(
          "update_negatives_3"
        ).innerHTML = `${data.data.negatives[2]}`;
        document.getElementById(
          "update_flavors_1"
        ).innerHTML = `${data.data.flavors[0]}`;
        document.getElementById(
          "update_flavors_2"
        ).innerHTML = `${data.data.flavors[1]}`;
        document.getElementById(
          "update_flavors_3"
        ).innerHTML = `${data.data.flavors[2]}`;
        document.getElementById(
          "update_thclevel"
        ).style.width = `${data.data.thc}%`;
        document.getElementById("update_calmlevel").style.width = `${
          ((data.data.cbd + 1) * data.data.thc) / 2
        }%`;
      })

      .catch((error) => {
        console.log(error);
      });
  };
};

// EVENT LISTENERS
searchButton.addEventListener("click", () => getStrainData(searchQuery.value));
searchQuery.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getStrainData(searchQuery.value);
  }
});
