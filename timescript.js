let currentPage = 0;
const pages = document.querySelectorAll(".page");

function openBook() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("bookWrapper").style.display = "block";
  document.getElementById("bgMusic").play();
}

function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage].style.transform = "rotateY(-180deg)";
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].style.transform = "rotateY(0deg)";
  }
}
