import MenuItems from "@/componets/MenuItems";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

export default function FavoriteScreen({ navigation }) {
  const favoriteItems = useSelector((state) => state.favoriteReducer);

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

  return (
    <View style={styles.container}>
      {favoriteItems.length ? (
        <FlatList
          renderItem={reanderMenuItem}
          keyExtractor={(item) => item.id}
          data={favoriteItems}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTextStyle}>Empty</Text>
          <Text style={styles.emptySubTextStyle}>
            You are remove all favorite!
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTextStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  emptySubTextStyle: {
    color: "gray",
    fontStyle: "italic",
    fontSize: 16,
  },
});
