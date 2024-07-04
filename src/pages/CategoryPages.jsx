import { Container, Row, Col, Overlay } from "react-bootstrap";
import "../dist/main.css";
import { Link } from "react-router-dom";

const CategoryPages = () => {
  return (
    <>
      <div className="HomePage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="6">
                <h1>
                  Materi Dasar <br /> <span>HTML,CSS,Javacript</span>
                </h1>
                <p>
                  HTML,CSS,Javascript <br /> yang sangat dasar bersama kami
                </p>
              </Col>
            </Row>
            <div class="container px-4 py-5" id="hanging-icons">
              <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="col d-flex align-items-start">
                  <div class="icon-square text-body-emphasis  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 " width="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                      <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                      <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" />
                      <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="fs-2 text-body-emphasis">HTML</h3>
                    <p>
                      HTML adalah bahasa yang digunakan untuk membuat halaman web. Bagi yang berkecimpung di dunia ilmu komputer, pasti sudah tidak asing lagi dengan berbagai kode di dalamnya. HTML
                      adalah kependekan dari Hypertext Markup Language
                    </p>
                    <a href="#html" class="btn ">
                      cek materi
                    </a>
                  </div>
                </div>
                <div class="col d-flex align-items-start">
                  <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                      <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                      <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                      <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" />
                      <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="fs-2 text-body-emphasis">CSS</h3>
                    <p>
                      CSS adalah bahasa Cascading Style Sheet dan biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan
                      konten dari tampilan visualnya di situs.
                    </p>
                    <a href="#css" class="btn ">
                      Cek Materi
                    </a>
                  </div>
                </div>
                <div class="col d-flex align-items-start">
                  <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                      <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="fs-2 text-body-emphasis">Javascript</h3>
                    <p>
                      JavaScript adalah bahasa pemrograman yang digunakan developer untuk membuat halaman web yang interaktif. menampilkan animasi dan peta interaktif, fungsi JavaScript dapat
                      meningkatkan pengalaman pengguna situs web. .
                    </p>
                    <a href="#javascript" class="btn ">
                      Cek Materi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* materi html */}
        <section class="py-1 text-center container" id="html">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h3 class="fw-bold text-center">HTML</h3>
            </div>
          </div>
        </section>
        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col">
                <div class="card shadow-sm">
                  <img src="https://www.techfor.id/wp-content/uploads/2019/12/html.png" alt="" />
                  <div class="card-body">
                    <p class="card-text fw-bold">Materi #1 Menghubung HTML dan CSS</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Link className="nav-link" to="/materi1html">
                          baca dong
                        </Link>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="https://www.techfor.id/wp-content/uploads/2019/12/html.png" alt="" />
                  <div class="card-body">
                    <p class="card-text fw-bold ">Materi #2 Membuat table di HTML</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Link className="nav-link" to="/materi2html">
                          baca dong
                        </Link>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="https://www.techfor.id/wp-content/uploads/2019/12/html.png" alt="" />
                  <div class="card-body">
                    <p class="card-text fw-bold">Materi #3 Membuat Form pada HTML</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Link className="nav-link" to="/materi3html">
                          baca dong
                        </Link>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* materi css */}
      <section class="py-1 text-center container" id="css">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h3 class="fw-bold text-center">CSS</h3>
          </div>
        </div>
      </section>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://badoystudio.com/wp-content/uploads/2022/04/apa-itu-css.png" alt="" />
                <div class="card-body">
                  <p class="card-text fw-bold">Materi #1 Cara Menulis CSS di HTML</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link className="nav-link" to="/materi1css">
                        baca dong
                      </Link>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://badoystudio.com/wp-content/uploads/2022/04/apa-itu-css.png" alt="" />
                <div class="card-body">
                  <p class="card-text fw-bold">Materi #2 Mebuat Background di CSS</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link className="nav-link" to="/materi2css">
                        baca dong
                      </Link>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://badoystudio.com/wp-content/uploads/2022/04/apa-itu-css.png" alt="" />
                <div class="card-body">
                  <p class="card-text fw-bold">Materi #3 Cara Mengatur Font di CSS</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link className="nav-link" to="/materi3css">
                        baca dong
                      </Link>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* materi javascript */}
      <section class="py-1 text-center container" id="javascript">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h3 class="fw-bold text-center">Javacript</h3>
          </div>
        </div>
      </section>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://it.telkomuniversity.ac.id/wp-content/uploads/2023/01/Javascript-adalah-1.jpg" alt="" />
                <div class="card-body">
                  <p class="card-text">Materi #1 Menganal Javascript</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link className="nav-link" to="/materi1js">
                        baca dong
                      </Link>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://it.telkomuniversity.ac.id/wp-content/uploads/2023/01/Javascript-adalah-1.jpg" alt="" />
                <div class="card-body">
                  <p class="card-text fw-bold">Materi #2 Mengenal Console JavaScript</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link className="nav-link" to="/materi2js">
                        baca dong
                      </Link>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="https://it.telkomuniversity.ac.id/wp-content/uploads/2023/01/Javascript-adalah-1.jpg" alt="" />
                <div class="card-body">
                  <p class="card-text fw-bold">Materi #3 Menampilkan Output pada Javascript.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link className="nav-link" to="/materi3js">
                        baca dong
                      </Link>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPages;
