import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { View, Text ,Image, StyleSheet} from 'react-native';

function MealItem({ title, imageUrl, duration, complexity, affordability, id }) {
    const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
    <Pressable 
    style={({pressed})=>(pressed?styles.buttonPressed :null)}
    
    onPress={() => navigation.navigate('MealDetails', { mealId: id })}>
    <View style={styles.innerContainer}>
      <View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
    </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor:'white'
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },innerContainer:{
    borderRadiuce:8,
    overflow:'hidden'

  },buttonPressed:{
    opacity:.5,
  }
});