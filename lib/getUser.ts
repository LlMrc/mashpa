

async function getUser(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${1}`)
  if(!res.ok) throw new Error('faild to fatch data')

  const data = res.json()

return data 
}

export default getUser

