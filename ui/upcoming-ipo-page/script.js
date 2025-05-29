// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");
themeToggle.onclick = () => document.body.classList.toggle("dark");
mobileThemeToggle.onclick = () => document.body.classList.toggle("dark");

// Mobile menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
hamburgerBtn.onclick = () => mobileMenu.classList.add("open");
closeMenu.onclick = () => mobileMenu.classList.remove("open");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    hamburgerBtn.style.display = "block";
  } else {
    hamburgerBtn.style.display = "none";
  }
});
if (window.innerWidth <= 768) {
  hamburgerBtn.style.display = "block";
}
const toggles = document.querySelectorAll(".faq-box");

toggles.forEach((box) => {
  const button = box.querySelector(".toggle-btn");
  button.addEventListener("click", () => {
    const isOpen = box.classList.contains("open");

    // Close all
    toggles.forEach((b) => {
      b.classList.remove("open");
      b.querySelector(".toggle-btn").textContent = "+";
    });

    // Open current if it was closed
    if (!isOpen) {
      box.classList.add("open");
      button.textContent = "−";
    }
  });
});
