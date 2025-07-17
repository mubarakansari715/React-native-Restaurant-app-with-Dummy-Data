import CategoryItem from "@/componets/categoryItem";
import { CATEGORIES } from "@/data/dataService";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
const CategoryScreen = ({ navigation }) => {
  const onItemClick = (id) => {
    navigation.navigate("MealsOverview", { id: id });
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryItem item={item} onPress={() => onItemClick(item.id)} />
        )}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
});
