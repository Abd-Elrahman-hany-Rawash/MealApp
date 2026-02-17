import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../component/CategoryGridTile';
import { Colors, Spacing, Typography } from '../constants/theme';

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    const { id, title, color } = itemData.item;
    return (
      <CategoryGridTile
        title={title}
        color={color}
        onPress={() => navigation.navigate('Meals Overview', { categoryId: id })}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Discover Delicious</Text>
        <Text style={styles.subtitle}>Choose your favorite category</Text>
      </View>
      <FlatList
        data={CATEGORIES ?? []}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xxxl,
    paddingBottom: Spacing.lg,
  },
  greeting: {
    ...Typography.h2,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    ...Typography.subtitle,
    color: Colors.textSecondary,
  },
  listContent: {
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xxxl,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
