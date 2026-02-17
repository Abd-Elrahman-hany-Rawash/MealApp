import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
    isGlutenFree && 'Gluten-Free',
    isVegan && 'Vegan',
    isVegetarian && 'Vegetarian',
    isLactoseFree && 'Lactose-Free',
  ].filter(Boolean);

  return (
    <View style={styles.header}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.detailsRow}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>

      {dietBadges.length > 0 && (
        <View style={styles.badgesRow}>
          {dietBadges.map((badge) => (
            <View key={badge} style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    color: '#1a1a1a',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  detailItem: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555',
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  badgesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  badge: {
    backgroundColor: '#2e7d32',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});
