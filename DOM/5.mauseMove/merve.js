const kutu = document.querySelector(".kutu");
kutu.addEventListener("mousemove", (e) => {
  //   console.log(e);
  //   console.log(e.offsetX);
  kutu.textContent = `x koordinatı ${e.offsetX},y koordinatı ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});

//ekranda pop-up açma

console.log("pop-up çıkarma");

const button = document.querySelector("button");

const mainPopup = document.querySelector(".main-popup");
const close = document.querySelector(".popup-close");

button.addEventListener("click", (e) => {
  mainPopup.style.display = "block";
});

close.addEventListener("click", (e) => {
  mainPopup.style.display = "none";
});

mainPopup.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.className === "main-popup") {
    mainPopup.style.display = "none";
  }
});
