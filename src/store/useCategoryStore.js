import {create} from "zustand";
import {CategoryService} from '../services/index.js'


const useCategoryStore = (set, get) => ({
    isLoad: false, categories: [],

    async loadCategories() {
        set({
            isLoad: true
        })

        const response = await CategoryService.Categories();


        set({
            isLoad: false,
        })

        if (response.error) {
            return console.log("Error response")
        }

        set({
            categories: response.categories
        })


    }
})

export default create(useCategoryStore)