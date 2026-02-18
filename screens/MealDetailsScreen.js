import { View, Pressable, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItemDetails from '../component/MealItemDetails';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing } from '../constants/theme';
import { FavoritesContext } from '../store/context/favorites-content';
import { useContext } from 'react';


export default function MealDetailsScreen({ route, navigation }) {

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);


  const favoritesContext = useContext(FavoritesContext);
  const { addFavorite, removeFavorite } = favoritesContext;
  const mealIsFavorite = favoritesContext.favorites.includes(mealId);

  function handleFavorite() {
    if (mealIsFavorite) {
      removeFavorite(mealId);
      console.log('Removed from favorites');
    } else {
      addFavorite(mealId);
      console.log('Added to favorites');
    }
  }

  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <Pressable
          onPress={handleFavorite}
          style={({ pressed }) => [
            styles.favButton,
            pressed && styles.favPressed,
          ]}
          android_ripple={{ color: Colors.overlayLight, borderless: true }}
        >
          <View style={styles.favIconContainer}>
            <Ionicons
              name={mealIsFavorite ? 'heart' : 'heart-outline'}
              size={26}
              color={mealIsFavorite ? Colors.accentRed : Colors.primary}
            />
          </View>
        </Pressable>
      ),
    });
  }, [navigation, selectedMeal, mealIsFavorite]);

  return (
    <View style={styles.container}>
      <MealItemDetails
        title={selectedMeal.title}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        imageUrl={selectedMeal.imageUrl}
        steps={selectedMeal.steps}
        ingredients={selectedMeal.ingredients}
        isGlutenFree={selectedMeal.isGlutenFree}
        isVegan={selectedMeal.isVegan}
        isVegetarian={selectedMeal.isVegetarian}
        isLactoseFree={selectedMeal.isLactoseFree}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  favButton: {
    marginRight: Spacing.md,
  },
  favIconContainer: {
    padding: Spacing.xs,
  },
  favPressed: {
    opacity: 0.7,
  },
});
