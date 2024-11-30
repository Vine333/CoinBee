import {create} from "zustand";
import {ProductService} from '/src/services/index.js'

const useProductStore = (set, get)=>({
    isLoadingProducts: false,
    product:[],
    currentPage: 1,
    isAtEnd: false,

    async loadProducts(country,category_id){

        const isAtEnd = get().isAtEnd
        const currentPage = get().currentPage



        if(isAtEnd){
            console.log("errrororr")
            return;
        }

        set({
            isLoadingProducts: true,
        })

        console.log("Loading products...")


        const response = await ProductService.Products(country,category_id);

        console.log('responseRes',response)

        set({
            isLoadingProducts: false
        });

        if(response.error){
            return console.log('Error response')
        }


        if (!response.data|| response.data.length === 0) {
            set({
                isAtEnd: true,
            });
            console.log("No more data available")

        }
        console.log("Updating products...");
        set({
            currentPage: currentPage + 1,
            product:[...get().product,...response.products]
        })
        console.log("Products updated successfully")
    },
    async resetProducts() {
        set({
            isAtEnd: false,
            currentPage: 1,
            product: []
        });
    },
})
export default create(useProductStore)