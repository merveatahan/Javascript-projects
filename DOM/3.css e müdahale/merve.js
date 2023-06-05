// css e müdahale

const baslik = document.querySelector("h1");
// baslik.setAttribute("style", "padding:50px;");   (inline css i de ezdiği için sarı rengi gitti)

console.log(baslik.style);

baslik.style.padding = "50px";
baslik.style.fontSize = "60px";
baslik.style.fontWeight = "bold";

//class ekleme classList.add  <>  class çıkarma  classList.remove   :

const icerik = document.querySelector("p");
console.log(icerik.classList);
icerik.classList.add("merve");
icerik.classList.remove("error");

// uygulama

const pDegeri = document.querySelectorAll("p");
pDegeri.forEach((can) => {
  if (can.textContent.includes("error")) {
    can.classList.add("error");
  }
  if (can.textContent.includes("success")) {
    can.classList.add("success");
  }
});
