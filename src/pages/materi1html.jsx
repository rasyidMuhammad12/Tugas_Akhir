import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi1html = () => {
  return (
    <>
      <div className="content-header">
        <h1>Cara Menggabungkan HTML dan CSS</h1>
        <div className="profile-header">
          <div className="profile-pict">
            <img src="https://i.pinimg.com/564x/2a/53/70/2a5370c752b7f4bd65766f3550afdb5d.jpg" alt="" />
          </div>
          <div className="pictone">
            <img src="https://i.pinimg.com/564x/2a/53/70/2a5370c752b7f4bd65766f3550afdb5d.jpg" alt="" />
          </div>

          <div className="profile">
            <h6>Muhammad Rasyid Al Ridho Lubis</h6>
            <p>
              Published in <span>Padang</span>, 04 july 2024
            </p>
          </div>
        </div>
      </div>
      <div className="image-banner"></div>
      <div className="content">
        <p>Setelah memahami HTML dan CSS, kini saatnya mulai menggabungkan keduanya. Berikut ini merupakan cara menggabungkan HTML dan CSS untuk menciptakan desain web yang bagus.</p>
        <p class="fw-bold"> 1.Buat Struktur Dasar HTML</p>
            <pre>
              <code>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <header>
    <h1>Selamat Datang di Halaman HTML</h1>
    <nav>
      <ul>
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Tentang Kami</a></li>
        <li><a href="#">Kontak</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>`}
              </code>
            </pre>
        <p>
          Langkah pertama adalah membuat struktur dasar halaman web menggunakan HTML. Sobat Codingan dapat menggunakan teks editor sederhana seperti Notepad atau editor kode yang lebih canggih seperti
          Visual Studio Code
        </p> <br />
        <p class="fw-bold"> 2.Buat file eksternal CSS</p>
        <pre>
              <code>
                {`body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}`}
              </code>
            </pre>
            <p>Save file dengan nama style.css  </p> <br />
            <p class="fw-bold"> 3.Menghubungkan CSS dengan HTML</p> 
            <p>Kembali ke struktur dasar HTML, Codingers telah menambahkan baris berikut dalam bagian  </p>
            <pre>
              <code>
                {`<link rel="stylesheet" type="text/css" href="style.css">`}
              </code>
            </pre>
            <p>Baris ini menghubungkan file CSS eksternal (style.css) dengan halaman HTML.   </p>
            <pre>
              <code>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <header>
    <h1>Selamat Datang di Halaman HTML</h1>
    <nav>
      <ul>
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Tentang Kami</a></li>
        <li><a href="#">Kontak</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>`}
              </code>
            </pre>
            <p>maka html mt akan jadi seperti ini</p>
      </div>
    </>
  );
};

export default materi1html;
