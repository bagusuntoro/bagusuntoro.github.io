// konfigurasi materialize
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 600,
  interval: 4000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);


const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {
    scrollOffset: 50
  });
});

// const scrol = document.querySelectorAll('.scrollspy');
// M.Scrollspy.init(scrol, {
//   scrollOffset: 50
// });

document.addEventListener('DOMContentLoaded', function () {
  var select = document.querySelectorAll('select');
  var instances = M.FormSelect.init(select);
});











// google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwJkwtS3HKmbfqlrCk54sKrkhV817rgKpKe9a1Ll5v-uIer4u3p6NqJZL3pm4KTtTloLg/exec'
const form = document.forms['warungSoneta']
const pesan = document.querySelector('.pesan');
const loding = document.querySelector('.loding');


form.addEventListener('submit', e => {
  e.preventDefault()

  // ketika submit di klik
  // tampil loding, hilangkan tombol pesan
  loding.classList.toggle('hilang');
  pesan.classList.toggle('hilang');


  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // tampil pesan, hilangkan tombol loding
      loding.classList.toggle('hilang');
      pesan.classList.toggle('hilang');
      // alert
      alert('Terimakasih! Pesanan Anda Sedang Diproses');
      // reset form
      form.reset();
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})




