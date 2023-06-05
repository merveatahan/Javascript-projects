//lokalStorage: uygulamada data yı sayfa yenılendıgınde kaybetmememı saglayan tutmayı saglayan yapı

//data kaydetme datayı çekme    :
localStorage.setItem("name", "can");
localStorage.setItem("age", 29);

let ad = localStorage.getItem("name");
let yas = localStorage.getItem("age");
console.log(ad, yas);

//update
localStorage.setItem("name", "can boz"); //1. yöntem
localStorage.age = 30; //2. yöntem

ad = localStorage.getItem("name");
yas = localStorage.getItem("age");
console.log(ad, yas);

//delete silme yontemi
localStorage.removeItem("name");

ad = localStorage.getItem("name");
console.log(ad);

//yada-asıl kullanılan-set ettiğim değerleri uçuruyorum
//applicattion da hersey uctu

localStorage.clear();
ad = localStorage.getItem("name");
yas = localStorage.getItem("age");
console.log(ad, yas);

//data yı dönüştürme

const variable = [
  { hobby: "swimming", person: "can" },
  { hobby: "playing card", person: "can" },
  { hobby: "take a trip", person: "can" },
];
// console.log(variable);

localStorage.setItem("todo", JSON.stringify(variable));
console.log(JSON.stringify(variable));

const storedData = localStorage.getItem("todo");
console.log("hasn", JSON.parse(storedData));

//ilk başta array ımız vardı [JSON.stringify] ile string e çevirdik
//daha sonra bana data geldi JSON STRİNG şeklinde bunu alıp [JSON.parse] ile içerde kullanabılecegım array halıne donustu
