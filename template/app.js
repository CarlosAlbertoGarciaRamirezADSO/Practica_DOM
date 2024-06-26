import { comentarios, imagenes } from "./modulo.js";


const root = document.querySelector("#root")
const fragmento = document.createDocumentFragment();
const plantilla = document.querySelector("#plantilla").content;

const sections = document.createElement("section")
sections.classList.add("cards")

// const img = document.createElement("img")

console.log(plantilla);

comentarios().then((lista) => {
  
  lista.forEach(comentarios => {

    plantilla.querySelector("div > h2").textContent = comentarios.name;
    plantilla.querySelector("div > div > p").textContent = comentarios.email;
    plantilla.querySelector("div > div > p ~ p").textContent = comentarios.body;


    plantilla.querySelector("div").classList.add("card")

    const clone = document.importNode(plantilla, true);
    fragmento.appendChild(clone)

  });

  sections.appendChild(fragmento)
  root.appendChild(sections)

  
})



// imagenes().then((imag) => {
//   plantilla.querySelector("div > div").textContent = imag.url;
// })

// img.appendChild(sections)
// root.appendChild(img)
