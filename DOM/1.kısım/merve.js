//querySelector  (ilk sağlayanı yazdırır konsola)

const hata = document.querySelector("p");
console.log(hata);

const hata1 = document.querySelector(".error");
console.log(hata1);

const hata2 = document.querySelector("div.error");
console.log(hata2);

// querySelectorAll (o selectore sahip olanların hepsını secer)

const hata3 = document.querySelectorAll("p");
console.log(hata3);
console.log(hata3[1]);

hata3.forEach((hatam) => {
  console.log(hatam);
});

//getElementById  (id 'si  "şu" olanı çek)

const baslik = document.getElementById("can");
console.log(baslik);

// getElementSByClassName (class'ı "şu" olanları çeker) (içinde forEach kullanılmıyor-getElementsByTagName de de)
const pEtiket = document.getElementsByClassName("error");
console.log(pEtiket);
console.log(pEtiket[0]);

//getElementsByTagName
const pEtiket1 = document.getElementsByTagName("p");
console.log(pEtiket1);
console.log(pEtiket1[1]);
