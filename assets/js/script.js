// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function headerStyle() {
  const windowCoords = document.documentElement.clientHeight;
  const element = document.getElementById("header");
  if (window.scrollY < windowCoords) {
    element.classList.remove("header");
  } else {
    element.classList.add("header");
  }
}

window.addEventListener("scroll", () => {
  headerStyle();
});

window.addEventListener("load", () => {
  headerStyle();
});

// document.getElementById("main").addEventListener("wheel", (event) => {
//   const delta = Math.sign(event.deltaY);
//   if (delta > 0) {
//     scrollDown();
//   }
// });
