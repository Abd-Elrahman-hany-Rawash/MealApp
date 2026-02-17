import { View,  Pressable } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItemDetails from '../component/MealItemDetails';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
export default function MealDetailsScreen({ route ,navigation}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);


  function handleFavorite(mealId) {
    console.log('Favorite pressed', mealId);
  }
  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight:()=> <Pressable onPress={()=>{handleFavorite(selectedMeal.id)}}><Ionicons name="heart" size={24} color="white" />
        </Pressable>
    });
  }, [navigation, selectedMeal,handleFavorite]);
  return (
    <View style={{ flex: 1 }}>
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