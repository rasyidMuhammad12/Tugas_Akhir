import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi2js = () => {
  return (
    <>
      <div className="content-header">
        <h1>Mengenal Console JavaScript</h1>
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
          Ada yang mengatakan, belajar javascript itu susah, karena saat melihat hasilnya di web browser, pesan error-nya tidak tampil. Pendapat ini tidak benar. Karena kita bisa melihatnya melalui
          console. Console Javascript dapat kita buka melalui Inspect Element-Console.
        </p>
        <p>Di dalam console, kita bisa menulis fungsi atau kode-kode javascript dan hasilnya akan langsung ditampilkan. Misalnya, mari kita coba kode berikut:</p> <br />
        <pre>
          <code>
            {`console.log("Hi apa kabar!");
alert("Saya sedang belajar javascript");`}
          </code>
        </pre>
        <img src="https://www.petanikode.com/img/js/console-js.png" alt="" /> <br />
        <h3 class="fw-bold">Membuat Program Javascript Pertama</h3>
        <p>
          Sudah paham cara membuka dan menggunakan console javascript? Bagus… Kalau begitu, mari kita buat program pertama dengan Javascript. Silakan buka teks editor, kemudian buat file baru bernama
          hello_world.html dan isi dengan kode berikut:
        </p>
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
    <title>Hello World Javascript</title>
</head>
<body>
    <script>
        console.log("Saya belajar Javascript");
        document.write("Hello World!");
    </script>
</body>
</html>`}
          </code>
        </pre>
        <p>Silakan disimpan dengan nama hello_world.html, kemudian buka file tersebut dengan web browser. Maka hasilnya:</p>
        <img src="https://www.petanikode.com/img/js/hello-world.png" alt="" />
        <p>Tunggu sebentar… Tadi kita menulis perintah:</p>
        <pre>
          <code>{`console.log("Saya belajar Javascript");`}</code>
        </pre>
        <p>
          Mengapa tidak ditampilkan? Karena perintah atau fungsi console.log() akan menampilkan pesan ke dalam console javascript. Sedangkan perintah document.write() berfungsi untuk menulis ke
          dokumen HTML, maka dia akan ditampilkan ke sana. Sekarang coba saja buka console javascript. Maka kita akan melihat pesan "Saya belajar Javascript":
        </p>
        <img src="https://www.petanikode.com/img/js/hello-world-console.png" alt="" />
        <p>Mantap… 👍</p>
      </div>
    </>
  );
};

export default materi2js;
