export const setFavicons = (path) => {
  let headTitle = document.querySelector("head");
  let setFavicon = document.createElement("link");
  setFavicon.setAttribute("rel", "shortcut icon");
  setFavicon.setAttribute("href", path);
  headTitle.appendChild(setFavicon);
};
