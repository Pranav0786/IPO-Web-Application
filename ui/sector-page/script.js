const sectors = [
  {
    name: "Abrasives",
    desc: "The one that scraps away all inconsistencies.",
    listed: 3,
    levels: [1, 2, 0, 0],
    img: "images/abrasives.png",
  },
  {
    name: "Advertising & Media",
    desc: "The one that creates and distributes media content.",
    listed: 10,
    levels: [8, 2, 0, 0],
    img: "images/advertising.png",
  },
  {
    name: "Agriculture",
    desc: "The one that gives us vegetables and fruits to eat.",
    listed: 4,
    levels: [3, 0, 1, 0],
    img: "images/agriculture.png",
  },
  {
    name: "Air Conditioners",
    desc: "The one that keeps it cool with no noise.",
    listed: 5,
    levels: [1, 2, 1, 1],
    img: "images/ac.png",
  },
  {
    name: "Airlines",
    desc: "The one that takes us around the world in the shortest time.",
    listed: 6,
    levels: [2, 3, 0, 1],
    img: "images/airlines.png",
  },
  {
    name: "Aluminium Products",
    desc: "The one that can wrap up almost everything.",
    listed: 11,
    levels: [14, 3, 2, 1],
    img: "images/aluminium.png",
  },
  {
    name: "Amusement Parks",
    desc: "The one that's all about the fun stuff and food.",
    listed: 4,
    levels: [1, 2, 0, 1],
    img: "images/parks.png",
  },
  {
    name: "Aquaculture",
    desc: "The one that takes care of aquatic animals.",
    listed: 6,
    levels: [3, 1, 0, 2],
    img: "images/aqua.png",
  },
  {
    name: "Auto Ancillary",
    desc: "The one that provides parts to keep our vehicles running.",
    listed: 14,
    levels: [5, 3, 4, 2],
    img: "images/auto-ancillary.png",
  },
  {
    name: "Automobile Two & Three Wheelers",
    desc: "The one that suits couples and smaller groups.",
    listed: 7,
    levels: [3, 2, 1, 1],
    img: "images/two-wheeler.png",
  },
  {
    name: "Automobile Dealers",
    desc: "The one that makes cars and buses available to public.",
    listed: 4,
    levels: [1, 0, 1, 2],
    img: "images/dealer.png",
  },
  {
    name: "Automobiles - Passenger Cars",
    desc: "The one that lets families travel together comfortably.",
    listed: 4,
    levels: [1, 1, 1, 1],
    img: "images/car.png",
  },
];

const grid = document.getElementById("sectorGrid");

sectors.forEach((sec) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-icon"><img src="${sec.img}" alt="${sec.name}" /></div>
    <h3>${sec.name}</h3>
    <p>${sec.desc}</p>
    <br>
    <div class="listed">${sec.listed} Listed Companies</div>
    <div class="levels">
      MICRO ${sec.levels[0]} | SMALL ${sec.levels[1]} | MID ${sec.levels[2]} | LARGE ${sec.levels[3]}
    </div>
    <button>Details</button>
  `;
  grid.appendChild(card);
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});

function renderCards(filter = "") {
  grid.innerHTML = "";

  const filteredSectors = sectors.filter(
    (sec) =>
      sec.name.toLowerCase().includes(filter.toLowerCase()) ||
      sec.desc.toLowerCase().includes(filter.toLowerCase())
  );

  filteredSectors.forEach((sec) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-icon"><img src="${sec.img}" alt="${sec.name}" /></div>
      <h3>${sec.name}</h3>
      <p>${sec.desc}</p>
      <br>
      <div class="listed">${sec.listed} Listed Companies</div>
      <div class="levels">
        MICRO ${sec.levels[0]} | SMALL ${sec.levels[1]} | MID ${sec.levels[2]} | LARGE ${sec.levels[3]}
      </div>
      <button>Details</button>
    `;
    grid.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  renderCards(e.target.value);
});

renderCards();
