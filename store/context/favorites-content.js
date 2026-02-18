import { createContext, useState } from "react";




export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: (favoriteMeal) => {},
    removeFavorite: (id) => {},
    itemIsFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
    const [favoriteMeals, setFavoriteMeals] = useState([]);

    const addFavorite = (favoriteMeal) => {
        setFavoriteMeals((currentFavorites) => [...currentFavorites, favoriteMeal]);
    };

    const removeFavorite = (id) => {
        setFavoriteMeals((currentFavorites) => currentFavorites.filter((mealId) => mealId !== id));
    };

    const itemIsFavorite = (id) => {
        return favoriteMeals.includes(id);
    };

    const value = {
        favorites: favoriteMeals,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        itemIsFavorite: itemIsFavorite,
    };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;