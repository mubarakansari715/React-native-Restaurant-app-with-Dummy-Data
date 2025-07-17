import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoryScreen from "./screens/categoryscreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import MealsOverview from "./screens/MealsOverview";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#3f2f25" },
        drawerActiveBackgroundColor: "#e4baa1",
        drawerActiveTintColor: "#3f2f25",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoryScreen}
        options={{
          title: "All Food Catagories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="favoritescreen"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Index() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.viewContainer}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{ title: "All Food Catagories", headerShown: false }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen
            name="MealsDetailsScreen"
            component={MealsDetailsScreen}
          />
        </Stack.Navigator>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    // backgroundColor: "#24180f",
  },
});
