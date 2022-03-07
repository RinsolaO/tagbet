const burger = document.querySelector(".burger");

burger.addEventListener("click", handleClick);

function handleClick() {
  const navBar = document.querySelector(".nav-bar");

  navBar.classList.toggle("active");
}

// SCROLL REVEAL

const sr = ScrollReveal({
  distance: "40px",
  duration: 3000,
  delay: 100,
});

sr.reveal(
  ` .mini-middle-flex,.title, .challenge-title , .challenge-footer, .footer-container .logo, .footer-text`,
  {
    origin: "top",
    interval: 500,
  }
);

sr.reveal(`.sub-title, .challenge-subtitle, .waitlist, .social-media img`, {
  origin: "bottom",
  delay: 1000,
  interval: 500,
});

sr.reveal(` .mini-flex.home, .winner-mini-flex.first`, {
  origin: "left",
  distance: "80px",
});

sr.reveal(`.mini-flex.away, .winner-mini-flex.second`, {
  origin: "right",
  distance: "80px",
});
