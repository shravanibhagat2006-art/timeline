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
}, 1500);
