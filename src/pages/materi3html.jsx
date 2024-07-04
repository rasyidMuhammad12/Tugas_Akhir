import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi3html = () => {
  return (
    <>
      <div className="content-header">
        <h1>Cara Menulis CSS di HTML</h1>
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
          Salah satu cara untuk mengambil informasi dari pengunjung ialah menggunakan form. Form dalam web bisa disamakan dengan formulir di dunia nyata. Form dapat diisi, kemudian diproses dengan
          program tertentu. Pada tutorial ini, kita akan belajar cara membuat form di HTML. Hanya membuat saja ya… Tidak sampai memproses datanya. Karena itu masuk ke dalam topik pembahasan yang lain.
          Baiklah… Mari kita mulai.
        </p>
        <p class="fw-bold"> Form di HTML dapat kita buat dengan tag form.</p>
        <ol>
          <li>
            Tag <span>action</span> untuk menentukan aksi yang akan dilakukan saat data dikirim;
          </li>
          <li>
            Tag <span>method</span> metode pengiriman data.
          </li>
        </ol>
        <p class="fw-bold"> Mari kita lihat contohnya</p>
        <pre>
          <code>
            {`<form action="proses.php" method="GET">
<!-- form field di sini -->
</form>`}
          </code>
        </pre>
        <p>
          Untuk atribut action, kita dapat mengisinya dengan alaman URL dari endpoint yang akan memproses form. Secara sederhana,—pada contoh di atas— kita akan menyuruh file proses.php untuk
          memproses data form. Ini nanti akan kita pelajari pada PHP. Kode HTML di atas, tidak akan menghasilkan apa-apa. Karena kita belum membuat field-nya.
        </p>
        <br />
        <h3 class="fw-bold">Apa itu Field?</h3>
        <p>Field adalah ruas yang dapat diisi dengan data.</p>
        <pre>
          <code>{`  <input type="text" name="info" />`}</code>
        </pre>
        <p>Field memiliki beberapa atribut yang harus diberikan: </p>
        <ol>
          <li>
            <span>type</span> merupakan type dari field.
          </li>
          <li>
            <span>name</span> merupakan nama dari field yang akan menjadi kunci dan variabel di dalam program.
          </li>
        </ol>
        <p class="fw-bold">contoh</p>
        <p class="fw-bold">Pada form login, terdapat beberapa field dan elemen:</p>
        <ol>
          <li>Field untuk input username atau email;</li>
          <li>Field untuk input password</li>
          <li>Checkbox untuk remember me;</li>
          <li>Tombol untuk login.</li>
        </ol>
        <p>code nya</p>
        <pre>
          <code>{`   <!DOCTYPE html>
<html>
<head>
    <title>Form Login</title>
</head>
<body>
    <form action="login.php" method="POST">
        <fieldset>
        <legend>Login</legend>
        <p>
            <label>Username:</label>
            <input type="text" name="username" placeholder="username..." />
        </p>
        <p>
            <label>Password:</label>
            <input type="password" name="password" placeholder="password..." />
        </p>
        <p>
            <label><input type="checkbox" name="remember" value="remember" /> Remember me</label>
        </p>
        <p>
            <input type="submit" name="submit" value="Login" />
        </p>
        </fieldset>
    </form>
</body>
</html>`}</code>
        </pre>
        <p>maka hasil nya seperti ini</p>
        <img src="https://www.petanikode.com/img/html/form/form-login.png" alt="" />
      </div>
    </>
  );
};

export default materi3html;
