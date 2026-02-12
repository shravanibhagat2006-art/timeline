function enterSite() {
  document.getElementById("intro").style.display = "none";
}

function toggleItem(element) {
  element.classList.toggle("active");
}

/* Floating Hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 1200);

/* Scroll Progress */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / scrollHeight) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
});
