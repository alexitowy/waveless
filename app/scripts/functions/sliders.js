document.addEventListener("DOMContentLoaded", function () {
  const slide = document.querySelector(".slide");
  const containerSlide = document.querySelector(".slide__content");
  const leftArrow = document.querySelector(".slide__arrow--left");
  const rightArrow = document.querySelector(".slide__arrow--right");

  const data = [
    {
      img: "url('/app/assets/images/slide.png')",
      title: "Ruta por Australia",
      description: "Si te va la aventura, no te lo puedes perder",
      buttonDescription: "Más información",
      visible: true,
      id: 0
    },
    {
      img: "url('/app/assets/images/asia.png')",
      title: "Ruta por Australia",
      description: "Si te va la aventura, no te lo puedes perder",
      buttonDescription: "Más información",
      visible: false,
      id: 1
    },
    {
      img: "url('/app/assets/images/europa.png')",
      title: "Ruta por Australia",
      description: "Si te va la aventura, no te lo puedes perder",
      buttonDescription: "Más información",
      visible: false,
      id: 2
    }
  ];

  let currentIndex = 0;

  function createSlides() {
    containerSlide.innerHTML = "";

    data.forEach(element => {
      const item = document.createElement("div");
      item.classList.add("slide__item");
      item.id = element.id;
      item.style.backgroundImage = element.img;

      if (element.visible) {
        item.classList.add("visible", "fade-in");
      }

      item.innerHTML = `
        <h2 class="slide__title">${element.title}</h2>
        <p class="slide__text">${element.description}</p>
        <button class="slide__button">${element.buttonDescription}</button>
      `;
      containerSlide.appendChild(item);
    });

    createDots();
  }

  function createDots() {
    let existingDots = document.querySelector(".slide__dots");
    if (existingDots) existingDots.remove();

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("slide__dots");

    data.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("slide__dot");
      if (i === currentIndex) dot.classList.add("active");
      dot.setAttribute("data-index", i);
      dot.addEventListener("click", () => {
        currentIndex = i;
        setActive(currentIndex);
      });
      dotsContainer.appendChild(dot);
    });

    slide.appendChild(dotsContainer);
  }

function setActive(index) {
  const currentSlide = containerSlide.querySelector(".slide__item.visible");
  const nextSlide = containerSlide.querySelector(`.slide__item[id="${index}"]`);

  if (currentSlide === nextSlide) return;

  currentSlide.classList.remove("fade-in");
  currentSlide.classList.add("fade-out");

  nextSlide.classList.remove("fade-out");
  nextSlide.classList.add("fade-in");
  nextSlide.classList.add("visible");

  setTimeout(() => {
    currentSlide.classList.remove("visible", "fade-out");
  }, 500);

  currentIndex = index;
  createDots();
}


  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    setActive(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % data.length;
    setActive(currentIndex);
  });

  createSlides();
});
