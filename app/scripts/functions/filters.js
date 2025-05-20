const toggleClass = (element, className) => element.classList.toggle(className);

export function handleSections() {
  document.querySelectorAll(".filter__section-header").forEach((header) => {
    header.addEventListener("click", () => {
      toggleClass(header, "open");
      const content = header.nextElementSibling;
      if (content && content.classList.contains("filter__section-content")) {
        toggleClass(content, "visible");
        content.style.maxHeight = content.classList.contains("visible")
          ? `${content.scrollHeight}px`
          : null;
      }
    });
  });
}

export function handleTooltips() {
  const tooltip = document.createElement("div");
  tooltip.classList.add("filter__tooltip");
  document.body.appendChild(tooltip);

  document.querySelectorAll(".filter__info").forEach((icon) => {
    icon.style.cursor = "pointer";

    icon.addEventListener("mouseenter", () => {
      const tooltipText = icon.getAttribute("data-tooltip");
      if (tooltipText) {
        tooltip.textContent = tooltipText;
        const { left, bottom } = icon.getBoundingClientRect();
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${bottom + 5}px`;
        toggleClass(tooltip, "visible");
      }
    });
    icon.addEventListener("mouseleave", () => {
      tooltip.classList.remove("visible");
    });
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".filter__info")) {
      tooltip.classList.remove("visible");
    }
  });
}


export function handleViewMore() {
  const viewMoreLink = document.querySelector(".filter__view-more");
  if (viewMoreLink) {
    viewMoreLink.addEventListener("click", () => {
      const extraOptions = document.querySelectorAll(".filter__option.extra");
      const isHidden = extraOptions[0].classList.contains("hidden");
      extraOptions.forEach((option) => toggleClass(option, "hidden"));
      viewMoreLink.textContent = isHidden ? "Ver menos" : "Ver 21 más";
    });
  }
}

export function showFilters() {
  document.getElementById('toggle-filter').addEventListener('click',function() {
    const containerFilters = document.getElementById('filterContainer');
    containerFilters.classList.toggle('active');
  });
}

export function hiddeFilters() {
  document.getElementById('closeFilter').addEventListener('click', () => {
    const containerFilters = document.getElementById('filterContainer');
    containerFilters.classList.remove('active');
  })
}

export function hiddenToolTips() {
  const tooltip = document.querySelector('.filter__tooltip');
   if (tooltip) {
     tooltip.classList.remove('visible');
   }
}
