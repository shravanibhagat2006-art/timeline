const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < trigger) {
      item.classList.add("show");
    }
  });
});
