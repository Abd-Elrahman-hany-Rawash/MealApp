import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useEffect } from 'react';
import MealsList from '../component/MealList/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route?.params?.categoryId ?? '';

  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryId)
  );

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  )?.title ?? '';

  useEffect(() => {
    if (categoryTitle) {
      navigation.setOptions({ title: categoryTitle });
    }
  }, [categoryId, navigation, categoryTitle]);

  

  return (
    <MealsList displayedMeals={displayedMeals} />
  );
}

