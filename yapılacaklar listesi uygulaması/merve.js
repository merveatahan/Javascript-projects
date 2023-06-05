const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault(); //sayfanın yenılenmesını engellıyor
  const todo = addForm.add.value.trim(); //trim:bastan sondan bosluk alma
  // console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    //contains:içerenleri bulur
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  // console.log(term);
  // console.log(list.children);    // HTML COLLECTION ' da FORECH metodunu kullanamıyoruz,dönemiyoruz
  // console.log(Array.from(list.children));   // bunun için başına array.form  yazınca notlist şeklinde dönüyor

  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// includes;içeriyormu bulur,dizi yada dizede-contains ise sadece dizede bulur
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  // console.log(term);
  filterTodos(term);
});
