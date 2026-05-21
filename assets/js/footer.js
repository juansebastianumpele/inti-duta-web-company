function loadFooter(basePath) {
  const html = `<footer id="footer" class="footer dark-background">

    <div class="container footer-top">
      <div class="row gy-4 justify-content-between">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="${basePath}index.html" class="logo d-flex align-items-center">
            <img src="${basePath}assets/img/intiduta-white.png" alt="IDLP Logo" style="max-height: 40px; margin-right: 15px;">
            <span class="sitename">Inti Duta Lestari Plasindo</span>
          </a>
          <div class="footer-contact pt-3">
            <p><strong>PT. INTI DUTA LESTARI PLASINDO</strong></p>
            <p>Rungkut Industri 3 No. 29<br>Gunung Anyar - Surabaya, Jawa Timur</p>
            <p class="mt-3"><strong>Telepon:</strong> <span>031-841-4951</span></p>
            <p><strong>Email:</strong> <span>info@intiduta.com</span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 footer-links">
          <h4>Tautan Navigasi</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#hero">Beranda</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="${basePath}index.html#about">Tentang Kami</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="${basePath}index.html#services">Layanan Manufaktur</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="${basePath}produk.html">Produk</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="${basePath}index.html#contact">Hubungi Kami</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Inti Duta Lestari Plasindo</strong> <span>All Rights
          Reserved</span></p>
      <div class="credits">

      </div>
    </div>

  </footer>`;
  document.currentScript.insertAdjacentHTML("beforebegin", html);
}
