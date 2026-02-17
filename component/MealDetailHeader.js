import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Typography } from '../constants/theme';

export default function MealDetailHeader({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}) {
  const dietBadges = [
    { show: isGlutenFree, label: 'Gluten Free', icon: 'leaf' },
    { show: isVegan, label: 'Vegan', icon: 'nutrition' },
    { show: isVegetarian, label: 'Vegetarian', icon: 'leaf-outline' },
    { show: isLactoseFree, label: 'Lactose Free', icon: 'water' },
  ].filter((badge) => badge.show);

  return (
    <View style={styles.header}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.imageOverlay} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Ionicons name="time" size={20} color={Colors.primary} />
            <Text style={styles.statLabel}>{duration} min</Text>
          </View>
          
          <View style={styles.statItem}>
            <Ionicons name="speedometer" size={20} color={Colors.secondary} />
            <Text style={styles.statLabel}>{complexity}</Text>
          </View>
          
          <View style={styles.statItem}>
            <Ionicons name="cash" size={20} color={Colors.accent} />
            <Text style={styles.statLabel}>{affordability}</Text>
          </View>
        </View>

        {dietBadges.length > 0 && (
          <View style={styles.badgesContainer}>
            {dietBadges.map((badge, index) => (
              <View key={index} style={styles.badge}>
                <Ionicons name={badge.icon} size={14} color={Colors.surface} />
                <Text style={styles.badgeText}>{badge.label}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.surface,
  },
  imageContainer: {
    width: '100%',
    height: 280,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.borderLight,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.overlayLight,
  },
  contentContainer: {
    padding: Spacing.xl,
  },
  title: {
    ...Typography.h3,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.lg,
  },
  statItem: {
    alignItems: 'center',
    gap: Spacing.xs,
  },
  statLabel: {
    ...Typography.caption,
    textTransform: 'capitalize',
    color: Colors.textSecondary,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    justifyContent: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    backgroundColor: Colors.accentGreen,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.full,
  },
  badgeText: {
    ...Typography.badge,
    color: Colors.surface,
    fontSize: 11,
  },
});
