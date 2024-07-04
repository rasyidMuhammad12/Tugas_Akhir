import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi2html = () => {
  return (
    <>
      <div className="content-header">
        <h1>Cara Membuat table di HTML</h1>
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
        <p>Salah satu cara atau format menampilkan informasi dalam web adalah dengan tabel. Tabel terdiri dari 4 unsur utama: Baris,Kolom,Sel,Garis.</p>
        <p>
          Lalu, bagaimana cara membuat tabel di HTML? <br />
          Kita bisa membuatnya dengan beberapa tag yang sudah disediakan di HTML.
        </p>
        <p class="fw-bold"> Tag untuk Membuat Tabel di HTML</p>
        <ol>
          <li>
            Tag <span>table</span> untuk membungkus tabelnya
          </li>
          <li>
            Tag <span>thead</span> untuk membungkus bagian kepala tabel
          </li>
          <li>
            Tag <span>tbody</span> untuk membungkus bagian body dari tabel
          </li>
          <li>
            Tag <span>tr</span> (tabel row) untuk membuat baris
          </li>
          <li>
            Tag <span>td</span> (table data) untuk membuat sel
          </li>
          <li>
            Tag <span>th</span> (table head) untuk membuat judul pada header
          </li>
        </ol>
        <p>Tag yang paling penting untuk diingat adalah tag table, tr, dan td. Sementara tag yang lain adalah tambahan (opsional), boleh digunakan boleh tidak.</p>
        <p class="fw-bold"> Mari kita lihat contohnya</p>
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
    <title>Belajar Membuat Tabel HTML</title>
</head>
<body>

    <table>
        <tr>
            <td>Baris 1 kolom 1</td>
            <td>baris 1 kolom 2</td>
        </tr>
        <tr>
            <td>Baris 2 kolom 1</td>
            <td>baris 2 kolom 2</td>
        </tr>
    </table>

</body>
</html>`}
          </code>
        </pre>
        <p>Agar Tabelnya memiliki garis, silakan tambahkan atribut border="1" di dalam tag table.</p>
        <br />
        <p class="fw-bold">Sehingga akan menjadi seperti ini</p>
        <pre>
          <code>
            {`  <table boder="1">
        <tr>
            <td>Baris 1 kolom 1</td>
            <td>baris 1 kolom 2</td>
        </tr>
        <tr>
            <td>Baris 2 kolom 1</td>
            <td>baris 2 kolom 2</td>
        </tr>
    </table>`}
          </code>
        </pre>
        <p>Nilai "1" pada atribut border adalah ukuran garisnya. Semakin besar ukurannya, maka akan semakin besar pula ukuran garisnya. Nilai "1" adalah ukuran garis yang paling kecil. </p> <br />
        <p class="fw-bold"> Mengatur Jarak Sel dengan Cellpadding</p>
        <p>Atribut cellpadding adalah atribut untuk mengatur jarak teks dengan garis di dalam sel.

Atribut ini dapat kita berikan kepada tag table </p>
        <pre>
          <code>{`   <table border="1" cellpadding="10">
        <tr>
            <td>Baris 1 kolom 1</td>
            <td>baris 1 kolom 2</td>
        </tr>
        <tr>
            <td>Baris 2 kolom 1</td>
            <td>baris 2 kolom 2</td>
        </tr>
    </table>`}</code>
        </pre>
        <p class="fw-bold">Menambahkan Warna pada Sel dan Baris </p>
        <pre>
          <code>
            {`    <table border="1" cellpadding="10">
        <tr>
            <td bgcolor="yellow">Baris 1 kolom 1</td>
            <td>baris 1 kolom 2</td>
        </tr>
        <tr bgcolor="#00ff80">
            <td>Baris 2 kolom 1</td>
            <td>baris 2 kolom 2</td>
        </tr>
    </table>`}
          </code>
        </pre>
        <p>maka hasil nya seperti ini</p>
        <img src="https://www.petanikode.com/img/html/tabel/warna.png" alt="" />
      </div>
    </>
  );
};

export default materi2html;
