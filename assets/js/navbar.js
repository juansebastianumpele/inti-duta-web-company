function loadNavbar(basePath) {
  const html = `<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="${basePath}index.html" class="logo d-flex align-items-center me-auto">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="${basePath}assets/img/logo idlp.png" alt="">

      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="${basePath}index.html#hero" class="active">Beranda</a></li>
          <li><a href="${basePath}index.html#about">Tentang Kami</a></li>
                    <li class="dropdown"><a href="${basePath}index.html#products"><span>Produk Kami</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span>Produk Konsumen</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="${basePath}katalog/produk-konsumen/asena/">Asena</a></li>
                  <li><a href="${basePath}katalog/produk-konsumen/misty/">Misty</a></li>
                  <li><a href="${basePath}katalog/produk-konsumen/master/">Master</a></li>
                  <li><a href="${basePath}katalog/produk-konsumen/safari/">Safari</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Produk Industri</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="${basePath}katalog/produk-industri/argo/">Botol Argo</a></li>
                  <li><a href="${basePath}katalog/produk-industri/jerigen/">Jerigen</a></li>
                  <li><a href="${basePath}katalog/produk-industri/pump/">Botol pump & Spray</a></li>
                  <li><a href="${basePath}katalog/produk-industri/minuman/">Botol Minuman</a></li>
                  <li><a href="${basePath}katalog/produk-industri/toples/">Toples Makanan</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="${basePath}index.html#services">Layanan Manufaktur</a></li>
          <!-- <li><a href="#team">P</a></li> -->
          <!-- <li><a href="${basePath}/portfolio-details.html">Produk Kami</a></li> -->

          
          <li><a href="${basePath}index.html#contact">Hubungi Kami</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <!--<a class="cta-btn" href="${basePath}index.html#about">Get Started</a> -->

    </div>
  </header>`;
  document.currentScript.insertAdjacentHTML("beforebegin", html);
}
