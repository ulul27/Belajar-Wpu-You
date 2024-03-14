let jmlAngkot = 10;

for (let angkot = 1; angkot <= jmlAngkot; angkot++) {
  if (angkot === 5 || angkot === 8 || angkot === 10) {
    console.log('Angkot No. ' + angkot + ' sedang lembur')
  } else if (angkot <= 6) {
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik')
  } else {
    console.log('Angkot No ' + angkot + ' sedang tidak beroperasi')
  }
}