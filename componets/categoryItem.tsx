import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.boxInner, { backgroundColor: item.color }]}>
          <Text style={styles.textStyle}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  boxInner: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
