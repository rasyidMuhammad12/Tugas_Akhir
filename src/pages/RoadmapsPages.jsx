import "../dist/main.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import React from "react";


const RoadmapsPages = () => {
  return (
    <>
      <div className="HomePage" >
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="12">
                <h1>
                  Roadmaps menjadi <br /> <span>Frontend Developer</span>
                </h1>
                <p>
                  HTML,CSS,Javascript <br /> yang sangat dasar bersama kami
                </p>
              </Col>
            </Row>
          </Container>
        </header>

        {/* <img className="gambar" src="https://ids.ac.id/wp-content/uploads/2022/11/imgonline-com-ua-CompressToSize-HuaH8Z4hNPIP.jpg" alt="" /> */}
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "#F0F2F5" }} >
          <div className="main-timeline">
            <div className="timeline left">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>Basic Fundamental</h3>
                  <p className="mb-0">HTML, CSS, Javascript</p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline right">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>CSS Framework</h3>
                  <p className="mb-0">Boostrap, Tailwaind, Dll</p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline left">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>CSS Preproccesor</h3>
                  <p className="mb-0">CSS Preprocessor adalah alat yang membantu kamu dalam penulisan kode CSS yang lebih dinamis dan efisien.</p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline right">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>Javascript Framework</h3>
                  <p className="mb-0">React js, Angular, Veu Js, Dll</p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline left">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>State Management Library</h3>
                  <p className="mb-0">State management library adalah library yang digunakan untuk mengelola state pada suatu aplikasi JavaScript.</p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline right">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>Package Manager</h3>
                  <p className="mb-0">
                    kumpulan alat perangkat lunak yang mengotomatiskan proses instalasi, peningkatan, konfigurasi, dan penghapusan program komputer untuk komputer secara konsisten.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline left">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>Version Control System</h3>
                  <p className="mb-0">
                    Sistem yang merekam perubahan-perubahan dari sebuah berkas atau sekumpulan berkas dari waktu ke waktu sehingga Anda dapat menilik kembali versi khusus suatu saat nanti.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline right">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>Testing</h3>
                  <p className="mb-0">
                    penguji tidak akan dapat melihat logika kode di balik antarmuka pengguna. Hal ini dilakukan untuk memastikan bahwa aplikasi berfungsi dengan benar di semua kombinasi sistem operasi
                    dan browser.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline left">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>Deployment</h3>
                  <p className="mb-0">
                    Deployment merupakan aktivitas membangun sebuah sistem perangkat lunak. Pada umumnya terdiri dari beberapa aktivitas antara developer dengan client yang saling berkaitan. Pada
                    dasarnya, deployment mencakup tiga proses, yaitu delivery, support, dan feedback.
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline right">
              <MDBCard>
                <MDBCardBody className="p-4">
                  <h3>Advance Topic</h3>
                  <p className="mb-0">
                    
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </MDBContainer>
      </div>
    </>
  );
};

export default RoadmapsPages;
