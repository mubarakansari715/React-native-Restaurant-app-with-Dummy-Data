import MenuItems from "@/componets/MenuItems";
import { CATEGORIES, MEALS } from "@/data/dataService";
import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const MealsOverview = ({ route, navigation }) => {
  const data = route.params;

  const displayMeal = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(data.id) >= 0
  );

  function reanderMenuItem(itemData) {
    return (
      <MenuItems
        item={itemData.item}
        onPress={() =>
          navigation.navigate("MealsDetailsScreen", {
            id: itemData.item.id,
          })
        }
      />
    );
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === data.id
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [data.id, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={displayMeal}
        renderItem={reanderMenuItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
