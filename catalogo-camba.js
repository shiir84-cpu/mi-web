/**
 * Catálogo CAMBA — datos editables
 *
 * Imágenes (manual): en cada producto, el array "imagenes" son rutas o URLs
 * que vos definís. Ejemplos (relativas al HTML):
 *   "imagenes/ESC-001-1.jpg"
 *   "imagenes/escritorio-industrial/foto1.webp"
 * También podés usar URLs absolutas (Drive, hosting, etc.).
 * Hasta varias fotos por producto: galería con puntos y lightbox.
 */

// WhatsApp — código país + área + número (sin + ni espacios)
const WA_NUMBER = "5493794000000";

const PRODUCTOS = [
  {
    id: "ESC-001",
    categoria: "escritorios",
    nombre: "Escritorio Industrial Macizo",
    descripcion: "Madera araucaria maciza de 35mm de espesor. Tubos estructurales de hierro 60x20mm. .",
    material: "Madera + Hierro",
    imagenes: [
      "imagenes/ESC-001-1.jpeg",
      "imagenes/ESC-001-2.jpeg",
      "imagenes/ESC-001-3.jpeg",
    ],
    medidas: [
      { label: "100 × 60 cm", precio: 85000 },
      { label: "120 × 60 cm", precio: 98000 },
      { label: "150 × 60 cm", precio: 115000 },
      { label: "200 × 60 cm", precio: 132000 },
    ],
  },
  {
    id: "ESC-002",
    categoria: "escritorios",
    nombre: "Escritorio Industrial Fijo",
    descripcion: "Madera araucaria maciza de 35mm de espesor. Tubos estructurales de hierro 60x20mm.",
    material: "Madera + Hierro",
    imagenes: [
      "imagenes/ESC-002 -1.jpeg",
      "imagenes/ESC-002 -2.jpeg",
      "imagenes/ESC-002 -3.jpeg",
    ],
    medidas: [
      { label: "120 × 60cm", precio: 92000 },
     
    ],
  },
  {
    id: "ESC-003",
    categoria: "escritorios",
    nombre: "Escritorio Industrial Patas A",
    descripcion: "Esquinero de alto aprovechamiento. Estructura hierro macizo 2\" con terminación negra. Tablero de madera maciza.",
    material: "Madera + Hierro",
    imagenes: [
      "imagenes/ESC-003 -1.jpg",
      "imagenes/ESC-003 -2.jpg",
      "imagenes/ESC-003 -3.jpeg",
    ],
    medidas: [
      { label: "150 × 60 cm", precio: 145000 },
     
    ],
  },
  {
    id: "MC-001",
    categoria: "mesas-comedor",
    nombre: "Mesa Comedor Maciza",
    descripcion: "Tapa de madera maciza cepillada con vetas naturales. Base hierro artesanal. Terminación cera o poliuretano al agua.",
    material: "Madera Maciza + Hierro",
    imagenes: ["imagenes/MC-001-1.jpg",],
    medidas: [
      { label: "120 × 80 cm — 4 pers.", precio: 185000 },
      { label: "160 × 90 cm — 6 pers.", precio: 245000 },
      { label: "200 × 90 cm — 8 pers.", precio: 310000 },
      { label: "240 × 100 cm — 10 pers.", precio: 390000 },
    ],
  },
  {
    id: "MC-002",
    categoria: "mesas-comedor",
    nombre: "Mesa Comedor Lisa",
    descripcion: "Patas en horquilla de hierro doblado artesanalmente. Tapa maciza pintada o natural. Estética industrial premium.",
    material: "Madera Maciza + Hierro",
    imagenes: [],
    medidas: [
      { label: "140 × 80 cm", precio: 220000 },
      { label: "180 × 90 cm", precio: 285000 },
      { label: "220 × 95 cm", precio: 360000 },
    ],
  },
  {
    id: "MC-002",
    categoria: "mesas-comedor",
    nombre: "Mesa Comedor Fija",
    descripcion: "Patas en horquilla de hierro doblado artesanalmente. Tapa maciza pintada o natural. Estética industrial premium.",
    material: "Madera Maciza + Hierro",
    imagenes: [],
    medidas: [
      { label: "140 × 80 cm", precio: 220000 },
      { label: "180 × 90 cm", precio: 285000 },
      { label: "220 × 95 cm", precio: 360000 },
    ],
  },
  {
    id: "MC-002",
    categoria: "mesas-comedor",
    nombre: "Mesa Comedor Low Cost",
    descripcion: "Patas en horquilla de hierro doblado artesanalmente. Tapa maciza pintada o natural. Estética industrial premium.",
    material: "Madera Maciza + Hierro",
    imagenes: [],
    medidas: [
      { label: "140 × 80 cm", precio: 220000 },
      { label: "180 × 90 cm", precio: 285000 },
      { label: "220 × 95 cm", precio: 360000 },
    ],
  },
  {
    id: "MC-003",
    categoria: "mesas-comedor",
    nombre: "Mesa Bar/Pizzerias",
    descripcion: "Base con dos travesaños centrales de hierro. Gran resistencia estructural. Ideal ambientes rústicos e industriales.",
    material: "Madera Maciza + Hierro",
    imagenes: [],
    medidas: [
      { label: "160 × 85 cm", precio: 258000 },
      { label: "200 × 90 cm", precio: 328000 },
      { label: "240 × 95 cm", precio: 415000 },
    ],
  },
  {
    id: "MR-001",
    categoria: "mesas-ratona",
    nombre: "Mesa Ratona Hierro y Madera",
    descripcion: "Complemento perfecto para living. Tapa de madera con estructura metálica. Disponible en negro y grafito.",
    material: "Madera + Hierro",
    imagenes: [],
    medidas: [
      { label: "60 × 60 cm", precio: 72000 },
      { label: "80 × 50 cm (rectangular)", precio: 82000 },
      { label: "90 × 55 cm", precio: 95000 },
    ],
  },
  {
    id: "MR-002",
    categoria: "mesas-ratona",
    nombre: "Mesa Ratona Redonda Pata Araña",
    descripcion: "Base tipo araña de 4 patas en hierro con tapa redonda. Ideal espacios pequeños y livings modernos.",
    material: "Madera + Hierro",
    imagenes: [],
    medidas: [
      { label: "ø 60 cm", precio: 68000 },
      { label: "ø 75 cm", precio: 82000 },
      { label: "ø 90 cm", precio: 98000 },
    ],
  },
  {
    id: "EST-001",
    categoria: "estantes",
    nombre: "Rack Industrial Flotante",
    descripcion: "Sistema de estantes con soportes de hierro en L. Tablas de madera maciza. Fácil instalación. Ideal locales y hogares.",
    material: "Madera + Hierro",
    imagenes: [],
    medidas: [
      { label: "80 cm (1 estante)", precio: 28000 },
      { label: "120 cm (1 estante)", precio: 36000 },
      { label: "Set × 3 uds. 80 cm", precio: 75000 },
      { label: "Set × 3 uds. 120 cm", precio: 95000 },
    ],
  },
  {
    id: "EST-002",
    categoria: "estantes",
    nombre: "Biblioteca Industrial con Marco",
    descripcion: "Marco de hierro con 4 bandejas de madera. Sólida construcción. Excelente para locales comerciales y hogares.",
    material: "Madera + Hierro",
    imagenes: [],
    medidas: [
      { label: "80 × 180 cm (4 bandejas)", precio: 155000 },
      { label: "100 × 200 cm (5 bandejas)", precio: 195000 },
    ],
  },
];

