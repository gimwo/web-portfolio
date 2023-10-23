const landingSec = document.querySelector("#landing");
const aboutSec = document.querySelector("#about");
const navBar = document.querySelector("nav");
const aboutDivs = document.querySelectorAll(".about--container div");

//Will implement in a future update
// const animatedAbout = function (entries) {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.remove("hide1");
//     }
//   });
// };

// const aboutDivsObserver = new IntersectionObserver(animatedAbout, {
//   root: null,
//   threshold: 0.5,
// });
// aboutDivs.forEach((aboutDiv) => aboutDivsObserver.observe(aboutDiv));
// aboutDivsObserver.observe(aboutDivs);

const scrollCheck = function () {
  let st = window.scrollY || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // Do scroll down code
    navBar.classList.add("navObs");
  } else {
    // Do scroll up code
    navBar.classList.remove("navObs");
  }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

const transpNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    window.addEventListener("scroll", scrollCheck, false);
  }
  if (entry.isIntersecting) {
    window.removeEventListener("scroll", scrollCheck, false);
  }
};

const landingObserver = new IntersectionObserver(transpNav, {
  root: null,
  threshold: 0,
});
landingObserver.observe(landingSec);

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutSec.classList.remove("hide");
    }
  });
};

const obsOptions = {
  root: null,
  threshold: 0.2,
};

const aboutObserver = new IntersectionObserver(obsCallback, obsOptions);
aboutObserver.observe(aboutSec);

let lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
