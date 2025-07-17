// ============================================
// OLD WAY - Using dummy-data.js (commented out)
// ============================================
/*
import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  // ... more categories
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    // ... meal properties
  ),
  // ... more meals
];
*/

// ============================================
// NEW WAY - Using server-response.json
// ============================================

// Import the JSON data
import serverResponse from './server-response.json';

// Extract categories and meals from the server response
export const CATEGORIES = serverResponse.data.categories;
export const MEALS = serverResponse.data.meals;

// Export the full server response for advanced usage
export const SERVER_RESPONSE = serverResponse;

// Helper functions for data access
export const getCategories = () => {
  return CATEGORIES;
};

export const getMeals = () => {
  return MEALS;
};

export const getMealsByCategory = (categoryId) => {
  return MEALS.filter(meal => meal.categoryIds.includes(categoryId));
};

export const getMealById = (mealId) => {
  return MEALS.find(meal => meal.id === mealId);
};

export const getCategoryById = (categoryId) => {
  return CATEGORIES.find(category => category.id === categoryId);
};

// Async version for future API integration
export const fetchDataAsync = async () => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // For now, return the local JSON data
    // In the future, this could be replaced with actual API calls
    return {
      categories: CATEGORIES,
      meals: MEALS,
      status: serverResponse.status,
      message: serverResponse.message
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Export server response metadata
export const getServerMetadata = () => {
  return {
    status: serverResponse.status,
    message: serverResponse.message,
    timestamp: serverResponse.timestamp,
    pagination: serverResponse.pagination,
    meta: serverResponse.meta
  };
};
