var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Mehaba"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Başarılı cevap alamadık!", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

getTodos("example/osman.json", (err, data) => {
  console.log(err);
  // getTodos("example/tarik.json", (err, data) => {
  //   console.log(data);
  // });
  // getTodos("example/tuba.json", (err, data) => {
  //   console.log(data); // !!!!!!!!!!!!!!HATA VERDİ OLMADI!!!!!!!!!!!!
  // });
});

// //promise kullanımı
// const getIt = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Başarılı data");
//     reject("başarısız data");
//   });
// };
// getIt().then(
//   (data) => {
//     console.log("başarılı", data);
//   },
//   (err) => {
//     console.log("başarısız", err);
//   }
// );

//kısa yazım

// getIt()
//   .then((data) => {
//     console.log("başarılı", data);
//   })
//   .catch((err) => {
//     console.log("başarısız", err);
//   });

//  fetch : asıl kullanılan en kısa yol

fetch("example/osman.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
