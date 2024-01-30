const API = "UacuBy9v-JK1O26W10SqjjJX5_nxEmMsnP5KIVTZbNo";
const formEle = document.getElementById("form-search");
const searchEle = document.getElementById("search_bar");
const showResult = document.querySelector(".searh-result");
const showMoreEle = document.getElementById("show-more");

let page = 1;
let keyWord = "";

async function searchImg() {
  keyWord = searchEle.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${API}&per_page=12`;

  const response = await fetch(url);
  let data = await response.json();
  if (page === 1) {
    showResult.innerHTML = "";
  }
  let results = data.results;
  results.map((results) => {
    let imgEle = document.createElement("img");
    imgEle.src = results.urls.small;
    let anchorEle = document.createElement("a");
    anchorEle.href = results.links.html;
    anchorEle.target = "_blank";

    anchorEle.appendChild(imgEle);

    showResult.appendChild(anchorEle);
  });
  showMoreEle.style.display = "flex";
}

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImg();
});

showMoreEle.addEventListener("click", () => {
  page++;
  searchImg();
});
