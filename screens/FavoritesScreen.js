import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Typography } from '../constants/theme';
import { FavoritesContext } from '../store/context/favorites-content';
import { useContext } from 'react';
import MealsList from '../component/MealList/MealsList';
import { MEALS } from '../data/dummy-data';
export default function FavoritesScreen() {
  const favoritesContext = useContext(FavoritesContext);
  const { favorites } = favoritesContext;
  const displayedMeals = MEALS.filter((meal) => favorites.includes(meal.id));
  return (
    <View style={styles.container}>
      <MealsList displayedMeals={displayedMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xxxl,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.primaryLight + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    ...Typography.h3,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 24,
  },
});
