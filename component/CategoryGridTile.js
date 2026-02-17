import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Shadows } from '../constants/theme';

const categoryIcons = {
  Italian: 'pizza-outline',
  'Quick & Easy': 'flash-outline',
  Hamburgers: 'restaurant-outline',
  German: 'beer-outline',
  'Light & Lovely': 'leaf-outline',
  Exotic: 'globe-outline',
  Breakfast: 'sunny-outline',
  Asian: 'restaurant-outline',
  French: 'wine-outline',
  Summer: 'ice-cream-outline',
};

function CategoryGridTile({ title = '', color = '#ccc', onPress }) {
  const iconName = categoryIcons[title] || 'restaurant-outline';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: color },
        pressed && styles.pressed,
      ]}
      android_ripple={{ color: Colors.shimmer }}
    >
      <View style={styles.gradient} />
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={36} color={Colors.textOnPrimary} />
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 180,
    margin: Spacing.sm,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    ...Shadows.lg,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.overlay,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.textOnPrimary,
    textAlign: 'center',
    letterSpacing: 0.3,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
