import { datos } from "./datos.js";

//se identifica el elemento por clase
const padre = document.querySelector(".container")

//creamos un nodo
const nodo = document.createElement('p')
const texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur omnis quae, quis error excepturi itaque consectetur modi. Facere iusto esse maiores nostrum sit eligendi reprehenderit, fugiat itaque eum non.'
nodo.innerText = texto;
// nodo.innerHTML = texto;

let nuevop = document.createElement('p')
nuevop.innerText = texto

padre.appendChild(nodo)
padre.appendChild(nuevop)

// const list = document.querySelectorAll('ul.list > li.item ')
const list = document.querySelectorAll('div.container > div.card > ul.list')

console.log(list);



let p = document.querySelector('div.container > div.card > ul.list')
let name;

datos.map(a => {
  name = a.nombre
  a = document.createElement('li')
  a.innerText = name
  a.classList.toggle('item')
  console.log(a);
  p.appendChild(a)
})


