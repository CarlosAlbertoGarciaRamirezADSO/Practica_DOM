export const comentarios = async()=>{
  const solicitud = await fetch("https://jsonplaceholder.typicode.com/comments")
  const comentarios = await solicitud.json()
  return comentarios
}


export const imagenes = async () => {
  const solicitar = await fetch("https://jsonplaceholder.typicode.com/photos")
  const parsear = await solicitar.json()
  return parsear
}