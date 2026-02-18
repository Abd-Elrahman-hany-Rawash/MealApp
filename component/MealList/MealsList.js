import { FlatList } from 'react-native';
import MealItem from './MealItem';
import { StyleSheet } from 'react-native';
import { Spacing } from '../../constants/theme';
import { Colors, Typography } from '../../constants/theme';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function MealsList({ displayedMeals }) {
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

  return (<View style={styles.container}>
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
         <View style={styles.emptyState}>
        <View style={styles.iconCircle}>
          <Ionicons name="heart-outline" size={64} color={Colors.primary} />
        </View>
        <Text style={styles.title}>No favorites yet</Text>
        <Text style={styles.subtitle}>
          Start adding your favorite meals{'\n'}by tapping the heart icon
        </Text>
      </View>
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
    }, emptyState: {
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
  