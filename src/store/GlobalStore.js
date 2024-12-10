import {create} from 'zustand'

const GlobalStore=(set)=>({
    currentPage:1,
    selectedCountry: [],
    selectedCategory: [],

    setSelectedCountry: (country) => set({ selectedCountry: country }),
    setSelectedCategory: (category_id) => set({ selectedCategory: category_id }),
    setCurrentPage: (page) => set({ currentPage: page }),
    setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
});
export default create(GlobalStore)