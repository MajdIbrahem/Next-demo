export const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")//,{cache:"no-store"} after url to stop caching
    return response.json()
}
export const getPostData = async (slug) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${slug}`)
  return response.json()
}
export const getUserData = async (slug) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`)
  return response.json()
}