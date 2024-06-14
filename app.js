let win = window;
let dom = document;
let body = dom.body;
let form = dom.forms
let imagen = dom.images
//nuevas
let divs = dom.querySelectorAll('div')
let div = dom.querySelector('div')
let porid = dom.getElementById("api")
let poridnuevo = dom.querySelector("#api")
let poridnclases = dom.querySelectorAll(".container")
let poridnclase = dom.querySelector(".container")
let poratributo = dom.getElementsByName('search');
let poldclass = dom.getElementsByClassName('input');
let traeritem = dom.querySelectorAll('ul.list > li.item')


console.log(win);
console.log(dom);

// console.log(dom.doctype);
// console.log(dom.documentElement);
// console.log(dom.head);
// console.log(body);
// console.log(body.children);
// console.log(body.children[1]);
// console.log(divs);
// console.log(div);

console.log("formularios", form);
console.log("");
console.log("imagenes", imagen);
console.log("");
console.log("por id", porid);
console.log("");
console.log("por id", poridnuevo);
console.log("");
console.log("por clase", poridnclase);
console.log("");
console.log("por clases", poridnclases);
console.log("");
console.log("por atributo", poratributo);
console.log("");
console.log("por oldclass", poldclass);
console.log("");
console.log("por especificidad", traeritem);
console.log("");
console.log("por MAYUSCULA",);



let id = dom.getElementById("api")
let palabra = id.textContent.toUpperCase()
id.innerHTML = palabra
console.log("por mayuscula", palabra);
console.clear();

console.log(body.childNodes);

// const listaA = [...body.children]

// listaA.map((x) => {
//   console.log(x);
// })
