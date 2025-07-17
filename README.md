# 🍽️ Restaurant App

A modern React Native mobile application built with Expo Router for browsing restaurant categories, meals, and managing favorites.

## 📱 Project Overview

This Restaurant App is a comprehensive mobile application that allows users to:
- Browse restaurant meal categories
- View detailed meal information
- Add/remove meals to favorites
- Navigate through different screens seamlessly
- Experience smooth animations and modern UI

## 🚀 Technology Stack

### Core Technologies
- **React Native** (0.79.5) - Cross-platform mobile development
- **Expo** (53.0.17) - Development platform and tools
- **TypeScript** (5.8.3) - Type-safe JavaScript development
- **Expo Router** (5.1.3) - File-based routing system

### Navigation & UI
- **React Navigation** - Native navigation library
  - `@react-navigation/native` (7.1.14)
  - `@react-navigation/native-stack` (7.3.21)
  - `@react-navigation/bottom-tabs` (7.3.10)
  - `@react-navigation/drawer` (7.5.3)
  - `@react-navigation/stack` (7.4.2)

### UI Components & Animations
- **React Native Reanimated** (3.17.4) - Smooth animations
- **React Native Gesture Handler** (2.24.0) - Touch gestures
- **Expo Blur** (14.1.5) - Blur effects
- **Expo Image** (2.3.2) - Optimized image loading
- **React Native Toast Message** (2.3.3) - User notifications

### Development Tools
- **ESLint** (9.25.0) - Code linting
- **Babel** (7.25.2) - JavaScript compiler
- **Metro** - React Native bundler

## 📁 Project Structure

```
RestaurantApp/
├── app/                          # Expo Router app directory
│   ├── _layout.tsx              # Root layout configuration
│   ├── index.tsx                # Main entry point
│   └── screens/                 # Application screens
│       ├── categoryscreen.tsx   # Categories listing screen
│       ├── FavoriteScreen.js    # Favorites management screen
│       ├── MealsDetailsScreen.tsx # Meal details screen
│       └── MealsOverview.tsx   # Meals listing screen
├── assets/                      # Static assets
│   ├── fonts/                   # Custom fonts
│   └── images/                  # App icons and images
├── componets/                   # Reusable UI components
│   ├── categoryItem.tsx         # Category item component
│   └── MenuItems.js            # Menu items component
├── data/                       # Data management
│   ├── dataService.js          # Data service layer
│   ├── dummy-data.js           # Mock data
│   └── server-response.json    # API response structure
├── models/                     # Data models
│   ├── category.js             # Category data model
│   └── meal.js                 # Meal data model
└── utils/                      # Utility functions
```

## 🎯 Key Features

### 1. **Category Browsing**
- Display restaurant meal categories
- Smooth navigation between categories
- Responsive grid layout

### 2. **Meal Management**
- Detailed meal information display
- High-quality meal images
- Nutritional information
- Preparation instructions

### 3. **Favorites System**
- Add/remove meals to favorites
- Persistent favorites storage
- Quick access to favorite meals

### 4. **Modern Navigation**
- Stack-based navigation
- Smooth transitions between screens
- Intuitive user experience

### 5. **Performance Optimizations**
- Image optimization with Expo Image
- Smooth animations with Reanimated
- Efficient data loading

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RestaurantApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint for code quality

## 📱 Platform Support

### Mobile Platforms
- **iOS** - Full support with tablet compatibility
- **Android** - Full support with adaptive icons
- **Web** - Static web output support

### Device Features
- Portrait orientation
- Edge-to-edge display support
- Haptic feedback
- Splash screen with custom branding

## 🎨 UI/UX Features

### Design System
- **Color Scheme**: Dark theme with #24180f background
- **Typography**: Custom fonts (SpaceMono-Regular)
- **Icons**: Expo Vector Icons integration
- **Animations**: Smooth transitions and micro-interactions

### User Experience
- **Intuitive Navigation**: File-based routing with Expo Router
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Built-in accessibility features
- **Performance**: Optimized for smooth 60fps animations

## 🔧 Advanced Features

### 1. **TypeScript Integration**
- Full type safety across the application
- Enhanced developer experience
- Better code maintainability

### 2. **State Management**
- Local state management with React hooks
- Persistent storage for favorites
- Efficient data flow

### 3. **Image Optimization**
- Expo Image for optimized image loading
- Blur effects for enhanced visual appeal
- Responsive image handling

### 4. **Gesture Handling**
- Touch gesture support
- Swipe navigation
- Interactive components

## 📊 Data Architecture

### Models
- **Category Model**: Defines meal categories structure
- **Meal Model**: Defines individual meal data structure

### Services
- **Data Service**: Handles data fetching and management
- **Mock Data**: Comprehensive dummy data for development

## 🚀 Deployment

### Expo Build
```bash
# Build for Android
expo build:android

# Build for iOS
expo build:ios

# Build for web
expo build:web
```

### App Store Deployment
1. Configure app.json with proper metadata
2. Build production version
3. Submit to respective app stores

## 🔍 Code Quality

### Linting
- ESLint configuration for code quality
- TypeScript strict mode enabled
- Consistent code formatting

### Best Practices
- Component-based architecture
- Reusable UI components
- Proper TypeScript typing
- Performance optimization

## 📚 Learning Resources

### React Native Concepts Covered
- **Navigation**: Stack, Tab, and Drawer navigation
- **State Management**: Local state with hooks
- **Animations**: Reanimated library usage
- **Image Handling**: Expo Image optimization
- **TypeScript**: Type-safe development

### Advanced Topics
- **File-based Routing**: Expo Router implementation
- **Gesture Handling**: Touch interactions
- **Performance**: Optimization techniques
- **Platform APIs**: Native functionality integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the Expo documentation
- Review React Native guides
- Explore the codebase structure

---

**Built with ❤️ using React Native and Expo**
<img width="1152" height="974" alt="resto" src="https://github.com/user-attachments/assets/9eb1ef82-8067-45a6-b38e-4e9ba5c25420" />

