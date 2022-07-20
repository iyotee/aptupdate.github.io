import { setFavicons } from "./favicon.js";
/* CONSTANTES */

const searchQuery = document.getElementById("search_q");
const searchButton = document.getElementById("search-btn");
const showError = document.getElementById("show_error");

/* FUNCTIONS */

// Favicon

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
      `https://enigmatic-retreat-23952.herokuapp.com/api/strains?name=${query}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (
          data.message === "The research query must be at least 2 characters"
        ) {
          showError.innerHTML = `<strong>Hey !</strong> ${data.message} 🤖`;
          showError.classList.remove("hidden");
          showError.classList.add("show");
          showError.classList.remove("alert-light");
          showError.classList.add("alert-danger");

          return;
        } else if (data.message === "0 strains found") {
          showError.innerHTML = `<strong>How weird !</strong> ${data.message} 🤖`;
          showError.classList.remove("hidden");
          showError.classList.add("show");
          return;
        }

        if (data.message.includes("There")) {
          console.log("strains found");
          showError.classList.add("show");
          showError.classList.remove("hidden");
          showError.classList.remove("alert-danger");
          showError.classList.add("alert-light");
          showError.innerHTML = `<strong>Do you need some help ? </strong> Here are the 3 first entries of the codex 🤖<center>${data.data[0].name}<br />${data.data[1].name}<br />${data.data[2].name}</center>`;
          return;
        }

        function UpdateUI() {
          //add the class hidden from showError
          showError.classList.add("hidden");
          showError.classList.remove("show");
          document
            .getElementById("update_img")
            .setAttribute("src", data.strains[0].picture);
          document.getElementById("update_name").innerHTML =
            data.strains[0].name;
          let span = document.createElement("span");
          let i = document.createElement("i");
          document.getElementById("update_name").appendChild(span);
          span.setAttribute("class", "faticons");
          span.appendChild(i);
          i.setAttribute("class", "fas fa-pencil");
          document.getElementById(
            "update_thc"
          ).innerHTML = `THC ${data.strains[0].thc}%`;
          document.getElementById(
            "update_cbd"
          ).innerHTML = `CBD ${data.strains[0].cbd}%`;
          document.getElementById(
            "update_aka"
          ).innerHTML = `aka: ${data.strains[0].aka}`;
          document.getElementById(
            "update_feelings_1"
          ).innerHTML = `${data.strains[0].feelings[0]}`;
          document.getElementById(
            "update_feelings_2"
          ).innerHTML = `${data.strains[0].feelings[1]}`;
          document.getElementById(
            "update_feelings_3"
          ).innerHTML = `${data.strains[0].feelings[2]}`;
          document.getElementById(
            "update_negatives_1"
          ).innerHTML = `${data.strains[0].negatives[0]}`;
          document.getElementById(
            "update_negatives_2"
          ).innerHTML = `${data.strains[0].negatives[1]}`;
          document.getElementById(
            "update_negatives_3"
          ).innerHTML = `${data.strains[0].negatives[2]}`;
          document.getElementById(
            "update_flavors_1"
          ).innerHTML = `${data.strains[0].flavors[0]}`;
          document.getElementById(
            "update_flavors_2"
          ).innerHTML = `${data.strains[0].flavors[1]}`;
          document.getElementById(
            "update_flavors_3"
          ).innerHTML = `${data.strains[0].flavors[2]}`;
          document.getElementById("update_thclevel").style.width = `${
            data.strains[0].thc * 3
          }%`;
          document.getElementById("update_calmlevel").style.width = `${
            ((data.strains[0].cbd + 1) * data.strains[0].thc) / 2
          }%`;
        }
        // updating UI
        UpdateUI();
      })

      .catch((error) => {
        console.log(error);
      });
  };
};

// EVENT LISTENERS
searchQuery.addEventListener("input", function (e) {
  const search = searchQuery.value.toLowerCase();
  console.log(search);

  // if the search query is empty, add the class hidden from showError
  if (search === "") {
    showError.classList.add("hidden");
    showError.classList.remove("show");
  }
  getStrainData(search);
});
