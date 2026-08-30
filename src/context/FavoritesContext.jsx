import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("stagePoaFavorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

 
  useEffect(() => {
    localStorage.setItem("stagePoaFavorites", JSON.stringify(favorites));
  }, [favorites]);

  
  const addFavorite = (stage) => {
    setFavorites((currentFavorites) => {
      const alreadySaved = currentFavorites.some(
        (favorite) => favorite.id === stage.id
      );

      if (alreadySaved) {
        return currentFavorites;
      }

      return [...currentFavorites, stage];
    });
  };

  
  const removeFavorite = (stageId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favorite) => favorite.id !== stageId)
    );
  };

  
  const isFavorite = (stageId) => {
    return favorites.some((favorite) => favorite.id === stageId);
  };


  const toggleFavorite = (stage) => {
    if (isFavorite(stage.id)) {
      removeFavorite(stage.id);
    } else {
      addFavorite(stage);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}