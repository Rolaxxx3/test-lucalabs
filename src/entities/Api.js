import token from '@/static/constants/token'
import Axios from 'axios'

export default class Api {
    constructor () {
        this.request_uri = 'https://accounting-staging.lucalabs.com/api/v1/graphql'
    }

    async get () {
        const responce = await Axios.get(this.request_uri, {
            headers: { Authorization: `Bearer ${token}` }
        })

        return responce
    }
}
