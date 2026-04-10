
// const hamburger = document.getElementById("hamburger");
//   const navLinks = document.querySelector(".nav-links");

//   hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("hidden");  // show/hide menu
//     navLinks.classList.toggle("flex");    // make links stack vertically
//     navLinks.classList.toggle("flex-col");
//     navLinks.classList.toggle("gap-5");
//   });


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