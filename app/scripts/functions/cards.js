const images = [
  "../app/assets/images/bangkok1.png",
  "../app/assets/images/bangkok2.png",
  "../app/assets/images/bangkok3.png"
];

const data = [{
  title: "Descubre Bangkok con Iberojet",
  region: "Marruecos, África",
  days: "9 días",
  price: "248,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.124,00 €" },
    { label: "Impuesto", amount: "4,43 €" },
    { label: "Lorem ipsum", amount: "150,42 €" }
  ],
  total: "2.455,00 €",
  category: 'Quads',
  image: images[0]
},
{
  title: "Aventura en el desierto del Sahara",
  region: "Marruecos, África",
  days: "7 días",
  price: "310,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.050,00 €" },
    { label: "Impuesto", amount: "5,40 €" },
    { label: "Seguro de viaje", amount: "120,00 €" }
  ],
  total: "1.455,40 €",
  category: "Parapente",
  image: images[1]
},
{
  title: "Rincones ocultos de Japón",
  region: "Asia Oriental",
  days: "12 días",
  price: "789,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "2.500,00 €" },
    { label: "Impuesto", amount: "8,75 €" },
    { label: "Guía turístico", amount: "180,00 €" }
  ],
  total: "3.477,75 €",
  category: "Rafting",
  image: images[2]
},
{
  title: "Circuito en la Patagonia Argentina",
  region: "Sudamérica",
  days: "10 días",
  price: "645,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.870,00 €" },
    { label: "Impuesto", amount: "6,50 €" },
    { label: "Tasas locales", amount: "89,99 €" }
  ],
  total: "2.611,49 €",
  category: "Explora",
  image: images[0]
},
{
  title: "Playas escondidas de Filipinas",
  region: "Sudeste Asiático",
  days: "8 días",
  price: "412,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.220,00 €" },
    { label: "Impuesto", amount: "3,12 €" },
    { label: "Extras", amount: "70,00 €" }
  ],
  total: "1.705,12 €",
  category: "Buceo",
  image: images[2]
},
{
  title: "Ruta gastronómica por Italia",
  region: "Europa Occidental",
  days: "6 días",
  price: "525,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.400,00 €" },
    { label: "Impuesto", amount: "7,20 €" },
    { label: "Degustaciones", amount: "95,00 €" }
  ],
  total: "2.027,20 €",
  category: "Paracaídas",
  image: images[0]
},
{
  title: "Templos y tradición en Sri Lanka",
  region: "Asia del Sur",
  days: "10 días",
  price: "690,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.650,00 €" },
    { label: "Impuesto", amount: "6,70 €" },
    { label: "Visitas guiadas", amount: "145,00 €" }
  ],
  total: "2.491,70 €",
  category: "Buceo",
  image: images[0]
},
{
  title: "Safari en Kenia con guía local",
  region: "África Oriental",
  days: "9 días",
  price: "845,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "2.050,00 €" },
    { label: "Impuesto", amount: "9,60 €" },
    { label: "Permisos", amount: "130,00 €" }
  ],
  total: "3.034,60 €",
  category: "Snowboard",
  image: images[0]
},
{
  title: "Navegación por los fiordos noruegos",
  region: "Europa del Norte",
  days: "7 días",
  price: "578,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.800,00 €" },
    { label: "Impuesto", amount: "5,80 €" },
    { label: "Excursiones", amount: "110,00 €" }
  ],
  total: "2.493,80 €",
  category: "Snowboard",
  image: images[1]
},
{
  title: "Maravillas de Perú y Machu Picchu",
  region: "Sudamérica",
  days: "11 días",
  price: "723,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "2.400,00 €" },
    { label: "Impuesto", amount: "7,99 €" },
    { label: "Guías y entradas", amount: "180,00 €" }
  ],
  total: "3.310,99 €",
  category: "Rafting",
  image: images[0]
},
{
  title: "Costa Amalfitana y Capri",
  region: "Italia, Europa",
  days: "5 días",
  price: "389,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.300,00 €" },
    { label: "Impuesto", amount: "4,90 €" },
    { label: "Extras", amount: "80,00 €" }
  ],
  total: "1.773,90 €",
  category: "Rafting",
  image: images[1]
},
{
  title: "Trekking por los Alpes Suizos",
  region: "Europa Central",
  days: "8 días",
  price: "615,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "2.050,00 €" },
    { label: "Impuesto", amount: "6,25 €" },
    { label: "Equipo incluido", amount: "95,00 €" }
  ],
  total: "2.766,25 €",
  category: "Surf",
  image: images[2]
},
{
  title: "Templos de Angkor en Camboya",
  region: "Sudeste Asiático",
  days: "9 días",
  price: "468,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.430,00 €" },
    { label: "Impuesto", amount: "4,15 €" },
    { label: "Entradas", amount: "90,00 €" }
  ],
  total: "1.992,15 €",
  category: "Surf",
  image: images[0]
},
{
  title: "Islas griegas: Santorini y Mykonos",
  region: "Europa del Sur",
  days: "7 días",
  price: "535,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.580,00 €" },
    { label: "Impuesto", amount: "5,25 €" },
    { label: "Transporte marítimo", amount: "100,00 €" }
  ],
  total: "2.220,25 €",
  category: "Surf",
  image: images[1]
},
{
  title: "Ruta maya en México",
  region: "Centroamérica",
  days: "10 días",
  price: "698,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.980,00 €" },
    { label: "Impuesto", amount: "6,99 €" },
    { label: "Entradas a zonas arqueológicas", amount: "145,00 €" }
  ],
  total: "2.829,99 €",
  category: "Surf",
  image: images[0]
},
{
  title: "Expedición a Islandia",
  region: "Europa del Norte",
  days: "6 días",
  price: "782,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "2.300,00 €" },
    { label: "Impuesto", amount: "7,30 €" },
    { label: "Tours incluidos", amount: "160,00 €" }
  ],
  total: "3.249,30 €",
  category: "Tirolina",
  image: images[0]
},
{
  title: "Ciudades imperiales de Marruecos",
  region: "Marruecos, África",
  days: "8 días",
  price: "442,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.300,00 €" },
    { label: "Impuesto", amount: "3,85 €" },
    { label: "Guía local", amount: "95,00 €" }
  ],
  total: "1.840,85 €",
  category: "Tirolina",
  image: images[0]
},
{
  title: "Crucero por el Caribe",
  region: "Caribe",
  days: "9 días",
  price: "880,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "2.500,00 €" },
    { label: "Impuesto", amount: "9,50 €" },
    { label: "Excursiones", amount: "150,00 €" }
  ],
  total: "3.539,50 €",
  category: "Quads",
  image: images[2]
},
{
  title: "Río de Janeiro y Cataratas de Iguazú",
  region: "Brasil, Sudamérica",
  days: "10 días",
  price: "625,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.980,00 €" },
    { label: "Impuesto", amount: "6,80 €" },
    { label: "Entradas y tours", amount: "130,00 €" }
  ],
  total: "2.741,80 €",
  category: "Quads",
  image: images[2]
},
{
  title: "Descubre Bangkok con Iberojet",
  region: "Tailandia, Asia",
  days: "9 días",
  price: "248,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.124,00 €" },
    { label: "Impuesto", amount: "4,43 €" },
    { label: "Lorem ipsum", amount: "150,42 €" }
  ],
  total: "2.455,00 €",
  category: "Quads",
  image: images[0]
},
{
  title: "Tour cultural por Estambul",
  region: "Turquía, Asia-Europa",
  days: "7 días",
  price: "399,00 €",
  breakdown: [
    { label: "Precio antes de impuestos", amount: "1.300,00 €" },
    { label: "Impuesto", amount: "5,10 €" },
    { label: "Entradas y transporte", amount: "85,00 €" }
  ],
  total: "1.789,10 €",
  category: "Snowboard",
  image: images[0]
}];


