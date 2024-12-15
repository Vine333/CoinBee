import {create} from 'zustand'

const useGlobalStore = (set) => ({
    currentPage: 1,
    selectedCountry: [],
    selectedCategory: [],
language:localStorage.getItem("language") || 'ru',


    setLanguage: (language) => {
        localStorage.setItem('language', language);
        set({ language });
    },
    setSelectedCountry: (country) =>
        set({
            selectedCountry: country,
        }),
    setSelectedCategory: (category_id) =>
        set({
            selectedCategory: category_id,
        }),
    setCurrentPage: (page) =>
        set({
            currentPage: page,
        }),
    setIsModalOpen: (isOpen) =>
        set({
            isModalOpen: isOpen,
        }),
});
export default create(useGlobalStore)