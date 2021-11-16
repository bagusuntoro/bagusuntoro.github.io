<?php 
$server ="localhost";
$username="root";
$password="";
$db="test";

$connect=mysqli_connect($server,$username,$password,$db) or die("Gagal masuk");
// $select=mysql_select_db($db);
// if ($connect) {
// 	echo "Berhasil Terkoneksi";
// 	if ($select) {
// 		echo "Database ditemukan";
// 	}else{
// 		echo "Database tidak ditemukan";
// 	}
// }else{
// 	echo "Gagal Terko";
// }
 ?>
