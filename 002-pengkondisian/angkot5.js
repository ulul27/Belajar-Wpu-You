let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let angkot = 1; angkot <= jmlAngkot; angkot++) {
  if (angkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + angkot + ' beroperasi dengan BAik')
  } else if (angkot === 8 || angkot === 10) {
    console.log('Angkot No. ' + angkot + ' sedang lemburr')
  } else {
    console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi')
  }
}