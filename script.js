const leftPage = document.getElementById("page-left");
const rightPage = document.getElementById("page-right");
const pageBtn = document.getElementById("page-button");

const PAGES = {
  LEFT: 0,
  RIGHT: 1,
};

var pageOpen = PAGES.LEFT;
const ANIMATION_DELAY = 0.0061;

function animateBtn() {
  if (pageBtn.classList.contains("animating")) return;
  pageBtn.classList.add("animating");
  setTimeout(() => {
    if (pageOpen === PAGES.LEFT) {
      pageBtn.style.left = "auto";
      pageBtn.style.right = "5%";
      pageBtn.style.backgroundColor = "#eee";
      pageBtn.style.boxShadow = "0 0 10px #eee";
    } else {
      pageBtn.style.left = "5%";
      pageBtn.style.right = "auto";
      pageBtn.style.backgroundColor = "#111";
      pageBtn.style.boxShadow = "0 0 10px #111";
    }
  }, 500);
  setTimeout(() => {
    pageBtn.classList.remove("animating");
  }, 1000);
}

function handlePageChange() {
  if (pageOpen === PAGES.LEFT) {
    rightPage.style.left = 0;
    leftPage.style.right = "100%";
    pageOpen = PAGES.RIGHT;
  } else {
    rightPage.style.left = "100%";
    leftPage.style.right = 0;
    pageOpen = PAGES.LEFT;
  }
  animateBtn();
}

document.addEventListener("mousemove", (e) => {
  if (pageOpen === PAGES.LEFT) {
    if (e.screenX >= document.body.clientWidth * 0.9)
      pageBtn.classList.add("showing");
    else pageBtn.classList.remove("showing");
  } else {
    if (e.screenX <= document.body.clientWidth * 0.1)
      pageBtn.classList.add("showing");
    else pageBtn.classList.remove("showing");
  }
});

pageBtn.addEventListener("click", handlePageChange);