function createBreakdown(item, toggle) {

  const breakdown = document.createElement("article");
  breakdown.className = "card-detail";

  breakdown.innerHTML = `
    <header class="card-detail__header">
      <h3 class="card-detail__title">Desglose de precios</h3>
      <button class="card-detail__close">X</button>
    </header>
    <section class="card-detail__content">
      <p class="card__location">
        <strong>${item.region}</strong> 
         ${item.days}
      </p>
      <ul class="card-detail__list">${item.breakdown.map(b => `
        <li class="card-detail__items">
          <span>${b.label}</span>
          <strong class="card-detail__items-strong">${b.amount}</strong>
        </li>`).join("")}
      </ul>
    </section>
    <footer class="card-detail__footer">
      <span>Precio final</span>
      <span class="card-detail__footer-span--big">${item.total}</span>
    </footer>
  `;

  breakdown.querySelector(".card-detail__close").addEventListener("click", () => {
    breakdown.remove();
    const arrow = toggle.querySelector(".card__toggle-arrow");
    arrow.classList.remove("card__toggle-arrow--up");
    arrow.classList.add("card__toggle-arrow--down");
  });

  return breakdown;
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <header>
      <figure class="card__image">
        <img src="${item.image}" alt="photograph">
        <figcaption class="card__tag" aria-label="Activity type">${item.category}</figcaption>
      </figure>
    </header>
    <section class="card__content">
      <p class="card__location">
        <strong>${item.region}</strong>
          ${item.days}
      </p>
      <h3 class="card__title">${item.title}</h3>
    </section>
    <footer class="card__footer">
      <div class="card__actions">
        <aside class="card__price">
          <span>Desde</span>
          <strong>${item.price}</strong>
        </aside>
        <button class="card__toggle">
          <span class="card__toggle-text">Ver desglose</span>
          <span class="card__toggle-arrow card__toggle-arrow--down">&lt;</span>
        </button>
      </div>
      <button class="card__button">Reservar</button>
    </footer>
  `;

  const toggle = card.querySelector(".card__toggle");

  toggle.addEventListener("click", () => {
    const existing = document.querySelector(".card-detail");
    const arrow = toggle.querySelector(".card__toggle-arrow");

    if (existing) {
      existing.remove();
      arrow.classList.remove("card__toggle-arrow--up");
      arrow.classList.add("card__toggle-arrow--down");
      return;
    }

    const breakdown = createBreakdown(item, toggle);

    card.appendChild(breakdown);

    requestAnimationFrame(() => {
      breakdown.classList.add("card-detail--visible");
    });

    arrow.classList.remove("card__toggle-arrow--down");
    arrow.classList.add("card__toggle-arrow--up");
  });

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const dataFilters = document.getElementsByClassName('filter__checkbox');
  for (const element of dataFilters) {
    element.addEventListener('click', checkSelected)
  }
  checkSelected();
});

function checkSelected() {
  const container = document.querySelector(".cards-container");
  container.innerHTML = '';
  const dataFilters = document.getElementsByClassName('filter__checkbox');
  let selected = [];
  for (const element of dataFilters) {
    if (element.checked) {
      selected.push(element.id)
    }
  }
  const dataToShow = data.filter(item => selected.includes(item.category.toLocaleLowerCase()));

  dataToShow.forEach(item => container.appendChild(createCard(item)));
}
