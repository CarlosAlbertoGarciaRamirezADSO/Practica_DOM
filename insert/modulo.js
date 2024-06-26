export const post = async(id) => {
  let respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let parseo = await respuesta.json()
  return parseo
}