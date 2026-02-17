import { View, FlatList , StyleSheet} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../component/CategoryGridTile';






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
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES ?? []}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});