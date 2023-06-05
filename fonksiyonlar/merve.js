// function declaration seklinde tanımlıyorsak ister fonksiyon tanımlamadan önce ister sonra çağırırız
function can() {
  console.log("afra");
}
can();
can();
can();

canboz();
function canboz() {
  console.log("merve");
}

//functıon expression seklinde tanımlıyorsak önce fonksiyon tanımlanır sonra çağırılır.
const icboz = function () {
  console.log("hasan");
};
icboz();

//fonksiyona parametre vermek:
//veriyi yollarsam
const canboz2 = function (ad, soyad) {
  console.log("Ad:" + ad + " Soyad:" + soyad);
  console.log(`Ad Soyad: ${ad} ${soyad}`);
};
canboz2("merve", "atahan");

//veriyi yollamazsam;default değer geçerlidir
const can2 = function (ad = "can", soyad = "boz") {
  console.log(`Ad Soyad:${ad} ${soyad}`);
};
can2();
can2("afra", "atahan");

//fonksiyonlarda return:
//1.
const karealani = function (kenar) {
  let alan = kenar ** 2;
  console.log(alan);
};
karealani(6);

//2.
const karealani2 = function (kenar) {
  let alan = kenar ** 2;
  return alan;
};
const sonuc = karealani2(6);
console.log(sonuc);

//3.
const karealani3 = function (kenar) {
  return kenar ** 2;
};
const sonuc3 = karealani3(6);
console.log(sonuc3);

// Arrow function  (=>);kısa yazım sunar

//1. tek satır return var ise kullanım şekli; kenar=parametre | kenar**2=return
const karealani4 = (kenar) => kenar ** 2;

const sonuc4 = karealani4(4);
console.log(sonuc4);

//2.parametre yok iken
const afra = () => "AFRA";

const afr = afra();
console.log(afr);

//arrow örnek;

// const fatura = function (urunler, vergi) {
//   let toplam = 0;
//   for (let i = 0; i < urunler.length; i++) {
//     toplam += urunler[i] + urunler[i] * vergi;
//   }
//   return toplam;
// };
// console.log(fatura([10, 20, 30], 0.25));

const fatura = (urunler, vergi) => {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};
console.log("fatura", fatura([10, 20, 30], 0.25));

// fonksiyon ve method arasındaki fark
// fonksiyonu ben tanımlıyorum
// method zaten tanımlı

//callBack function
const a = (callBacka) => {
  let yas = 40;
  callBacka(yas);
};
a(function (value) {
  console.log(value);
});

//forEach

let ogrencilerim = ["can", "canan", "afra", "merve"];

ogrencilerim.forEach(function () {
  console.log("selam");
});

ogrencilerim.forEach(function (kisi) {
  console.log(kisi);
});

ogrencilerim.forEach(function (kisi, index) {
  console.log(kisi, index);
});

const ogrenci = (kisi, index) => {
  console.log(`${index} - ${kisi}`);
};
ogrencilerim.forEach(ogrenci);

//örnek

console.log("forEach örnek;");

const ulum = document.querySelector(".main");
let kisiler = ["afra", "yiğit", "baris", "dila"];

let html = ``;

kisiler.forEach((ogrenci) => {
  html += `<li>${ogrenci}</li>`;
});
console.log(html);

ulum.innerHTML = html;
