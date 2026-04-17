
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("flex");

  // Change icon
  if (navLinks.classList.contains("flex")) {
    hamburger.innerHTML = "&times;"; // ×
  } else {
    hamburger.innerHTML = "&#9776;"; // ☰
  }
});


const allDetails = document.querySelectorAll(".faq details");

allDetails.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      allDetails.forEach((other) => {
        if (other !== detail) {
          other.open = false;
        }
      });
    }
  });
});




function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.getElementById("homeLink").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
