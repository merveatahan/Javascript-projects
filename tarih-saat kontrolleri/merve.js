// şimdiki tarihi oluşturma

const now = new Date();
console.log(now);
console.log(typeof now);

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// pazar sıfır oluyor
//ocak sıfır oluyor

console.log("timestamp:", now.getTime()); //01.01.1970 den itibaren günümüze kdr ne kdr milisanıye gecmıs
//tarihleri kıyaslarken bu değeri kullanıyoruz

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

//timesTamp: iki tarih arasındaki farkı bulma

const startDate = new Date("08/15/2018 9:45:00");
const now2 = new Date();
console.log(startDate);

const diff = now2.getTime() - startDate.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 360);
console.log(`video çekmeye ${mins} dakika önce başladım.`);
console.log(`video çekmeye ${hours} saat önce başladım.`);
console.log(`video çekmeye ${years} yıl önce başladım.`);

const timesTamp = 1627727162629;
console.log(new Date(timesTamp));

// kıyaslama amaçlı "moment js" i kullanıyoruz

//tarayıcıda saat olusturma

const clock = document.querySelector(".clock");

const tick = () => {
  const now2 = new Date();
  const hour = now2.getHours();
  const minute = now2.getMinutes();
  const second = now2.getSeconds();

  //   console.log(hours, minutes, second);

  const html = `
 <span>${hour}</span> :
 <span>${minute}</span> :
 <span>${second}</span>`;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