const WA_BASE =
  "Hola! Los contacto desde el catálogo mayorista. Somos *fabricantes y mayoristas de muebles industriales de madera maciza y hierro*, ubicados en *Corrientes Capital*. ";

function waLink(extra) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_BASE + extra)}`;
}

document.getElementById("wa-main").href = waLink(
  "Quisiera consultar sobre sus productos y condiciones mayoristas."
);

let lbImages = [];
let lbIndex = 0;
let lbProductName = "";

function render(cat) {
  const lista =
    cat === "todos" ? PRODUCTOS : PRODUCTOS.filter((p) => p.categoria === cat);
  const titulos = {
    todos: "Todos los Productos",
    escritorios: "Escritorios",
    "mesas-comedor": "Mesas de Comedor",
    "mesas-ratona": "Mesas Ratona / Centro",
    estantes: "Estantes & Racks",
  };

  let html = `<div class="section-title">${titulos[cat] || "Productos"} <small style="font-size:0.8rem;font-weight:400;color:#999;">(${lista.length} modelos)</small></div><div class="products-grid">`;

  lista.forEach((p) => {
    const idx = PRODUCTOS.indexOf(p);
    const pc = p.medidas[0].precio;
    const imgs = (p.imagenes || []).filter(Boolean);
    const dots =
      imgs.length > 1
        ? `<div class="thumb-dots">${imgs
            .map(
              (_, i) =>
                `<div class="dot${i === 0 ? " active" : ""}" id="dot-${p.id}-${i}" onclick="event.stopPropagation();changeImg('${p.id}',${idx},${i})"></div>`
            )
            .join("")}</div>`
        : "";
    const imgHtml =
      imgs.length > 0
        ? `<img src="${imgs[0]}" alt="${p.nombre}" id="img-${p.id}" loading="lazy">`
        : `<div class="placeholder"><div class="placeholder-icon">🪵</div><div>Agregá fotos en catalogo-camba.js</div></div>`;

    html += `
    <div class="card" id="card-${p.id}">
      <div class="card-image" onclick="openLightbox(${idx},0)">
        ${imgHtml}
        <div class="code-badge">${p.id}</div>
        <div class="material-badge">${p.material}</div>
        ${dots}
      </div>
      <div class="card-body">
        <div class="card-name">${p.nombre}</div>
        <div class="card-desc">${p.descripcion}</div>
        <div class="sizes-label">Seleccioná una medida:</div>
        <div class="sizes-grid">
          ${p.medidas
            .map(
              (m, mi) =>
                `<button class="size-btn${mi === 0 ? " selected" : ""}" id="size-${p.id}-${mi}" onclick="selectSize('${p.id}',${mi})">${m.label}</button>`
            )
            .join("")}
        </div>
        <div class="card-footer">
          <div class="price-block">
            <div class="price-label">Precio mayorista</div>
            <div class="price-value" id="price-${p.id}"><span>$</span>${pc.toLocaleString("es-AR")}</div>
            <div class="price-note">+ IVA · Consultar por cantidad</div>
          </div>
          <a class="btn-consult" id="wa-${p.id}" href="${waLink(`Me interesa el producto *${p.nombre}* (Cód: ${p.id}), medida *${p.medidas[0].label}*. ¿Podría darme más información?`)}" target="_blank">💬 Consultar</a>
        </div>
      </div>
    </div>`;
  });

  html += `</div>`;
  document.getElementById("catalog").innerHTML = html;
}

function selectSize(pid, idx) {
  const p = PRODUCTOS.find((x) => x.id === pid);
  if (!p) return;
  p.medidas.forEach((_, i) => {
    const b = document.getElementById(`size-${pid}-${i}`);
    if (b) b.classList.toggle("selected", i === idx);
  });
  const pr = document.getElementById(`price-${pid}`);
  if (pr) pr.innerHTML = `<span>$</span>${p.medidas[idx].precio.toLocaleString("es-AR")}`;
  const wa = document.getElementById(`wa-${pid}`);
  if (wa)
    wa.href = waLink(
      `Me interesa el producto *${p.nombre}* (Cód: ${p.id}), medida *${p.medidas[idx].label}*. ¿Podría darme más información?`
    );
}

function changeImg(pid, pi, imgIdx) {
  const p = PRODUCTOS[pi];
  if (!p) return;
  const imgs = (p.imagenes || []).filter(Boolean);
  const img = document.getElementById(`img-${p.id}`);
  if (img && imgs[imgIdx]) img.src = imgs[imgIdx];
  imgs.forEach((_, i) => {
    const d = document.getElementById(`dot-${p.id}-${i}`);
    if (d) d.classList.toggle("active", i === imgIdx);
  });
}

function openLightbox(pi, imgIdx) {
  const p = PRODUCTOS[pi];
  const imgs = (p && p.imagenes) ? p.imagenes.filter(Boolean) : [];
  if (!p || !imgs.length) return;
  lbImages = imgs;
  lbIndex = imgIdx;
  lbProductName = p.nombre;
  document.getElementById("lb-img").src = lbImages[lbIndex];
  document.getElementById("lb-caption").textContent = `${p.nombre} · ${lbIndex + 1} / ${lbImages.length}`;
  document.getElementById("lightbox").classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

function lbMove(dir) {
  if (!lbImages.length) return;
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  document.getElementById("lb-img").src = lbImages[lbIndex];
  const cap = document.getElementById("lb-caption");
  if (cap) cap.textContent = `${lbProductName} · ${lbIndex + 1} / ${lbImages.length}`;
}

document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target === this) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (document.getElementById("lightbox").classList.contains("open")) {
    if (e.key === "ArrowRight") lbMove(1);
    if (e.key === "ArrowLeft") lbMove(-1);
  }
});

function filterCat(cat, btn) {
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  render(cat);
}

render("todos");
