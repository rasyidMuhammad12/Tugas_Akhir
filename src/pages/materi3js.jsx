import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi3js = () => {
  return (
    <>
      <div className="content-header">
        <h1>4 Cara Menampilkan Output pada Javascript</h1>
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
        <p>Output adalah sebuah tampilan program yang biasanya digunakan untuk memperlihatkan hasil akhir. Output biasanya ditampilkan dalam bentuk teks dengan fungsi print().</p>
        <p>Ada 4 cara menampilkan output pada Javascript:</p>
        <ol>
          <li>Menggunakan Fungsi console.log();</li>
          <li>Menggunakan Fungsi alert();</li>
          <li>Menggunakan Fungsi document.write();</li>
          <li>Menggunakan innerHTML.</li>
        </ol>
        <p>Apa perbedaan dari keempat cara tersebut? Mari kita bahas…</p>
        <h3 class="fw-bold"> Menggunakan Fungsi console.log()</h3>
        <p>Fungsi console.log() adalah fungsi untuk menampilkan teks ke console Javascript. Contoh penggunaan:</p>
        <pre>
          <code>{`console.log("Hello World!");`}</code>
        </pre>
        <p>Hasilnya:</p>
        <img src="https://www.petanikode.com/img/js/output/console-js.png" alt="" />
        <p>
          Fungsi <span>console.log() </span> biasanya digunakan untuk debugging. Karena setiap pesaan error di Javascript selalu ditampilkan di dalam Console. Selain <span>console.log()</span> ,
          terdapat juga beberapa fungsi untuk debugging seperti <span>console.debug()</span> , <span>console.info()</span> , <span>console.error()</span> , <span>console.dir()</span> , dsb.
        </p>
        <img src="https://www.petanikode.com/img/js/output/fungsi-console.png" alt="" /> <br />
        <p>Fungsi-fungsi console ini juga berlaku pada console Nodejs.</p> <br />
        <img src="https://www.petanikode.com/img/js/output/console-nodejs.png" alt="" /> <br />
        <h3 class="fw-bold">2. Menggunakan Fungsi alert()</h3>
        <p>
          Fungsi <span>alert()</span> adalah fungsi untuk menampilkan jendela dialog. Fungsi sebenarnya berada pada objek window. Secara lengkap bisa ditulis seperti ini:
        </p>
        <pre>
          <code>{`window.alert("Hello World!");`}</code>
        </pre>
        <p>Fungsi alert(), hanya bisa digunakan di dalam browser saja. Sedangkan pada Nodejs fungsi ini tidak ada.</p>
        <p>Contoh penggunaan fungsi alert():</p>
        <pre>
          <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Belajar Javascript</title>
    <script>
        alert("Selamat datang di tutorial belajar Javascript");

        function sayHello(){
            alert("Hello!");
        }
    </script>
</head>
<body>
    <button onclick="sayHello()">Klik Aku!</button>
</body>
</html>`}</code>
        </pre>
        <p>Hasilnya:</p>
        <img src="https://www.petanikode.com/img/js/output/alert.png" alt="" /> <br />
        <h3 class="fw-bold">3. Menggunakan Fungsi document.write()</h3>
        <p>Objek document adalah objek yang mewakili dokumen HTML di dalam Javascript. Dalam objek document, terdapat fungsi write() untuk menulis sesuatu ke dokumen HTML. Contoh:</p>
        <pre>
          <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Belajar Javascript</title>
    <script>
        document.write("<h1>Hello World!</h1>");
        document.write("<hr>");
        document.write("<p>Saya sedang belajar Javascript</p>");
        document.write("di <b>petanikode.com</b>")
    </script>
</head>
<body>

</body>
</html>`}</code>
        </pre>
        <p>Hasilnya:</p>
        <img src="https://www.petanikode.com/img/js/output/output-document.png" alt="" />
        <p>Selain fungsi write(), objek document juga menyediakan berbagai macam fungsi untuk manipulasi dokumen HTML.</p> <br />
        <h3 class="fw-bold">4. Menggunakan innerHTML</h3>
        <p>innerHTML adalah sebuah atribut di dalam (objek) elemen HTML yang berisi string HTML. Dengan innerHTML, kita dapat menampilkan output ke elemen yang lebih spesifik.</p>
        <pre>
          <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Belajar Javascript</title>
</head>
<body>

    <h1>Tutorial Javascript untuk Pemula</h1>
    <div id="hasil-output"></div>


    <script>
        // membuat objek elemen
        var hasil = document.getElementById("hasil-output");

        // menampilkan output ke elemen hasil
        hasil.innerHTML = "<p>Aku suka Javascript</p>";
    </script>

</body>
</html>`}</code>
        </pre>
        <p>Hasilnya:</p>
        <img src="https://www.petanikode.com/img/js/output/inner-html.png" alt="" />
      </div>
    </>
  );
};

export default materi3js;
