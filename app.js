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

console.log(body.childNodes);
console.clear();

// const listaA = [...body.children]

// listaA.map((x) => {
//   console.log(x);
// })




//ejercicios


const padres = dom.getElementById("cards");

console.log(padres.children);

// let arreglo = Array.from(padres.children)

// arreglo.forEach(element => {
//   if (element.length % 2 !== 0) {
//     console.log(element)
//     element.classList.toggle('bg-white')
//   }
// });




// let arreglo = [...padres.children]

// arreglo.map((a, i) => {
//   if (i % 2 != 0) {
//     // console.log(i);
//     a.classList.toggle('bg-white')
//     // console.log(a);

//     let padron = [...a.children]
//     padron.map((e, i) => {
//       // console.log(e);
//       // console.log(i);

//       let padrone = [...e.children]
//       padrone.map((q, r) => {
//         console.log(q);
//         q.classList.toggle('color-black')
//         // console.log(i);

//         // let paragraf = [...q.children]
//         // paragraf.map((b, n) => {
//         //   console.log(b)
//         // })
//       })


//     })
//   }
  
// })


//CAMBIAR ATRIBUTOS Y AGREGAR ATRIBUTOS

let formulario = dom.getElementById('search')

formulario.setAttribute('enctype', 'multipart/form-data')
formulario.setAttribute('autocomplete', 'on')


let input = dom.querySelector('.input')
input.removeAttribute('placeholder')
// input.setAttribute('placeholder','cargar')



// custom propertis

//COLORES

// const html = dom.documentElement;
// // console.log(html);

// const mineshaft = getComputedStyle(html).getPropertyValue('--MineShaft')
// const white = getComputedStyle(html).getPropertyValue('--white')

// html.style.setProperty('--MineShaft','#fff')
// html.style.setProperty('white','#000')

// console.log(mineshaft);
// console.log(white);




//AGREGAR TEXTO Y AGREGAR ETIQUETAS


const parrafo = dom.querySelector('#elemento')
console.log(parrafo);
// parrafo.textContent = `hola soy <b>carlos</b> `;
parrafo.innerHTML = `hola soy <b>carlos</b> `;