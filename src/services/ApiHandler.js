const SWAPIurl = 'https://swapi.dev/api'

const SWAPIService = {
  getRoot: async () => {
    const res = await fetch(SWAPIurl)
    const data = await res.json()
    return data
  },

  getAllEntries: async (category, page) => {
    const res = await fetch(`${SWAPIurl}/${category}/?page=${page}`)
    const data = await res.json()
    return data
  },

  getEntry: async (category, id) => {
    const res = await fetch(`${SWAPIurl}/${category}/${id}`)
    const data = await res.json()
    return data
  }

}

export default SWAPIService



