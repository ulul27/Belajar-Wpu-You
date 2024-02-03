let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let angkot = 1; angkot <= jmlAngkot; angkot++) {
  if (angkot <= angkotBeroperasi) {
    console.log('Angkot dengan No ' + angkot + ' beroperasi dengan baik')
  } else {
    console.log('Angkot dengan No. ' + angkot + ' sedang tidak beroperasi')
  }
}