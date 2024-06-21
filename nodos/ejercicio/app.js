import { data } from "./datos.js";

const contenedor = document.querySelector(".container")
const fragmento =document.createDocumentFragment()



data.map(obj => {
  console.log(obj);

  //se crea  los elementos
  let card = document.createElement("div")
  let card_header = document.createElement("div")
  let card_title = document.createElement("h2")
  let card_body = document.createElement("div")
  let card_img = document.createElement("img")
  let card_paragraph = document.createElement("p")
  let card_button = document.createElement("button")
  let card_text = document.createElement("span")
  let card_a = document.createElement("a")
  let card_icon = document.createElement("i")
  
  let cards = document.createElement("div")
  
  cards.appendChild(card)
  card.appendChild(card_header)
  card_header.appendChild(card_title)
  card.appendChild(card_body)
  card_body.appendChild(card_img)
  card_body.appendChild(card_paragraph)
  
  card_a.appendChild(card_text)
  card_a.appendChild(card_icon)
  card_body.appendChild(card_a)



  card_text.textContent = "saber mas"
  
  card.classList.add("card")
  card_header.classList.add("card__header")
  card_title.classList.add("card__title")
  card_body.classList.add("card__body")
  card_img.classList.add("card__img")
  card_paragraph.classList.add("card__paragraph")
  card_icon.classList.add("bx", "bxs-chevron-right", "button__icon")
  card_a.classList.add("button" ,"button--outline")

  // cards.classList.add("cards")


  contenedor.classList.add("cards")
  
  
  //texto
  
  card_title.innerText = obj.title
  card_img.innerHTML = obj.src
  card_img.setAttribute("src", obj.src)
  card_paragraph.innerText = obj.paragraph
  card_button.textContent = "Saber Más"
  
  
  
  fragmento.appendChild(cards)
})

contenedor.appendChild(fragmento)
