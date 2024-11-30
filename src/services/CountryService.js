import Service from "./Service.js";

class CountryService extends Service{
    async Country(){
        return this.request(`/countries`)
    }


}
export default new CountryService();