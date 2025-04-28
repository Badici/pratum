<script>
import logo from './assets/1.svg'
import heroBackground from './assets/banner.png'
import design1 from './assets/Untitled design (1).png'
import design2 from './assets/Untitled design (2).png'
import design3 from './assets/Untitled design (3).png'
import design4 from './assets/Untitled design (4).png'
import design5 from './assets/Untitled design.png'
import stoneTable from './assets/masa piatra 1.png'
import branchLamp from './assets/lampa craca (1).png'
import keithLamp from './assets/lampa keith 1 (3).png'
import cuttingBoard from './assets/Tocator fag 1 (1).png'

export default {
  data() {
    return {
      scrolled: false,
      logo,
      heroBackground,
      galleryImages: [
        { src: design1, alt: 'Woodworking Project 1' },
        { src: design2, alt: 'Woodworking Project 2' },
        { src: design3, alt: 'Woodworking Project 3' },
        { src: design4, alt: 'Woodworking Project 4' },
        { src: design5, alt: 'Woodworking Project 5' },
      ],
      productImages: {
        stoneTable,
        branchLamp,
        keithLamp,
        cuttingBoard
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    toggleMenu() {
      document.querySelector('nav ul').classList.toggle('show');
    }
  }
}
</script>

<template>
  <header :class="{ 'scrolled': scrolled }">
    <div class="logo">
      <img :src="logo" alt="Logo Pratum Woodworks" />
    </div>
    <nav>
      <ul>
        <li><a href="#home">Acasă</a></li>
        <li><a href="#gallery">Galerie</a></li>
        <li><a href="#products">Produse</a></li>
        <li><a href="#about">Despre Noi</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div class="mobile-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="home" class="hero"
      :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})` }">
      <div class="hero-content">
        <h1>PRATUM WOODWORKS</h1>
        <p>Creații din Lemn de Excepție</p>
        <a href="#gallery" class="btn">Explorează Lucrările Noastre</a>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery">
      <h2>Galeria Noastră</h2>
      <div class="gallery-grid">
        <div class="gallery-item" v-for="(image, index) in galleryImages" :key="index">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section id="products" class="products">
      <h2>Produsele noastre</h2>
      <div class="product-list">
        <div class="product">
          <div class="product-image">
            <img :src="productImages.stoneTable" alt="Masă cu Piatră Premium" />
          </div>
          <div class="product-info">
            <h3>Masă cu Piatră Premium</h3>
            <p>Fiecare masă este o piesă unică, creată individual pentru a se potrivi perfect spațiului tău. Combinăm
              frumusețea naturală a pietrei cu meșteșugul măiestrit al lemnului, creând o piesă de artă funcțională care
              va fi centrul atenției în orice spațiu.</p>
            <!-- <div class="price">2.800 €</div> -->
            <a href="#contact" class="btn">Solicită o Consultanță</a>
          </div>
        </div>

        <div class="product reverse">
          <div class="product-image">
            <img :src="productImages.branchLamp" alt="Lampă din Creangă Naturală" />
          </div>
          <div class="product-info">
            <h3>Lampă din Creangă Naturală</h3>
            <p>Fiecare lampă este o creație unică, inspirată de forma naturală a crengii selectate. Nu există două lămpi
              identice - fiecare păstrează caracterul său distinct, transformându-se într-o piesă de artă funcțională
              care aduce natura în interior.</p>
            <!-- <div class="price">350 €</div> -->
            <a href="#contact" class="btn">Solicită o Consultanță</a>
          </div>
        </div>

        <div class="product">
          <div class="product-image">
            <img :src="productImages.keithLamp" alt="Design Lampă Keith" />
          </div>
          <div class="product-info">
            <h3>Lampă Keith</h3>
            <p>O creație minimalistă care redefineste eleganța contemporană. Fiecare lampă Keith este lucrată manual
              din,
              cu atenție meticuloasă la detalii. Designul său unic creează o atmosferă caldă și intimă,
              transformând iluminarea într-o experiență.</p>
            <!-- <div class="price">450 €</div> -->
            <a href="#contact" class="btn">Solicită o Consultanță</a>
          </div>
        </div>

        <div class="product reverse">
          <div class="product-image">
            <img :src="productImages.cuttingBoard" alt="Tocător din Fag" />
          </div>
          <div class="product-info">
            <h3>Tocător din Fag</h3>
            <p>O selecție rafinată de tocătoare din fag tip mozaic, perfecte pentru bucătăria ta. Fiecare tocător este
              lucrat cu
              grijă din lemn de fag select, păstrând modelele unice ale fibrelor. Ideal pentru cei care apreciază
              calitatea și funcționalitatea în bucătărie.</p>
            <div class="price">120 €</div>
            <a href="#contact" class="btn">Comandă Acum</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Bespoke Services Section -->
    <section class="bespoke">
      <h2>Proiecte Personalizate</h2>
      <div class="bespoke-content">
        <p class="bespoke-intro">Dincolo de colecția noastră standard, suntem specializați în realizarea de proiecte
          personalizate care să răspundă nevoilor specifice ale clienților noștri.</p>
        <div class="bespoke-examples">
          <div class="example">
            <h3>Mese Personalizate</h3>
            <p>De la mese de dining până la mese de cafea, creăm piese unice care se potrivesc perfect spațiului și
              stilului tău.</p>
          </div>
          <div class="example">
            <h3>Terase și Structuri</h3>
            <p>Transformăm spațiile exterioare în locuri de relaxare cu terase și structuri din lemn personalizate.</p>
          </div>
          <div class="example">
            <h3>Mobilier Interior</h3>
            <p>Biblioteci, dulapuri, console și alte piese de mobilier realizate conform cerințelor tale specifice.</p>
          </div>
        </div>
        <div class="bespoke-cta">
          <p>Ai o idee pentru un proiect personalizat? Suntem aici să transformăm viziunea ta în realitate.</p>
          <a href="#contact" class="btn">Discută cu Noi</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <h2>Despre Noi</h2>
      <div class="about-content">
        <p>La Pratum Woodworks, suntem meșteșugari pasionați dedicați lucratului în lemn. Călătoria noastră a început
          cu o simplă dragoste pentru frumusețea naturală și posibilitățile infinite ale lemnului.</p>
        <p>Fiecare piesă pe care o creăm este lucrată manual cu atenție meticuloasă la detalii, combinând tehnici
          tradiționale cu designul contemporan. Credem în a lăsa caracterul unic al fiecărei piese de lemn să ne ghideze
          procesul creativ.</p>
        <p>Ne specializăm în produse personalizate, lucrând strâns cu clienții noștri pentru a le transforma viziunile
          în realitate. De la concept până la finalizare, ne punem pasiunea și expertiza în crearea artei funcționale
          care va fi prețuită de generații.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <h2>Contactează-ne</h2>
      <p class="contact-intro">Pentru comenzi personalizate și informații, vă rugăm să ne contactați direct prin oricare
        dintre următoarele canale:</p>
      <div class="contact-methods">
        <div class="contact-method">
          <i class="icon email"></i>
          <h3>Email</h3>
          <a href="mailto:raresbadici@gmail.com">raresbadici@gmail.com</a>
        </div>
        <div class="contact-method">
          <i class="icon whatsapp"></i>
          <h3>WhatsApp</h3>
          <a href="https://wa.me/40728241412">+40 728 241 412</a>
        </div>
        <div class="contact-method">
          <i class="icon instagram"></i>
          <h3>Instagram</h3>
          <a href="https://www.instagram.com/pratumwoodworks/" target="_blank">@pratumwoodworks</a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-content">
      <div class="logo">
        <img :src="logo" alt="Logo Pratum Woodworks" />
      </div>
      <div class="footer-links">
        <h3>Link-uri Rapide</h3>
        <ul>
          <li><a href="#home">Acasă</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <li><a href="#products">Produse</a></li>
          <li><a href="#about">Despre Noi</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h3>Contactează-ne</h3>
        <p>Email: <a href="mailto:raresbadici@gmail.com">raresbadici@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/40728241412">+40 728 241 412</a></p>
        <div class="social-links">
          <a href="https://www.instagram.com/pratumwoodworks/" target="_blank" class="social-icon">
            <i class="icon instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; {{ new Date().getFullYear() }} Pratum Woodworks. Toate drepturile rezervate.</p>
    </div>
  </footer>
</template>

<style>
:root {
  --primary: #ae873b;
  --secondary: #4a3c28;
  --tertiary: #8d7356;
  --light: #f5f0e6;
  --dark: #0c0c0c;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Raleway', sans-serif;
  color: var(--dark);
  background-color: var(--light);
  line-height: 1.6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--secondary);
}

h1 {
  font-size: 3.5rem;
  letter-spacing: 2px;
}

h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

h2:after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: var(--primary);
  margin: 0.5rem auto;
}

a {
  text-decoration: none;
  color: inherit;
}

.btn {
  display: inline-block;
  background-color: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.btn:hover {
  background-color: var(--secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section {
  padding: 100px 5%;
}

/* Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: var(--transition);
  background-color: transparent;
}

header.scrolled {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 5%;
}

header .logo img {
  height: 100px;
  transition: var(--transition);
  border-radius: 50%;
  object-fit: cover;
}

header .logo img:hover {
  transform: scale(1.5);
}

header.scrolled .logo img {
  height: 90px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: var(--primary);
  font-weight: 500;
  position: relative;
  padding: 5px 0;
  transition: var(--transition);
}

nav ul li a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: var(--transition);
}

nav ul li a:hover:after {
  width: 100%;
}

.mobile-menu {
  display: none;
  cursor: pointer;
}

.mobile-menu .bar {
  width: 25px;
  height: 3px;
  background-color: var(--secondary);
  margin: 5px 0;
  transition: var(--transition);
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  color: white;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

/* Gallery Section */
.gallery {
  background-color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  transition: var(--transition);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* Products Section */
.products {
  background-color: var(--light);
}

.product {
  display: flex;
  margin-bottom: 5rem;
  align-items: center;
}

.product.reverse {
  flex-direction: row-reverse;
}

.product-image {
  flex: 1;
  padding: 0 20px;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.product-image img:hover {
  transform: scale(1.02);
}

.product-info {
  flex: 1;
  padding: 0 20px;
}

.product-info h3 {
  color: var(--primary);
  font-size: 1.8rem;
}

.price {
  font-size: 1.5rem;
  color: var(--primary);
  font-weight: 600;
  margin: 1rem 0;
}

.product-info .btn {
  margin-top: 20px;
}

/* Bespoke Section */
.bespoke {
  background-color: var(--light);
  text-align: center;
}

.bespoke-content {
  max-width: 1200px;
  margin: 0 auto;
}

.bespoke-intro {
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  color: var(--secondary);
}

.bespoke-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.example {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
}

.example:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.example h3 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.bespoke-cta {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.bespoke-cta p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.bespoke-cta .btn {
  margin-top: 1rem;
}

/* About Section */
.about {
  background-color: white;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-content p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

/* Contact Section */
.contact {
  background-color: var(--light);
  text-align: center;
}

.contact-intro {
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
}

.contact-methods {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.contact-method {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  flex: 1;
  min-width: 250px;
  max-width: 300px;
}

.contact-method:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 15px;
}

.icon.email {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ae873b'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3C/svg%3E");
}

.icon.whatsapp {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ae873b'%3E%3Cpath d='M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411'/%3E%3C/svg%3E");
}

.icon.instagram {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ae873b'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/%3E%3C/svg%3E");
}

.contact-method h3 {
  margin-bottom: 10px;
}

.contact-method a {
  color: var(--primary);
  font-weight: 500;
  transition: var(--transition);
}

.contact-method a:hover {
  color: var(--secondary);
}

/* Footer */
footer {
  background-color: var(--secondary);
  color: white;
  padding: 50px 5% 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
}

footer .logo img {
  height: 80px;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a,
.footer-contact a {
  color: var(--light);
  transition: var(--transition);
}

.footer-links a:hover,
.footer-contact a:hover {
  color: var(--primary);
}

.social-links {
  margin-top: 15px;
}

.social-icon {
  display: inline-block;
  margin-right: 10px;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 992px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  .product {
    flex-direction: column;
  }

  .product.reverse {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    padding: 0;
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  nav ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    padding: 20px 0;
  }

  nav ul.show {
    display: flex;
  }

  nav ul li {
    margin: 10px 0;
    text-align: center;
  }

  .mobile-menu {
    display: block;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1.2rem;
  }

  section {
    padding: 80px 5%;
  }

  .footer-content>div {
    flex: 1 1 100%;
    text-align: center;
  }

  .bespoke-examples {
    grid-template-columns: 1fr;
  }

  .example {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .contact-method {
    flex: 1 1 100%;
  }
}
</style>
