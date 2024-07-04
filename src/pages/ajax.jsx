import "../dist/content.css";
import { Container, Row, Col, Overlay } from "react-bootstrap";

import picture1 from "../assets/img/Picture1.png";
import picture2 from "../assets/img/Picture2.png";
import picture3 from "../assets/img/Picture3.png";

const ajax = () => {
  return (
    <>
      <div className="content-header">
        <h1>Menyimpan Data ke Database dengan AJAX</h1>
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
          Untuk lebih memperjelas pemahaman anda bagaimana cara menyimpan data ke database dengan AJAX, anda akan diajak untuk berlatih. Pada latihan ini anda akan membuat sebuah form simpan satuan
          dan menyimpan data yang diinput oleh user dengan menggunakan Ajax. Pada contoh ini saya asumsikan anda memiliki sebuah tabel pada database anda dengan nama satuan dan dengan struktur seperti
          berikut.DB = cafe_anisya
        </p>
        <img src={picture1} alt="picture1" />
        <p class="fw-bold"> Langkah I. Membuat File Koneksi</p>
        <pre>
          <code>
            {`<?php  
$servername="localhost" ; 
$database="cafe_anisya" ; 
//nama database 
$username="root" ; //nama user dari webserver kita, kalau XAMPP=root 
$password=" " ; //password dari webserver kita, kalau XAMPP="" , passwordnya kosong // untuk tulisan bercetak tebal silakan sesuaikan dengan detail database Anda // membuat koneksi
$conn=mysqli_connect($servername, $username, $password, $database); // mengecek koneksi  
if (!$conn) { 
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
`}
          </code>
        </pre>
        <p>Simpan dengan nama koneksi.php</p>
        <br />
        <p class="fw-bold">Langkah II. Membuat HTML Form</p>
        <p>Pertama buatlah sebuah document baru dengan text editor anda, dan buat sebuah HTML form dengan script di bawah</p>
        <pre>
          <code>
            {`  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /> 
 <title>Satuan - Contoh Tutorial Ajax</title> 
</head> 
<body> 
 <form id="form1" name="form1" method="post" action="">
 <fieldset>
 <legend><strong>Contact Us</strong></legend> 
 <div style="width:300px;" align="right" id="content"> 
 <label>ID Satuan : <input name="id_satuan" type="text" id="id_satuan" maxlength="50" /></label> 
 <p> <label>Nama Satuan : <input name="nama_satuan" type="text" id="nama_satuan" maxlength="50" /> </label> </p> 
 
 <p> <input type="button" name="Button" value="Save" /> 
 <input type="reset" name="Reset" value="Cancel" /> </p> 
 </div> 
 </fieldset> 
 </form> 
</body> 
</html>
`}
          </code>
        </pre>
        <p>Simpan dengan nama file satuan.php di direktory web server anda. Script di atas untuk membentuk sebuah form seperti berikut </p> <br />
        <img src={picture2} alt="" /> <br />
        <p class="fw-bold">Langkah III. Membuat File Javascript untuk Membentuk XMLHttpRequest</p>
        <p>
          Langkah selanjutnya adalah membuat JavaScript untuk membentuk XMLHttpRequest dan membuat function untuk mengirim data ke server. Buat kembali document baru dengan text editor anda dan ketik
          script berikut :
        </p>
        <pre>
          <code>{`   // JavaScript Document
//file ajax.js
function getXMLHttpRequest(){
    if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
        return new XMLHttpRequest(); 
    }else alert("Status : Can not create XMLHttpRequest Object");
}

var xmlhttp=getXMLHttpRequest();
//function to send data
function sendData(handlePage,ElementID){
    var kd=document.getElementById('kode_satuan').value;
    var nm=document.getElementById('nama_satuan').value;
    // var filterEmail=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    // var filterPhone=/^[0-9]+$/;
    
//validate user input
if(kd==""){
    alert("Input Kode Satuan First!");
}else if(nm==""){
    alert("Input Nama Satuan first!");
}else{
//data valid 
if(xmlhttp.readyState==4 || xmlhttp.readyState==0){
    var obj=document.getElementById(ElementID);
    var form=obj.innerHTML;
    obj.innerHTML='Saving data, please wait..';
    xmlhttp.open('POST',handlePage,true);
    xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4){
    if(xmlhttp.status==200){
    obj.innerHTML=xmlhttp.responseText+'<br>'+form;
    }else{
    alert('Error : '+xmlhttp.statusText);
    }
    }
}
var param='kode_satuan='+kd;
param+='&nama_satuan='+nm;
param+='&action=save';
xmlhttp.send(param);
}
`}</code>
        </pre>
        <p>Kemudian simpan dengan nama ajax.js di directory yang sama dengan file satuan.php yang dibuat sebelumnya.</p>
        <p class="fw-bold">Langkah IV. Membuat handlePage dan Menyimpan Data.</p>
        <p>
          Setelah selesai dengan langkah I dan II, selanjutnya adalah membuat handlePage untuk menangani data yang dikirim dan menyimpan data yang dikirim ke database. Perlu anda ingat, walaupun
          sebelum data dikirim telah divalidasi dengan javascript anda harus kembali melakukan validasi setelah data sampai di server dengan server side scripting seperti PHP. Ingat jangan pernah
          percaya kepada user anda dan jangan pernah percaya dengan apa yang diinputkan oleh user serta jangan percaya dengan apa yang dikirim oleh web browser anda. Sekarang buatlah sebuah document
          baru dengan text editor dan ketikkan script berikut.
        </p>
        <pre>
          <code>
            {`   <?php
/*file save_data.php*/
    include "koneksi.php";
    if($_POST['action']=='save'){
     //validasi data
     $kd=$_POST['kode_satuan'];
     $nm=$_POST['nama_satuan'];
     settype($kd,'string');
     settype($nm,'string');
     //validasi email;
    //  if(!preg_match('/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/',$email)){
    //  echo 'Ivalid Email Address'; exit();
    //  }
    //  //validasi phone
    //  if(!preg_match('/^[0-9]+$/',$phone)){
    //  echo 'Invalid phone number'; exit();
    //  }
     //saving data
     $query="INSERT INTO satuan VALUES ('$kd','$nm')";
     $hasil=@mysqli_query($conn,$query);
     if($hasil){
     echo '<font color="green">DATA HAS BEEN SAVED</font>';
     }else {
     echo '<font color="red">Error, CAN NOT SAVE DATA</font>';
`}
          </code>
        </pre>
        <p>setelah selesai simpan dengan nama save_data.php di directory yang sama dengan file satuan.php.</p>
        <p class="fw-bold">Langkah V. Finishing</p>
        <p>Setelah selesai membuat ketiga file di atas, sekarang buka kembali file contact.php dan edit pada bagian yang diberi warna biru seperti berikut :</p>
        <pre>
          <code>
            {`  <input type="button" name="Button" value="Save" />
`}
          </code>
        </pre>
        <p>menjadi</p>
        <pre>
          <code>
            {`  <script type="text/javascript" src="ajax.js"></script>
<input type="button" name="Button" value="Save" onclick="sendData('save_data.php','content'); return false;" />


`}
          </code>
        </pre>
        <p class="fw-bold">LATIHAN</p>
        <p>Silahkan anda buat program ajax untuk menyimpan data ke tabel berikut.</p>
        <img src={picture3} alt="" />
      </div>
    </>
  );
};

export default ajax;
