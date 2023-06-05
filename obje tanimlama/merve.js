let ogrenci = {
  ad: "can",
  yas: 29,
  email: "cnboz@hotmail.com",
  sinif: 12,
  dersler: ["fizik", "kimya", "matematik"],
};

console.log(ogrenci);

//bu proporty lerden spesific birini bastırmak istersem
//1.yöntem
console.log(ogrenci.yas);

//   öğrenci yaşını update ettik
ogrenci.yas = 20;
console.log(ogrenci.yas);

//2.yöntem
console.log(ogrenci["ad"]);

//öğrenci adini update ettik
ogrenci["ad"] = "hakan";
console.log(ogrenci["ad"]);

console.log(typeof ogrenci);

//method ekleme:objenin  içerisine bir fonksiyon yazabılır ve bu fonksıyonu çagırabılırım

// let ogrenci2 = {
//   ad: "merve",
//   yas: 22,
//   email: "cnb@hotmail.com",
//   sinif: 12,
//   dersler: ["kimya", "fizik", "matematik"],
//   login: function () {
//     console.log("öğrenci giriş yaptı");
//   },
//   logout: function () {
//     console.log("öğrenci çıkış yaptı");
//   },
// };
// ogrenci2.login();
// ogrenci2.logout();

//daha kısa duzenlı yazılmıs halı;

let ogrenci2 = {
  ad: "merve",
  yas: 22,
  email: "cnb@hotmail.com",
  sinif: 12,
  dersler: ["kimya", "fizik", "matematik"],
  login() {
    console.log("öğrenci giriş yaptı");
  },
  logout() {
    console.log("öğrenci çıkış yaptı");
  },

  printLessons() {
    // console.log(this);
    console.log(this.dersler);
    this.dersler.forEach((ders) => {
      console.log(ders);
    });
  },
};

ogrenci2.login();
ogrenci2.logout();

//objenin içindeki metodu kullanarak dersleri konsola bastırmak
// console.log(this);
ogrenci2.printLessons();

//dizinin içinde obje tanımlama
let ogrenci3 = {
  ad: "hasan",
  yas: 27,
  email: "fggb@hotmail.com",
  sinif: 12,
  dersler: [
    { isim: "biyoloji", puan: 90 },
    { isim: "fizik", puan: 70 },
    { isim: "geometri", puan: 80 },
  ],

  printLessons3() {
    this.dersler.forEach((a) => {
      console.log(a.isim, a.puan);
    });
  },
};

ogrenci3.printLessons3();

//MATH OBJESİ

console.log(Math);
console.log(Math.PI);

let sayi = 5.7;

console.log(Math.round(sayi)); //en yakına yuvarlar
console.log(Math.floor(sayi)); //bi alta yuvarla
console.log(Math.ceil(sayi)); //bi üste yuvarlar
console.log(Math.trunc(sayi)); //virgülden sonrasını uçurur

const rasgele = Math.random();
console.log(rasgele);
console.log(Math.round(rasgele));
console.log(Math.round(rasgele * 100));
