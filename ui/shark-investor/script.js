document.getElementById("hamburgerBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("show");
});

const investors = [
  "Rakesh Jhunjhunwala",
  "Anil Goel",
  "Ashish Dhawan",
  "Ashish Kacholia",
  "Dolly Rajeev Khanna",
  "Hemendra Kothari",
  "Nemish Shah",
  "Porinju Veliyath",
  "Radhakishan Damani",
  "Sunil Singhania",
  "Vijay Kedia",
  "Anil Goel",
];

const investorImages = {
  "Rakesh Jhunjhunwala": "images/rakesh_jhunjhunwala.png",
  "Anil Goel": "images/anil_goel.png",
  "Ashish Dhawan": "images/ashish_dhawan.png",
  "Ashish Kacholia": "images/ashish_kacholia.png",
  "Dolly Rajeev Khanna": "images/rajeev_khanna.png",
  "Hemendra Kothari": "images/hemendra_kothari.png",
  "Nemish Shah": "images/nemish_shah.png",
  "Porinju Veliyath": "images/porinju.png",
  "Radhakishan Damani": "images/damani.png",
  "Sunil Singhania": "images/sunil_singhania.png",
  "Vijay Kedia": "images/vijay_kedia.png",
  "Anil Goel": "images/anil_goel.png",
};

const grid = document.getElementById("investorGrid");

function renderCards(filter = "") {
  grid.innerHTML = "";
  investors
    .filter((name) => name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((name) => {
      const card = document.createElement("div");
      card.className = "card";
      const imageUrl =
        investorImages[name] || "https://via.placeholder.com/100";
      card.innerHTML = `
        <img src="${imageUrl}" alt="${name}">
        <h3>${name}</h3>
        <p>He started investing in the 90s.<br>His investment style is unique...</p>
        <button>View Holdings</button>
      `;
      grid.appendChild(card);
    });
}

document.getElementById("search").addEventListener("input", (e) => {
  renderCards(e.target.value);
});

renderCards();
