import axios from 'axios'
const baseUrl = 'http://localhost:3001/phonebook'

const getAll = async () => {
    const request = axios.get(baseUrl)
    return request
        .then(response => {
            console.log('fetch all data from phonebook...', response.data)
            return response.data
        })
        .catch(err => {
            console.log('cannot fetch from server, error message: ', err)
        })
}

const create = async (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request
        .then(response => {
            console.log('creating post...', response.data)
            return response.data
        })
        .catch(err => {
            console.log('cannot fetch from server, error message: ', err)
        })
}

const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request
        .then(response => {
            console.log('updating post...')
            return response.data
        })
        .catch(err => {
            console.log('cannot fetch from server, error message: ', err)
        })
}

const del = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
        .then(response => {
            console.log('deleting post...')
            return response.data
        })
        .catch(err => {
            console.log('cannot fetch from server, error message: ', err)
        })
}

export default { getAll, create, update, del }