export function validatePost(post: string) {
  if (post.length >= 255) {
    return 'El texto ingresado debe ser menor a 255 caracteres'
  }
  const regex = /^[a-zA-Z0-9.;,@\sáéíóúÁÉÍÓÚñÑ]*$/
  if (!regex.test(post)) {
    return 'El texto no puede contener símbolos no permitidos.'
  }
  return null
}
