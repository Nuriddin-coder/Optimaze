const button = document.querySelector(".burger_second__btn");
const modal = document.getElementById("modal");

/// show modal:
button.addEventListener("mouseover", () => {
  modal.classList.add("show");
});

button.addEventListener("mouseout", () => {
  modal.classList.remove("show");
});

modal.addEventListener("mouseover", () => {
  modal.classList.add("show");
});

modal.addEventListener("mouseout", () => {
  modal.classList.remove("show");
});

// /// change slide:
// const slides = document.querySelector(".slides");
// const slide = document.querySelectorAll(".slide");

// let index = 1;

// document.querySelector(".next-btn").addEventListener("click", function () {
//   index = (index + 1) % slide.length;
//   updateSlidePosition();
// });

// document.querySelector(".prev-btn").addEventListener("click", function () {
//   index = (index - 1 + slide.length) % slide.length;
//   updateSlidePosition();
// });

// function updateSlidePosition() {
//   slides.style.transform = `translateX(${-index * 100}%)`;
// }

function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector(".icon");

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.textContent = "+";
  } else {
    content.style.display = "block";
    icon.textContent = "-";
  }
}
