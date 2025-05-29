document.getElementById("hamburgerBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("show");
});

const items = document.querySelectorAll(".sidebar ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
