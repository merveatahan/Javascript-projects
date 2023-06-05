// alert("alert-mesaj");
console.log("Merve Atahan");
console.log(15);
var x = 8;
var y = 9;
console.log(x + y + "   (>x+y değeri)");
let gun = 28;
let ay = 6;
let yil = 1992;
console.log(gun, ay, yil);
console.log(
  "Merve Atahan " + gun + "/" + ay + "/" + yil + " tarihinde doğmuştur."
);
gun = 29;
console.log(gun + "   (>let değiştirilebilir değişken,gun 28 di 29 yaptım)");

var arabafiyati = 130000;
console.log(arabafiyati + "   (>var ile verdik )");

const sifirarabafiyati = 250000;
console.log(sifirarabafiyati + "   (>const değiştirilemez değer)");

console.log(
  "strings ifade" +
    "   (>string ifade:metinleri ifade etmek için kull.tırnak içinde yazılır)"
);

let email = "atahanmrv@gmail.com";
console.log(email);

//Birleştirme:

let ad = "Merve";
let soyad = "Atahan";
let adSoyad = ad + " " + soyad;
console.log(adSoyad + "   (>string ifadelerin birleştirilmesi)");

//karakterleri çekme

console.log(adSoyad[0] + "   (>ilk harfini istiyorum)");

//kaç karakter

console.log(adSoyad.length),
  console.log("   >.length kaç karakterden oluşuyor");
// if(adSoyad.length > 0)
// {

// }

//methodlar-fonksiyonlar

console.log(adSoyad);
console.log(adSoyad.toUpperCase());
let kucukAdSoyad = adSoyad.toLocaleLowerCase();
console.log(kucukAdSoyad);

let index = adSoyad.indexOf("t");
console.log(
  "t nin bulunduğu index:" + index + "  >indexOf seçilinin bulundugu index "
);

let adiSoyadi = "merve suntay atahan";
let son = adiSoyadi.lastIndexOf("a");
console.log(
  son + "  >lastIndexOf seçtiğim ögenin son yer aldıgı dizin numarası) "
);

let bastanSona = adSoyad.slice(0, 7);
console.log(bastanSona + "  (>slice ilk ve son sectiklerim arasını goster)");

let bastanSonaSubstr = adSoyad.substr(4, 5);
console.log(
  bastanSonaSubstr + "  (>substr ilk sectiğim baslangıc, 2. sectiğim uzunluk )"
);

let yerDegistir = adSoyad.replace("v", "w");
console.log(yerDegistir + " (   >replace 1.seçileni 2. seçilen ile değistir)");

//numbers

let yariCap = 15;
const piSayisi = 3.14;

console.log(yariCap, piSayisi);

let daireAlani = piSayisi * yariCap ** 2;
console.log(daireAlani);

console.log(16 / 4);

let kalan = yariCap % 4;
console.log(kalan);

let sonuc = 6 * (15 - 4) ** 2;
console.log(sonuc);

let sayi = 13;

// sayi = sayi + 1;
// sayi++;
// sayi+=1;
// sayi*=3;
// sayi/=3;

console.log(sayi);

//NaN - Not a Number

console.log(15 / "merve");
console.log(15 * "merve");

let birlestirme = "dersi " + sayi + " kere tekrar ettim.";
console.log(birlestirme);

//template stringler  (${})

const framework1 = "Angular";
const framework2 = "React";
const framework3 = "Vue";

let sonuc1 =
  "Can Boz un bildiği javascript frameworkleri : " +
  framework1 +
  " " +
  framework2 +
  " " +
  framework3;
console.log(sonuc1);

let sonuc2 = `Can Boz un bildiği javascript frameworkleri : ${framework1} ${framework2} ${framework3}`;
console.log(sonuc2);

let html = `
<h1>${framework1}</h1>
<h2>${framework2}</h2>
<h3>${framework3}</h3>
`;
console.log(html);

//arrays-dizi

let isim = ["can", "merve", "hasan"];
console.log(isim[1]);

isim[0] = "afra";
console.log(isim[0]);

let yas = [3, 18, 25, 50];
console.log(yas[3]);

let rasgele = ["merve", "hasan", 30, 4];
console.log(rasgele);

console.log(rasgele.length);

let tireli = isim.join("-");
console.log(tireli);

let virgüllü = isim.join(",");
console.log(virgüllü);

let sira = isim.indexOf("hasan");
console.log(sira);

let ekle = isim.concat(["can", "boz"]);
console.log(ekle);

let elemanekle = isim.push("leyla");
console.log(isim);

isim.pop();
console.log(isim);

let yasi;
console.log(yasi, yasi + 5, `yas:${yasi}`);

let yasim = null;
console.log(yasim, yasim + 5, `yas:${yasim}`);

//boolean

console.log(true, false, "true", "false");

let emailim = "atahanmrv@gmail.com";
let varmi = emailim.includes("@");
console.log(
  varmi +
    "    ( includes  >dizinin içinde belirli bi elemanın bulunup bulunmadığını kontrol) "
);

let varmis = emailim.includes("k");
console.log(varmis);

let isimler = ["merve", "afra", "hasan"];
let varmi2 = isimler.includes("afra");
console.log(varmi2);

let yas1 = 30;
console.log(yas1 == 30);
console.log(yas1 == 35);
console.log(yas1 != 35);
console.log(yas1 < 35);
console.log(yas1 > 35);
console.log(yas1 <= 30);
console.log(yas1 >= 30);

let ad1 = "merve";
console.log(ad1 == "merve");
console.log(ad1 == "Merve");
console.log(ad1 > "Merve" + "  kücük harfler buyuk harflerden buyuktur");
console.log(ad1 > "hasan" + "   ilk harflerin albafe sirasina gore siralar");

let yas2 = 29;

console.log(yas2 == 29);
console.log(yas2 == "29");

console.log(yas2 != 29);
console.log(yas2 != "29");

console.log(yas2 === 29);
console.log(yas2 === "29");

console.log(yas2 !== 29);
console.log(yas2 !== "29");

let yas3 = "29";
console.log(
  yas3 + 1 + "    >string ve numberi topladi hepsini stringe cevirdi"
);
console.log(typeof yas3 + "   >typeof veri türünü belirlemede kullanılır ");

yas3 = Number(yas3);
console.log(yas3 + 1);
console.log(typeof yas3);

let sonuc5 = Number("can");
console.log(sonuc5);

let sonuc6 = String(18);
console.log(sonuc6, typeof sonuc6);

let sonuc7 = Boolean(18);
console.log(
  sonuc7,
  typeof sonuc7 +
    "  >boolean larda sayı degerlerınde hepsı true doner sadece sıfır false doner"
);

let sonuc8 = Boolean(0);
console.log(sonuc8, typeof sonuc8);
