import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi3css = () => {
  return (
    <>
      <div className="content-header">
        <h1>Cara Mengatur Font di CSS</h1>
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
        <p>Kali ini kita akan membahas tentang properti font- yang juga berfungsi untuk mengatur teks. Lebih tepatnya mengatur font pada teks. Ada beberapa properti yang akan kita bahas:</p>
        <ul>
          <li>font-size untuk mengatur ukuran font;</li>
          <li>font-weight untuk mengatur ketebalan font;</li>
          <li>font-style untuk mengatur gaya font;</li>
          <li>font-family untuk mengatur jenis font;</li>
        </ul>
        <p class="fw-bold"> Mari kita lihat contohnya</p>
        <h3 class="fw-bold"> Mengatur Ukuran Font</h3>
        <p>Untuk mengatur ukuran font, kita bisa menggunakan properti font-size. Properti ini dapat kita beri nilai dengan satuan px (piksel), % (persentase), em, rem, dan lain-lain.</p>
        <p class="fw-bold"> Mari kita lihat contohnya</p>
        <pre>
          <code>
            {`p {
  font-size: 18px;
}`}
          </code>
        </pre>
        <p>Artinya: Kita akan mengatur ukuran font untuk semua elemen p sebesar 18px. Secara default ukuran font untuk elemen p adalah 16px. Ini bisa kita ubah sesuai selera.</p>
        <p>Selain menggunakan angka, ada juga nilai bawaan yang sudah tersedia seperti:</p>
        <ul>
          <li>normal untuk ukuran normal (16px);</li>
          <li>small untuk ukuran kecil;</li>
          <li>large untuk ukuran besar;</li>
          <li>x-large untuk ekstra besar;</li>
          <li>xx-large untuk ekstra-ekstra besar;</li>
          <li>x-small untuk teks yang lebih kecil dari small;</li>
          <li>xx-small untuk teks yang dua kali lebih kecil dari small;</li>
        </ul>
        <p>Biar lebih jelas, mari kita coba latihan.</p>
        <pre>
          <code>
            {`  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contoh Font Size</title>
  <style>
    h1 {
      font-size: 24px;
      color: slateblue;
    }
    .font-big {
      font-size: x-large;
    }

    .font-small {
      font-size: small;
    }
  </style>
</head>
<body>
  <h1>Contoh Font Size</h1>
  <p class="font-big">Ini adalah paragraf dengan ukuran font besar</p>
  <p>Ini adalah paragraf dengan ukuran font normal</p>
  <p class="font-small">Ini adalah paragraf dengan ukuran font kecil</p>
</body>
</html>`}
          </code>
        </pre>
        <p>Maka hasilnya:</p>
        <img src="https://www.petanikode.com/img/css-font/contoh-font-size.png" alt="" />
        <h3 class="fw-bold">Mengatur Ketebalan Font</h3>
        <p>Untuk mengatur ketebalan font, kita bisa menggunakan properti font-weight. Properti ini dapat kita berikan nilai berupa angka ukuran ketebalan atau nilai konstan yang sudah ada.</p>
        <p>Contoh nilai-nilai yang valid:</p>
        <ul>
          <li>lighter untuk ketebalan yang tipis;</li>
          <li>normal untuk ketebalan normal;</li>
          <li>bold untuk membuat font lebih tabal;</li>
          <li>bolder untuk membuat font lebih tebal lagi;</li>
          <li>100 sampai 900 rentang angka ketebalan.</li>
        </ul>
        <p>contoh</p>
        <pre>
          <code>
            {` p {
  font-weight: bold;
}`}
          </code>
        </pre>
        <p>Artinya: Kita akan mengatur ketebalan font semua elemen p dengan font yang lebih tebal. Mari kita coba latihan!</p>
        <pre>
          <code>
            {` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Font Weight</title>
    <style>
        h1 {
            font-weight: bold;
        }

        .light {
            font-weight: lighter;
        }

        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Contoh Font Weight</h1>
    <p class="light">Font Weight berfungsi untuk Menentukan Ketebalan Font</p>
    <p class="bold">Ini adalah contoh paragraf dengan font-weight bold</p>
</body>
</html>`}
          </code>
        </pre>
        <p>maka hasilnya</p>
        <img src="https://www.petanikode.com/img/css-font/contoh-font-weight.png" alt="" />
      </div>
    </>
  );
};

export default materi3css;
