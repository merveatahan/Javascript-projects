//  filter:elemanları tek tek gezer,içerisindeki koşul dogruysa bu elemanı geri doner
// yanlışsa geri dönmez array dan çıkarır

const points = [70, 75, 25, 35, 10, 80, 27];

const studentPassed = points.filter((point) => point > 50);
console.log(studentPassed);

const students = [
  { name: "can", passed: true },
  { name: "merve", passed: false },
  { name: "canan", passed: false },
  { name: "hasan", passed: true },
];

const passingStudents = students.filter((student) => {
  return student.passed; //return !student.passed;  [false leri yazdırırdı]
});
console.log(passingStudents);

// map metodu : elemanları tek tek dönerken bunları tek başına geriye döndürür
const point = [70, 75, 25, 35, 10, 80, 27];

const newPoint = point.map((point) => {
  return point + 10;
});
console.log(newPoint);

const student = [
  { name: "ali", point: 40 },
  { name: "veli", point: 60 },
  { name: "rana", point: 30 },
  { name: "afra", point: 100 },
];

const newStudentPoints = student.map((e) => {
  if (e.point < 50) {
    e.point += +15;
    return e;
    // return { name: e.name, point: e.point + 15 };
  } else {
    return e;
  }
});
console.log(newStudentPoints);

//reduce metodu: dizideki her ögeyi önceki ögelerle birleştirerek tek bir sonuc döndürür

const point2 = [70, 75, 25, 35, 10, 80, 27];

const result = point2.reduce((value, point) => {
  if (point > 50) {
    value++;
  }
  return value;
}, 0);
console.log(result);

const student2 = [
  { name: "ali", point: 60 },
  { name: "can", point: 70 },
  { name: "veli", point: 30 },
  { name: "rana", point: 100 },
  { name: "ali", point: 80 },
  { name: "veli", point: 30 },
  { name: "rana", point: 60 },
  { name: "can", point: 40 },
];
const canTotal = student2.reduce((value, student) => {
  if (student.name == "can") {
    value += student.point;
  }
  return value;
}, 0);
console.log(canTotal);

// find :koşulu saglayan ilk ögeyi bastırır,sonrakılere bakmaz

const point3 = [70, 75, 25, 35, 10, 80, 27];

const highPoint = point3.find((point) => {
  return point > 70;
});
console.log(highPoint);

// push: dizinin(array) sonuna öge ekler

const point4 = [70, 75, 25, 35, 10, 80, 27];
point4.push(90);
console.log(point4);

// pop:son elemanı çıkartır

point4.pop();
console.log(point4);

point4.pop();
console.log(point4);

//findIndex: array daki belirli bir ögenin degerini guncelleme

const point5 = [70, 75, 25, 35, 10, 80, 27];
const arrayIndex = point5.findIndex((point) => point == 35);
point5[arrayIndex] = 45;
console.log(point5);

const student5 = [
  { name: "can", point: 40 },
  { name: "tuba", point: 60 },
  { name: "elif", point: 30 },
  { name: "osman", point: 100 },
];

const objectIndex = student5.findIndex((student) => student.name == "osman");
student5[objectIndex].name = "hakan";
console.log(student5);

const objectIndex1 = student5.findIndex((student) => student.point == 30);
student5[objectIndex1].point = 70;
console.log(student5);

// sort : sıralamak istediğimde kullanıyorum
//reverse:diziyi ters cevirir yani dizideki son karakter 1. olur vb

const names = ["can", "tuba", "elif", "hakan", "osman"];
names.sort();
names.reverse();
console.log(names);

const puan = [70, 75, 25, 3, 10, 80, 27];
// puan.sort();     //sort: sayıların ilk rakamlarına bakıyor sadece,yanındakı rakamlara bakmıyor
// puan.reverse();
puan.sort((a, b) => b - a);
console.log(puan);

const student6 = [
  { name: "can", point: 40 },
  { name: "tuba", point: 60 },
  { name: "elif", point: 30 },
  { name: "osman", point: 100 },
];

student6.sort((a, b) => {
  if (a.point > b.point) {
    return -1;
  } else if (b.point > a.point) {
    return 1;
  } else {
    return 0;
  }
});
// student6.sort((a,b)=>b.point-a.point);  //kısa yazımı
console.log(student6);

const student7 = [
  { name: "can", point: 40 },
  { name: "tuba", point: 60 },
  { name: "elif", point: 30 },
  { name: "hakan", point: 100 },
  { name: "afra", point: 45 },
  { name: "osman", point: 70 },
];

const filtered = student7.filter((e) => e.point < 50);

const plusPoint = filtered.map((e) => {
  return `${e.name}  adlı öğrencinin yeni notu ${e.point + 15}`;
});
console.log(plusPoint);

const newNotes = student7
  .filter((e) => e.point < 50)
  .map((e) => `${e.name}  adlı öğrencinin yeni notu ${e.point + 15}`);
console.log(newNotes);
