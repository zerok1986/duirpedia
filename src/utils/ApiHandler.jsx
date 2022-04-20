const getData = async () => {
  const res = await fetch('https://swapi.dev/api/')
  const data = await res.json()
  return data
}

export default getData
