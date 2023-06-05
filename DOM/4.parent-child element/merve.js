//parent-child element

const ornek = document.querySelector("section");
console.log(ornek.children);
console.log(Array.from(ornek.children));

Array.from(ornek.children).forEach((child) => {
  child.classList.add("section-element");
});

const baslik = document.querySelector("h2");
console.log(baslik.parentElement);
console.log(baslik.parentElement.parentElement);

console.log(baslik.nextElementSibling); //bir öncekini basar

console.log(baslik.previousElementSibling); // bir sonrakını basar

//eventListener

console.log("EventListener");
console.log("LİSTEYE ELEMAN EKLEME ÖRNEĞİ");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("tiklandi");
});

const liElemanlari = document.querySelectorAll("li");
// liElemanlari.forEach((eleman) => {
//   eleman.addEventListener("click", (e) => {
//     //e burada bizim vediğimiz isim merve de diyebilirdim
//     console.log(e);
//     console.log(e.target); //e.target  ile bulundugu li etiketını secebılıyorum
//     console.log("Liye tiklandi");
//     e.target.style.color = "blue";
//   });
// });

const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  // console.log(e);
  // console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
// ul.remove();    ul u kaldırız komple

//bu sekılde sadece li leri kaldırdı-sonradan ekledıgım javascript ı kaldırmıyor
// liElemanlari.forEach((eleman) => {
//   eleman.addEventListener("click", (e) => {
//     e.stopPropagation(); //event in yayılımını durdur.li için işlesin sadece:ul de de verdıysem o ıslemesın
//ul için verdiğim event da çalısırsa iki kere yazar consola
//     console.log(e.target);
//     // e.target.remove();
//   });
// });

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Javascript";

  // ul.append(li);  //sona ekler
  ul.prepend(li); //başa ekler
});
