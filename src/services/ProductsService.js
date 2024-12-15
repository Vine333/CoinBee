import Service from "./Service.js";

class ProductsService extends Service {

    async Products(country, category_id, page = 1, pageSize = 20) {
        if(category_id === null||category_id===undefined){
            return this.request(`/products?country_iso=${country}&page=${page}&per_page=${pageSize}`)

        }else{
        return this.request(`/products?country_iso=${country}&category_id=${category_id}&page=${page}&per_page=${pageSize}`)
    }
    }

}

export default new ProductsService();