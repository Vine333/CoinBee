import {create} from "zustand";
import {CategoryService} from '../services/index.js'


const useCategorieStore = (set, get) => ({
    isLoad: false, categories: [],

    async loadCategories() {
        set({
            isLoad: true
        })
        console.log('countri1')
        const response = await CategoryService.Categories();
        console.log('request', response);
        console.log('countri2')
        set({
            isLoad: false,
        })
        console.log('countri3')
        if (response.error) {
            return console.log("Error response")
        }
        console.log('countri4')
        set({
            categories: response.categories
        })


    }
})

export default create(useCategorieStore)