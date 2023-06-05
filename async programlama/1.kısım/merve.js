// synchronous programming: örn ekmek kuyruğu,siradasın onundekı ısını halletmeden sen halledemıyosun
// asynchronous programming: örn:burgerkıng de siparıs verdıgınde herkes sıparıs verır onundekı kısılerden bagımsız olarak kımınkı hazır olursa o alır

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   //   console.log(request, request.readyState);
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   } else if (request.readyState === 4) {
//     console.log("Başarılı cevap alamadık!");
//   }
// });

// request.open("GET", "https://jsonplaceholder.typicode.com/todos");
// request.send();

// callback function :mülakatlarda çıkabilir

//function olarak yazım:
// const getTodos = () => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request.responseText);
//     } else if (request.readyState === 4) {
//       console.log("Başarılı cevap alamadık!");
//     }
//   });

//   request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   request.send();
// };
// getTodos();

//callback function olarak yazım
// const getTodos = (callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       callback(undefined, request.responseText);
//     } else if (request.readyState === 4) {
//       callback("Başarılı cevap alamadık!", undefined);
//     }
//   });

//   request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   request.send();
// };
// getTodos((err, data) => {
//   //   console.log(err, data);
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// JSON
const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Başarılı cevap alamadık!", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};
getTodos((err, data) => {
  //   console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
