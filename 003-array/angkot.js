let penumpang = ['sandika', undefined, 'galih'];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    //  tambah penumpang diawal array
    penumpang.push(namaPenumpang)
    // kembalikan isi array dan keluar dari function
    return penumpang
  } else {
    // telusuri seluruh kursi dari awal 
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang dikursi tersebut
        penumpang[i] = namaPenumpang
        // kembalikan isi array & keluar dari function'
        return penumpang

        // jika ada nama yg sama
      } else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log('Maaf nama seperti anda sudah ada di angkot');
        // kembalikan isi array & keluar dari function
        return penumpang

        // jika seluruh kursi terisi
      } else if (i == penumpang.length - 1) {
        // tambah penumapang di akhir array
        penumpang.push(namaPenumpang)
        // kembalikan isi array & keluar dari function
        return penumpang
      }
    }
  }
}


console.log(tambahPenumpang('ana', penumpang));
console.log(tambahPenumpang('fadhli', penumpang));
console.log(tambahPenumpang('galih', penumpang));