import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi2css = () => {
  return (
    <>
      <div className="content-header">
        <h1>Cara Membuat background di CSS</h1>
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
        <p>
          Seperti namanya, properti background fungsinya untuk memberikan background pada elemen tertentu. Jika kamu coba ketik background pada kode CSS di Inspect Elemen, maka akan muncul beberapa
          saran properti yang berkaitan dengan background. <br />
        </p>
        <p>
          Masing-masing properti background- punya fungsi yang berbeda-beda. Ada dua cara kita memberikan background di CSS, yakni dengan warna dan gambar. Pemberian background dengan gambar
          membutuhkan beberapa properti tambahan lagi untuk mengatur gambarnya. Itu sebabnya ada banyak properti background-* si CSS. Pada tutorial ini, kita akan membahas properti-properti yang
          penting dan sering digunakan dalam membuat background
        </p>

        <p class="fw-bold"> Mari kita mulai..</p>
        <h3 class="fw-bold"> Backgroun Warna</h3>
        <p>
          Untuk memberikan background warna, kita bisa memberikan nilai warna pada properti background seperti nama warna, kode heksadesimal warna, fungsi rgb(), rgba(), hsl(), dan sebagainya. Mari
          kita langsung coba praktik.
        </p>
        <pre>
          <code>
            {`<html>
  <head>
    <title>Contoh Background Warna</title>
    <meta content="">
    <style>
      header { `}
            <span>background-color: violet;</span>
            {` }
    </style>
  </head>
  <body>
    <header>
      <h1>Belajar Background di CSS</h1>
    </header>
  </body>
</html>`}
          </code>
        </pre>
        <p>Maka hasilnya</p>
        <img src="https://www.petanikode.com/img/css-background/contoh-background-color.avif" alt="" />
        <h3 class="fw-bold">Background Image</h3>
        <p>
          Jika ingin menggunakan warna latar gambar, maka kita bisa menggunakan properti background-image atau background saja. Format gambar yang didukung bisa: jpg, png, gif, webp, avif, svg, dll.
          Intinya, selama format gambar tersebut bisa dibuka di web browser, maka bisa dipakai sebagai background. Oke, kalau begitu.. Mari kita coba latihan menggunakan background gambar. Pertama
          silakan download file gambarnya
        </p>
        <p>Setelah kamu download, ubah namanya menjadi background.jpg kemudian taruh di satu folder dengan file HTML-nya.</p>
        <pre>
          <code>
            {`<html>
  <head>
    <title>Contoh Background Warna</title>
    <meta content="">
    <style>

      body { `}
            <span> background-image: url('background.jpg');</span>
            {` }

      header {
        background: rgba(255,255,225, 0.5);
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Belajar Background di CSS</h1>
    </header>
  </body>
</html>`}
          </code>
        </pre>
        <p>maka hasil nya</p>
        <img src="https://www.petanikode.com/img/css-background/contoh-bg-image.avif" alt="" />
        <p>Coba perbesar dan perkecil ukuran jendelanya.. atau coba juga melakukan zoom out.</p>
        <h3 class="fw-bold">Background Reapet</h3>
        <p>Jika kita melakukan zoom out pada contoh yang tadi, maka hasilnya akan seperti ini:</p>
        <img src="https://www.petanikode.com/img/css-background/hasil-zoom-out.avif" alt="" />
        <p>Gambar background-nya akan diulang-ulang. Jika kamu pakai ukuran gambar yang kecil, maka akan ditampilkan seperti itu. Gimana cara agar tidak diulang-ulang?</p>
        <p>Kita bisa gunakan properti background-repeat. Properti ini punya beberapa nilai:</p>
        <ul>
          <li>repeat-x artinya mengulang background pada sumbu x aja</li>
          <li>repeat-y artinya mengulang background pada sumbu y aja;</li>
          <li>no-repeat artinya tidak mengulang background.</li>
        </ul>
        <p>Nah, kita bisa pakai no-repeat bila ingin background-nya tidak diulang. Maka kode CSS-nya akan menjadi seperti ini:</p>
        <pre>
          <code>
            {`body {
	background-image: url('background.jpg');
 	background-repeat: no-repeat;
  background-size: cover;
}`}
          </code>
        </pre>
        <video src="https://www.petanikode.com/img/css-background/background-cover.webm"></video>
      </div>
    </>
  );
};

export default materi2css;
