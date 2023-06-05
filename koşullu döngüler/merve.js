//for

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("Döngü Bitti...");

const adSoyad = ["merve", "afra", "hasan"];

for (let i = 0; i < adSoyad.length; i++) {
  console.log(adSoyad[i]);

  let html = `<div>${adSoyad[i]}</div>`;
  console.log(html);
}

//while (fordan farklı olarak 3 lu kullanım yok-baslangıc atama degeri-sadece kosul degeri var-)

const adiSoyad = ["can", "canan", "boz"];
let i = 0;

while (i < 10) {
  // (i 10 dan kücük oldugu sürece)
  console.log(i);
  i++;
}
i = 0;
while (i < adiSoyad.length) {
  console.log(adiSoyad[i]);
  i++;
}

i = 6;
while (i > 3) {
  console.log(i);
  i--;
}

// do while (while dan farklı olarak "do" yazdıktan sonra komut dogru mu bakmaksızın ilk sefer do nun içindekileri çalıstırıyor.daha sonra "whıle"kondısyonuna bakıyor)

let m = 7;

do {
  //(dogru olduguna bakmaksızın lkı degerı dırek bastı,sonra whıle kontrol edıp dogruysa basacak)
  console.log(m);
  m++;
} while (m < 6);

let n = 3;
do {
  console.log(n);
  n++;
} while (n < 5);

// ıf (koşul dogru mu degıl mı bundan bahsediyo )

const yas = 20;

if (yas > 18) {
  console.log("18 yaşından büyüktür");
}

// const adiSoyad = ["can", "canan", "boz"];
if (adiSoyad.length > 2) {
  console.log("işte benim öğrencilerim");
}

const sifre = "sjhdvbjdhvdhjvb";
if (sifre.length >= 8) {
  console.log("Sifre yeterince uzun");
}
//(değilse ) (sifredeki yazdığım deger 8 den az karakter olsaydı consola else dekı degeri yazacaktı)
else {
  console.log("Sifreyi yeniden giriniz");
}

//(1.durumum if;2.durumum else if;bu ikisine de girmiyorsa else)
const sifre1 = "hmhda";
if (sifre1.length >= 12) {
  console.log("Sifre güçlü");
} else if (sifre1.length >= 8) {
  console.log("Şifre yeterli");
} else {
  console.log("Sifreyi yeniden giriniz");
}

//   ve &&         veya ||          not !
const sifre2 = "hmhda!kfjwdbfc";
//(if de ve nin iki kosulunu da sagladıgı için if oldu)
if (sifre2.length >= 12 && sifre2.includes("!")) {
  console.log("Sifre baya güçlü");
} else if (sifre1.length >= 8) {
  console.log("Şifre yeterli");
} else {
  console.log("Sifreyi yeniden giriniz");
}

const sifre3 = "hda!kfjwdbc";
// (if de ve li kosulun ıkısınden bırını  saglamadıgı için else if e indi)
if (sifre3.length >= 12 && sifre3.includes("!")) {
  console.log("Sifre baya güçlü");
} else if (sifre3.length >= 8) {
  console.log("Şifre yeterli");
} else {
  console.log("Sifreyi yeniden giriniz");
}

const sifre4 = "hda!kfjwdbc";
// (if de veya kosulundan ıkısınden bırını sagladıgı ıcın ıf gecerlı oldu)
if (sifre4.length >= 12 || sifre4.includes("!")) {
  console.log("Sifre baya güçlü");
} else if (sifre4.length >= 8) {
  console.log("Şifre yeterli");
} else {
  console.log("Sifreyi yeniden giriniz");
}

const control = false;
if (!control) {
  //(! koymazsak control degeri false old için if içerisi true olmadıgı icın bu çalısmaz, başına ! yazılınca falsenın değili true oldugu için if kondısyonu dogrudur ve çalısır  )
  console.log("Kontrol başarılı");
}

// break(bırak-o degerden sonra dönguyu durdurur.     continue-o değeri atlayıp devam eder)

const notlar = [15, 45, 32, 0, 100, 90, 7];

for (let i = 0; i < notlar.length; i++) {
  if (notlar[i] === 32) {
    continue;
  }
  console.log(notlar[i]);

  if (notlar[i] === 100) {
    console.log("Bravo en yüksek notu sen aldın!");
    break;
  }
}

// switch case
// (değişkenin değerini "case" ifadesindeki değerle karsılastırır,
// eşlesen değerde işlem çalışır,"break" ifadesiyle "switch" ifadesinden çıkılır)
// (==   eşit mi) (===  type da eşit mi)
// (switch tip eşitliğine de bakıyor)
const not = "CC";

switch (not) {
  case "AA":
    console.log("En başarılı sensin");
    break;
  case "BA":
    console.log("süper not");
    break;
  case "BB":
    console.log("güzel not");
    break;
  case "CB":
    console.log("idare eder");
    break;
  case "CC":
    console.log("hadi yine iyisin geçtin dersi");
    break;
  default:
    console.log("Hobaa");
}

// global değişken  "var"
// lokal değişken  "let"  "const"

let yas2 = 29;

if (true) {
  // ( burada global-if dışındada etki etti)
  yas2 = 35;
  console.log("içerideki:", yas2);
}

console.log("dışarıdaki:", yas2);

let yas3 = 30;

if (true) {
  // (let yas3=40 burada lokal-if dışındada etki etmedi)
  let yas3 = 40;
  console.log("içerideki:", yas3);
}

console.log("dışarıdaki:", yas3);

let yas4 = 29;

if (true) {
  let yas4 = 60;
  console.log("içerideki:", yas4);
  if (true) {
    let yas4 = 50;
    console.log("içeridekinin içindeki", yas4);
  }
}

console.log("dışarıdaki:", yas4);
