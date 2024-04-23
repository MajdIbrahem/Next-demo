export const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")//,{cache:"no-store"} after url to stop caching [dynamic rendering]
    return response.json()
}
export const getPostData = async (slug) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  return response.json()
  console.log(response.json())
}
export const getUserData = async (slug) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`)
  return response.json()
}
