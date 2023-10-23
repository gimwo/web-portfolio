const landingSec = document.querySelector("#landing");
const aboutSec = document.querySelector("#about");
const navBar = document.querySelector("nav");

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
