function openNav() {

    let lebar=document.getElementById("mySidenav");
    
    lebar.style.width = "250px";

    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById("mySidenav").style.width = "300px";
      document.getElementById("content").style.marginLeft="0";
    }else{
      document.getElementById("content").style.marginLeft="250px";
    }

    // var x = document.getElementById("mySidenav");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    //   document.getElementById("content").style.marginLeft="250px";
    // } else {
    //   x.style.display = "none";
    //   document.getElementById("content").style.marginLeft="0";
    // }

}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").style.marginLeft="0";
  }




  // ubah warna
  document.body.addEventListener('mousemove', function () {
    const sumbuX = Math.round((event.clientX / window.innerWidth) * 255);
    const sumbuY = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + sumbuX + ',' + sumbuY + ',100)';

});



// push in computer lab untuk merubah warna tulisan
document.body.addEventListener('dblclick', function() {
  const ubahColor=Math.round((event.clientX/window.innerWidth)*255);
  if (ubahColor<50) {
    document.body.style.color= 'white';
  }else{
    document.body.style.color= 'black';
  }
  console.log(ubahColor)
})





