# MealApp

A React Native (Expo) app to browse meal categories, view meal details (ingredients, steps, dietary info), and save favorites. Built with React Navigation (drawer + stack) and React Context for state.

---

## Features

- **Categories** — Grid of meal categories (Italian, Quick & Easy, Hamburgers, German, etc.) with colored tiles.
- **Meals overview** — List of meals in a selected category with image, title, duration, complexity, and affordability.
- **Meal details** — Full recipe: ingredients, steps, duration, and dietary tags (gluten-free, vegan, vegetarian, lactose-free).
- **Favorites** — Add or remove meals from favorites via the heart icon on the meal detail screen; favorites are shown in the Favorites drawer screen.
- **Navigation** — Drawer (Categories + Favorites) and stack (overview → meal details) with a consistent theme.

---

## Tech stack

- **React Native** with **Expo** (~54)
- **React Navigation** — `@react-navigation/native`, `native-stack`, `drawer`
- **React Context** — Favorites state in `store/context/favorites-content.js`
- **Ionicons** — `@expo/vector-icons` for UI icons
- **Dummy data** — In-memory `MEALS` and `CATEGORIES` in `data/dummy-data.js`

---

## Project structure

```
MealApp/
├── App.js                    # Root: FavoritesContext, NavigationContainer, Stack + Drawer
├── package.json
├── constants/
│   └── theme.js              # Colors, Spacing, Typography, BorderRadius, Shadows
├── data/
│   └── dummy-data.js         # CATEGORIES, MEALS (ingredients, steps, dietary flags)
├── screens/
│   ├── CategoriesScreen.js   # Category grid
│   ├── MealsOverviewScreen.js# Meals list by category
│   ├── MealDetailsScreen.js  # Recipe + favorite toggle
│   └── FavoritesScreen.js    # Favorites list (or empty state)
├── component/
│   ├── CategoryGridTile.js   # Category tile
│   ├── MealItemDetails.js   # Meal detail body
│   ├── MealDetailHeader.js
│   ├── MealDetailBody.js
│   └── MealList/
│       ├── MealsList.js      # FlatList of meals
│       └── MealItem.js      # Single meal card
└── store/
    └── context/
        └── favorites-content.js  # FavoritesContext, add/remove favorite
```

---

## Getting started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Expo Go app on your device (for physical device testing)
- Android Studio / Xcode for emulators (optional)

### Install and run

```bash
# Install dependencies
npm install

# Start Expo dev server
npm start
```

Then:

- Press **a** for Android emulator  
- Press **i** for iOS simulator  
- Or scan the QR code with **Expo Go** on your phone  

### Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm start`    | Start Expo dev server    |
| `npm run android` | Start with Android   |
| `npm run ios`  | Start with iOS           |
| `npm run web`  | Start for web            |

---

## Theme and data

- **Theme** — Centralized in `constants/theme.js` (colors, spacing, typography, shadows, border radius). Use these constants in components for a consistent look.
- **Data** — Meals and categories are defined in `data/dummy-data.js`. Each meal has: id, categoryIds, title, imageUrl, duration, complexity, affordability, ingredients, steps, and dietary flags (isGlutenFree, isVegan, isVegetarian, isLactoseFree).

---

## License

Private project. Use as you like.
