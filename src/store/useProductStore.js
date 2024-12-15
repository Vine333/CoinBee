import {create} from "zustand";
import {ProductService} from '/src/services/index.js'

const useProductStore = (set, get)=>({
    isLoadingProducts: false,
    product:[],
    isAtEnd: false,
   totalProducts:0,
   pageSize:[],

    async loadProducts(country,category_id,page,pageSize){

        const isAtEnd = get().isAtEnd




        if(isAtEnd){

            return;
        }

        set({
            isLoadingProducts: true,
        })




        const response = await ProductService.Products(country,category_id,page,pageSize);



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


        }

        set({
            isLoadingProducts: false,
            currentPage: response.current_page,
            totalProducts: response.total,
            product: [...get().product, ...response.products],
            pageSize:response.per_page,
        })

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