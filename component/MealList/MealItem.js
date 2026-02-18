import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, BorderRadius, Shadows, Typography } from '../../constants/theme';

function MealItem({ title, imageUrl, duration, complexity, affordability, id }) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('MealDetails', { mealId: id })}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      android_ripple={{ color: Colors.overlayLight }}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.imageOverlay} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={16} color={Colors.primary} />
            <Text style={styles.infoText}>{duration} min</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.infoItem}>
            <Ionicons name="speedometer-outline" size={16} color={Colors.primary} />
            <Text style={styles.infoText}>{complexity}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.infoItem}>
            <Ionicons name="cash-outline" size={16} color={Colors.primary} />
            <Text style={styles.infoText}>{affordability}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    marginHorizontal: Spacing.lg,
    marginVertical: Spacing.sm,
    overflow: 'hidden',
    ...Shadows.md,
  },
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.98 }],
  },
  imageContainer: {
    width: '100%',
    height: 200,
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
  content: {
    padding: Spacing.lg,
  },
  title: {
    ...Typography.title,
    marginBottom: Spacing.md,
    color: Colors.text,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  infoText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textTransform: 'capitalize',
    fontSize: 12,
  },
  divider: {
    width: 1,
    height: 16,
    backgroundColor: Colors.border,
  },
});
