import { View, FlatList, StyleSheet, Text } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../component/MealItem';
import { useEffect } from 'react';
import { Colors, Spacing, Typography } from '../constants/theme';

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

  function renderMealItem(itemData) {
    const { id, title, imageUrl, duration, complexity, affordability } =
      itemData.item;
    return (
      <MealItem
        title={title}
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        imageUrl={imageUrl}
        id={id}
      />
    );
  }

  return (
    <View style={styles.container}>
      {displayedMeals.length > 0 ? (
        <FlatList
          data={displayedMeals}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No meals found</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingVertical: Spacing.lg,
    paddingBottom: Spacing.xxxl,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...Typography.subtitle,
    color: Colors.textMuted,
  },
});
