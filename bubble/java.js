(function () {
  function createElement() {
    const container = document.querySelector(".container");
    const element = document.createElement("span");
    const size = Math.random() * 60;

    element.style.width = 20 + size + "px";
    element.style.height = 20 + size + "px";
    element.style.left = Math.random() * innerWidth + "px";
    container.appendChild(element);
    console.log(size);

    setTimeout(() => {
      element.remove();
    }, 4000);
  }
  setInterval(createElement, 100);
})();

const font = document.querySelector(".gradient-text");
font.style.fontSize = "45px";
