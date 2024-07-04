import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi1js = () => {
  return (
    <>
      <div className="content-header">
        <h1>Pemrograman Javascript: Langkah Awal Belajar Javascript</h1>
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
          Javascript adalah bahasa pemrograman yang wajib kamu pelajari jika ingin mendalami dunia web development. Saat ini javascript tidak hanya digunakan di sisi client (browser) saja. Javascript
          juga digunakan pada server, console, program desktop, mobile, IoT, game, dan lain-lain. Hal ini membuat javascript semakin populer dan menjadi bahasa yang paling banyak digunakan di Github.
        </p>
        <p>Pada artikel ini, kita akan belajar Javascript dari dasar. Mulai dari pengenalan Javascript, hingga membuat program pertama dengan Javascript. Siap? Mari kita mulai…</p> <br />
        <h3 class="fw-bold"> Apa itu javascript ?</h3>
        <p>
          Javascript adalah bahasa pemrograman yang awalnya dirancang untuk berjalan di atas browser. Namun, seiring perkembangan zaman, javascript tidak hanya berjalan di atas browser saja.
          Javascript juga dapat digunakan pada sisi Server, Game, IoT, Desktop, dsb. Javascript awalnya bernama Mocha, lalu berubah menjadi LiveScript saat browser Netscape Navigator 2.0 rilis versi
          beta (September 1995). Namun, setelah itu dinamai ulang menjadi Javascript. 1 Terinspirasi dari kesuksesan Javascript, Microsoft mengadopsi teknologi serupa. Microsoft membuat ‘Javascript’
          versi mereka sendiri bernama JScript. Lalu di tanam pada Internet Explorer 3.0. Hal ini mengakibatkan ‘ perang browser’, karena JScript milik Microsoft berbeda dengan Javascript racikan
          Netscape. Akhirnya pada tahun 1996, Netscape mengirimkan standarisasi ECMA-262 ke Ecma International. Sehingga lahirlah standarisasi kode Javascript bernama ECMAScript atau ES. Saat ini
          ECMAScript sudah mencapai versi 8 (ES8). 2{" "}
        </p>
        <br />
        
      </div>
    </>
  );
};

export default materi1js;
