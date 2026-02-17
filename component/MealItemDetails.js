import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MealDetailHeader from './MealDetailHeader';
import MealDetailBody from './MealDetailBody';

export default function MealItemDetails({
  title,
  affordability,
  complexity,
  duration,
  imageUrl,
  steps = [],
  ingredients = [],
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.mealItem}>
        <MealDetailHeader
          title={title}
          imageUrl={imageUrl}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          isGlutenFree={isGlutenFree}
          isVegan={isVegan}
          isVegetarian={isVegetarian}
          isLactoseFree={isLactoseFree}
        />
        <MealDetailBody ingredients={ingredients} steps={steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  mealItem: {
    margin: 16,
    marginBottom: 32,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
});
