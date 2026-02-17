import { View, Text, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';
import MealItem from '../component/MealItem';
import { useEffect } from 'react';

export default function MealsOverviewScreen({ route ,navigation}) {
  const categoryId = route?.params?.categoryId ?? '';

  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryId)

  );
  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title ?? '';
    if (categoryTitle) {
      navigation.setOptions({
        title: categoryTitle
      });
    }
  }, [categoryId,navigation]);
  function renderMealItem(itemData) {
    const { id, title, imageUrl, duration, complexity, affordability } = itemData.item;
    return (
      <MealItem title={title} affordability={affordability} complexity={complexity} duration={duration} imageUrl={imageUrl} id={id}  />
    )
  }



  return <View>
    <FlatList
      data={displayedMeals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />

    
  </View>
}