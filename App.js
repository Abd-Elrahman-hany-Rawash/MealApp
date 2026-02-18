import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Colors } from './constants/theme';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-content';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: { 
    backgroundColor: Colors.surface,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  headerTintColor: Colors.primary,
  contentStyle: { backgroundColor: Colors.background },
  headerTitleAlign: 'center',
  headerTitleStyle: { 
    fontWeight: '700', 
    fontSize: 18,
    color: Colors.text,
  },
  drawerActiveBackgroundColor: Colors.primaryLight + '20', // 20 = 12.5% opacity
  drawerActiveTintColor: Colors.primary,
  drawerInactiveTintColor: Colors.textSecondary,
  drawerLabelStyle: { 
    fontSize: 16, 
    fontWeight: '600',
  },
  drawerStyle: { 
    backgroundColor: Colors.surface,
    width: 280,
  },
  drawerItemStyle: { 
    borderRadius: 12,
    marginVertical: 4,
  },
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...screenOptions,
        drawerContentContainerStyle: { paddingTop: 40 },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Meals Categories"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{ headerBackTitle: 'Back' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
