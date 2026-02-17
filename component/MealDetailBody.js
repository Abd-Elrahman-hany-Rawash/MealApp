import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MealDetailBody({ ingredients = [], steps = [] }) {
  return (
    <View style={styles.body}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.listBlock}>
          {ingredients.map((item, index) => (
            <Text key={index} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Steps</Text>
        <View style={styles.listBlock}>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <Text style={styles.stepNumber}>{index + 1}.</Text>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 24,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#2e7d32',
    paddingBottom: 6,
  },
  listBlock: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 14,
  },
  listItem: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    marginBottom: 6,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  stepNumber: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2e7d32',
    marginRight: 8,
    minWidth: 24,
  },
  stepText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
});
