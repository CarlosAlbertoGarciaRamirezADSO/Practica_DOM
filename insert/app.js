//importaciones
import { post } from "./modulo.js";

//variables 

let root = document.querySelector("#root")
let fragmento = document.createDocumentFragment()
const boton = document.createElement("button");
boton.textContent = "solicitar nuevo"
boton.setAttribute("type", "submit")

const section = document.createElement("section");

let formulario = document.createElement("form")
let input = document.createElement("input")

formulario.appendChild(input)
formulario.appendChild(boton)
root.appendChild(formulario)
root.appendChild(section)


input.classList.add("exelente")
// let regex = /$[0-9]^/;

//funciones
let regex =/^[0-9]{1,}$/

const agregarPost = (event) => {
  event.preventDefault()
  console.log(input.value);
  
  if (regex.test(input.value)) {
    
    input.classList.add("bien")
    post(input.value)
      .then((response) => {
        console.log(response);

        let card = document.createElement("div")
        let h2 = document.createElement("h2")
        let parrafo = document.createElement("p")


        h2.textContent = `${response.id} - ${response.title}`
        parrafo.textContent = response.body


        card.appendChild(h2)
        section.appendChild(card)

        // section.insertAdjacentElement("afterbegin", card)
        section.insertBefore(card, section.firstChild)
      })
      .catch();
    root.appendChild(fragmento)

  } else {
    input.classList.remove("bien")
    input.classList.toggle("error")
    console.log("vacio");
  }
  
}

//evento

formulario.addEventListener('submit', agregarPost)
// boton.addEventListener('click',agregarPost)

input.addEventListener('keyup', function () {
  
  if (regex.test(input.value)) {
    input.classList.remove("error")
    input.classList.add("bien")
    
  } else {
    input.classList.remove("bien")
    input.classList.add("error")
  }
  
})




