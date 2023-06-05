//tarayıcıda sayfa içeriğini değiştirme

const pDegeri = document.querySelector("p");
console.log(pDegeri);
console.log(pDegeri.innerText);

pDegeri.innerText = "CAN BOZ GÜNCEL";

const pDegeri2 = document.querySelectorAll("p");

pDegeri2.forEach((a) => {
  console.log(a.innerText);
  a.innerText += "  yeni alan"; // (+=)OLANI KORUR YANINA STRING OLARAK EKLER
});

//KAPSAYICININ İÇİNDEKINI DEGISTIRMEK ISTEDIGIMDE

const icerik = document.querySelector(".icerik");
console.log(icerik.innerHTML);

icerik.innerHTML += "<h2>Vue JS,React JS,Angular JS</h2>";

const kisi = ["afra", "hasan", "merve"];
kisi.forEach((a) => {
  icerik.innerHTML += `<p>${a}</p>`;
});

console.log("attributeler;");

//attribute:"class" - "id" - "style" vb..
//getAttribute:attribute leri çekme
//setAttribute:güncelleme (eger boyle bı deger varsa guncellıyor-yoksa bastan olusturuyor)
//setAttribute inline css şeklinde verilen değerleri eziyor,bu yuzden kullanımı tercıh edilmıyor

const link = document.querySelector("a");
console.log(link.getAttribute("href")); //parantez içine hangi attribute mi getirmek istediğimi yazıyorum

link.setAttribute("href", "http://www.boztraining.com");
link.textContent = "Boz Training";

const pDeger = document.querySelector("h6");
console.log(pDeger.getAttribute("class"));
pDeger.setAttribute("class", "error");
pDeger.setAttribute("style", "color:pink");
