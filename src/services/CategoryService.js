import Service from "./Service.js";


class CategoryService extends Service {

    async Categories() {
        return this.request('/categories')
    }
}

export default new CategoryService();