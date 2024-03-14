let angka = [1, 2, 3];
let nama = ['sandika', 'galih', 'ulul'];


// for (let i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }


//  dibawah ini kinerjanya seperti for di atas


// angka.forEach(function (e) {
//   console.log(e);
// })
nama.forEach(function (e, i) {
  console.log('Mahasiswa ke - ' + i + '  adalah :' + e);
})