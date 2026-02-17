import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing } from '../constants/theme';
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  contentContainer: {
    paddingBottom: Spacing.xxxl,
  },
});
