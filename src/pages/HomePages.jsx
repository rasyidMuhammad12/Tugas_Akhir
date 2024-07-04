import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import WhyImage from "../assets/img/why.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomePages = () => {
  return (
    <div className="HomePage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1>
                Mulai Belajar <br /> <span>Frontend</span> Disini
              </h1>
              <p>
                kamu dapat belajar tentang HTML,CSS,Javascript <br /> yang sangat dasar bersama kami
              </p>
              <div className="tombol">
                <button>
                  {" "}
                  <a href="/category">cek materi </a>{" "}
                </button>
              </div>
            </Col>
            <Col lg="6">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row className="why-box d-flex ">
          <Col lg="6">
            <img src={WhyImage} alt="why-img" />
          </Col>
          <Col lg="6">
            <h1>
              Apasih <br /> <span>Frontend ? </span>
            </h1>
            <p>
              Frontend developer bertugas untuk mengembangkan website yang menggunakan baris kode HTML, CSS, dan Javascript untuk menjadikan tampilan web lebih menarik. Halaman muka di sebuah website
              merupakan hasil dari beberapa susunan data, design, konten, dan fungsi
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="kategori-judul text-center">
          <h1 className="fw-bold text-center">Skill</h1>
          <p className="text">
            Skill apa ajasih yang di perlukan untuk menjadi seorang frontend developer?
            <br />
            yang sudah pasti adalah HTML, CSS dan juga Javascript, namun tidak hanya itu, masih banyak skill yang <br />
            harus di kuasai untuk menjadi frontend developer, namun pada website ini, kita akan belajar <br />3 skill yaitu HTML, CSS dan juga javascript
          </p>
        </div>

        <div class="row" className="kategori">
          <div class="col-lg-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px">
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
              <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
              <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" />
              <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" />
            </svg>

            <h3 class="fw-bold text-center">HTML</h3>
            <p>
              fungsi HTML adalah untuk mengelola serangkaian data dan informasi sehingga suatu dokumen dapat diakses dan ditampilkan di Internet melalui layanan web, Membuat halaman web. Menampilkan berbagai informasi di dalam sebuah browser Internet..
            </p>
            <p>
              <a class="btn " href="/category">
                cek materi &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px">
              <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
              <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
              <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" />
              <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" />
            </svg>
            <h3 class="fw-bold text-center">CSS</h3>
            <p>
              Fungsi CSS memungkinkan kamu untuk mengubah tampilan elemen saat pengguna mengarahkan kursor mouse ke atasnya. Ini sering digunakan untuk memberikan umpan balik visual kepada pengguna
              saat mereka berinteraksi dengan elemen, seperti tautan atau tombol.
            </p>
            <p>
              <a class="btn btn-secondary" href="/category">
                cek materi &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px">
              <path fill="#ffd600" d="M6,42V6h36v36H6z" />
              <path
                fill="#000001"
                d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
              />
            </svg>
            <h3 class="fw-bold text-center">Javascript</h3>
            <p>
              Javascript berfungsi untuk membuat beragam fitur seperti drop, drag dan semua komponen yang bermanfaat untuk meningkatkan visual suatu web atau interface dan pengalaman pengguna dalam
              menggunakan web,dan masih banyak lagi fungsi Javascript
            </p>
            <p>
              <a class="btn btn-secondary" href="/category">
                cek materi &raquo;
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePages;
