import {create} from "zustand";
import {CountryService} from '../services/index.js'


const useCountryStore = (set, get) => ({
    isLoading: false, countries: [],

    async loadCountry() {
        set({
            isLoading: true,
        })

        const response = await CountryService.Countries()


        set({
            isLoading: false
        })

        if (response.error) {
            return console.log("error UCS");
        }

        set({
            countries: response.countries,
        })

    }


})
export default create(useCountryStore)