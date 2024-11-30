import Service from "./Service.js";

class ProductsService extends Service{

    async Products (country,category_id){
        return this.request(`/products?country_iso=${country}&category_id=${category_id}`)

    }
}
export default new ProductsService();