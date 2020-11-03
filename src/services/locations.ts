import axios from 'axios'

const baseApiPath = 'http://localhost:3030/locations'

export interface Location {
    country: string
    eastings: number
    id: number
    latitude: number
    longitude: number
    nhs_ha: string
    northings: number
    postcode: string
}

class Locations {
    public list = () => {
        let url = baseApiPath

        return axios.get(url)
    }
}
export const locations = new Locations()
