document.querySelectorAll(".nav-section > button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.parentElement;
    const items = btn.nextElementSibling;

    if (!items || !items.classList.contains("nav-items")) return;

    const isOpen = items.style.display === "block";

    // Ferme les sections au même niveau
    const parent = section.parentElement;
    parent.querySelectorAll(":scope > .nav-section").forEach((other) => {
      if (other !== section) {
        other.classList.remove("open");
        const otherItems = other.querySelector(":scope > .nav-items");
        if (otherItems) otherItems.style.display = "none";
      }
    });

    // Toggle
    items.style.display = isOpen ? "none" : "block";
    section.classList.toggle("open", !isOpen);
  });
});

// Ouvre automatiquement le menu actif
window.addEventListener("DOMContentLoaded", () => {
  const activeLink = document.querySelector(".nav-link.active");
  if (!activeLink) return;

  let el = activeLink.parentElement;
  while (el) {
    if (el.classList && el.classList.contains("nav-section")) {
      el.classList.add("open");
      const items = el.querySelector(":scope > .nav-items");
      if (items) items.style.display = "block";
    }
    el = el.parentElement;
  }
});
