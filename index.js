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

const transpNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navBar.classList.add("navObs");
  }
  if (entry.isIntersecting) {
    navBar.classList.remove("navObs");
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
