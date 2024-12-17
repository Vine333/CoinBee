import {create} from 'zustand'

const useGlobalStore = (set) => ({
    currentPage: 1, selectedCountry: [], selectedCategory: [], language: localStorage.getItem("language") || "en",


    setLanguage: (lang) => {
        localStorage.setItem("language", lang);
        set({language: lang});
    }, setSelectedCountry: (country) => set({
        selectedCountry: country,
    }), setSelectedCategory: (category_id) => set({
        selectedCategory: category_id,
    }), setCurrentPage: (page) => set({
        currentPage: page,
    }), setIsModalOpen: (isOpen) => set({
        isModalOpen: isOpen,
    }),

});
export default create(useGlobalStore)