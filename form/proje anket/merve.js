const correctAnswer = ["E", "E", "E", "E"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });
  //   console.log(score);

  result.classList.remove("d-none");
  let puan = 0;
  const bastir = setInterval(() => {
    result.querySelector("span").textContent = `${puan}%`;
    if (puan == score) {
      clearInterval(bastir);
    } else {
      puan++;
    }
  }, 10);
});

// setTimeout

// setTimeout(()=>{
//     console.log("merve");   [ forma tıkladıktan 2 sn sonra içeri atar]
// },2000);                     [    içerisindeki yazmış oldugun kod 1 sefer çalırır]

// setInterval

// setInterval(()=>{
//     console.log("merve");      [1 sn de bi kod tekrar çalışıyor]
// },1000);                       [durdurmak için clearInterval]

// let i=0;
// const bastir=setInterval(()=>{
//     console.log("merve");
//     i++;
//     if(i==4)
//     {
//         clearInterval(bastir);
//     }
// },1000);
