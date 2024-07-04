import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

const materi1css = () => {
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
          Internal CSS adalah kode CSS yang ditulis di dalam tag style. Internal CSS juga dikenal dengan sebutan Embedded CSS. Tag style bisa ditulis di dalam tag head, bisa juga ditulis di dalam tag
          body. Namun kebanyakan orang menulisnya di dalam head.
        </p>

        <p class="fw-bold"> Mari kita lihat contohnya</p>
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
  <title>Contoh Internal CSS</title>
  <!-- penulisan internal css dalam tag head -->
  <style type="text/css">
    p{
      font-family: serif;
      line-height: 1.75em;
      font-size: 18px;
    }
    i { 
      font-family: sans;
      color: orange;
    }
  </style>
</head>

<body>
  <!-- penulisan internal css dalam tag body -->
  <style type="text/css">
    h2 { 
      font-family: sans;
      color: #333;
    }
  </style>
  <h2>Ini judul artikel</h2>
  <p>Ini adalah paragraf yang memuat isi artikel. Paragraf ini hanya untuk percobaan saja. Percobaan untuk mendemokan <i>internal css</i>. Seperti namanya, <i>inline CSS</i> adalah kode CSS yang ditulis langsung dalam file HTML.</p>
</body>
</htm`}
          </code>
        </pre>
        <p>Misalnya kita punya style seperti ini di dalam head</p>
        <pre>
          <code>{`  p { color: red }`}</code>
        </pre>
        <p>Lalu di body kita buat lagi seperti ini</p>
        <pre>
          <code>{`  p { color: blue }`}</code>
        </pre>
        <p>Maka yang akan dipakai adalah yang terakhir, yakni yang color: blue. Karena itu, biar konsisten dan tidak bentrok.. sebaiknya tulis CSS hanya dalam satu tempat saja. Misal di head saja.</p>
      </div>
    </>
  );
};

export default materi1css;
