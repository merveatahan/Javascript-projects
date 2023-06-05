const form = document.querySelector(".singupForm");
const username = document.querySelector("#username");
const message = document.querySelector(".message");
const usernamePattern = /^[a-z]{6,10}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); //sayfanın refresh olmasını engeller
  //   console.log("Form Gönderildi");
  //   console.log(username.value);
  console.log(form.username.value);
});

// regex ifadeyi test etme

console.log("test regex");

const username1 = "111canboz";
const pattern = /^[a-z]{6,10}$/;

//1.yöntem
// let sonuc = pattern.test(username1);
// // console.log(sonuc);

// if (sonuc) {
//   console.log("Başarılı");
// } else {
//   console.log("Başarısız");
// }

//2.yöntem
let sonuc = username1.search(pattern);
console.log(sonuc);

//

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username2 = form.username.value;

  if (usernamePattern.test(username2)) {
    message.textContent = "Başarılı";
  } else {
    message.textContent =
      "Lütfen küçük harf ve 6-10  karakter arasında giriniz";
  }
});

// form.username.addEventListener("keyup", (e) => {
//   //   console.log(e.target.value );
//   //   console.log(form.username.value); bu ikisi aynı sonucu verır konsola 1.tercihen kullanılır
//   if (usernamePattern.test(e.target.value)) {
//     console.log("başarılı");
//   } else {
//     console.log("başarısız");
//   }
// });

//

form.username.addEventListener("keyup", (e) => {
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
