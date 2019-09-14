var input_nilai = require('readline-sync');
var alas = input_nilai.question("masukkan nilai a : ");
var tinggi = input_nilai.question("masukkan nilai t : ");
var luas = alas * tinggi / 2;
console.log("luas segitiga :"+luas);