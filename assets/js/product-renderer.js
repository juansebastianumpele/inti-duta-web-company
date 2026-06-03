// assets/js/product-renderer.js

function renderProductCards(containerId, products, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = "";
  products.forEach((p) => {
    // Tentukan class pembungkus (apakah menggunakan Isotope untuk halaman galeri utama, atau grid biasa)
    const wrapperClass = options.isIsotope
      ? `col-lg-4 col-md-6 portfolio-item isotope-item ${p.filterClass || ""}`
      : `col-lg-4 col-md-6 mb-4`;

    // Tentukan tombol Zoom jika ada
    const zoomBtn = p.zoomImg
      ? `<a href="${p.zoomImg}" class="glightbox btn btn-light rounded-circle p-2 mx-2" title="Perbesar"><i class="bi bi-zoom-in fs-4"></i></a>`
      : "";

    // Tentukan tampilan teks (ukuran vs deskripsi)
    const textDesc = p.size
      ? `<p class="card-text text-muted small mb-4">Ukuran: ${p.size}</p>`
      : `<p class="card-text text-muted small mb-4">${p.desc || ""}</p>`;

    html += `
      <div class="${wrapperClass}">
        <div class="card h-100 border-0 product-card shadow-sm">
          <div class="card-img-top-wrapper position-relative overflow-hidden text-center" style="background-color: #f8f9fa; padding: 20px;">
            <img src="${p.img}" class="card-img-top img-fluid transition-scale" alt="${p.name}" style="max-height: 250px; width: auto; object-fit: contain;">
            <div class="product-overlay d-flex align-items-center justify-content-center">
              ${zoomBtn}
              <a href="${p.link}" class="btn btn-light rounded-circle p-2 mx-2" title="Detail"><i class="bi bi-link-45deg fs-4"></i></a>
            </div>
          </div>
          <div class="card-body text-center d-flex flex-column pt-4">
            <h5 class="card-title fw-bold text-dark mb-2">${p.name}</h5>
            ${textDesc}
            <div class="mt-auto">
              <a href="${p.link}" class="btn btn-outline-accent rounded-pill px-4 py-2 fw-semibold">Lihat Detail Produk</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Render HTML ke dalam DOM
  container.innerHTML = html;
}
