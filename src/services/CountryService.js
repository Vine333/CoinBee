import Service from "./Service.js";

class CountryService extends Service {
    async Countries() {
        return this.request(`/countries`)
    }


}

export default new CountryService();