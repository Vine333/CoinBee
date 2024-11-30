import {create} from "zustand";
import {CountryService} from '../services/index.js'


const useCountryStore = (set, get) => ({
    isLoading: false, countries: [],

    async loadCountry() {
        set({
            isLoading: true,
        })
        console.log('1')
        const response = await CountryService.Country()
        console.log('request', response);
        console.log(2)
        set({
            isLoading: false
        })
        console.log(3)
        if (response.error) {
            return console.log("error UCS");
        }
        console.log(4)
        set({
            countries: response.countries,
        })

    }


})
export default create(useCountryStore)