<?php 
include"koneksi.php";

$email =$_REQUEST['email'];
$password =$_REQUEST['password'];
$komen =$_REQUEST['komen'];

$mysqli="INSERT INTO pens(email, password, komen)
		values('$email', '$password', '$komen')";

$result = mysqli_query($connect, $mysqli);

if ($result) {
	echo "Data Berhasil Diinputkan";
}else{
	echo "Data Gagal Diinputkan";
}
mysqli_close($connect);
 ?>

