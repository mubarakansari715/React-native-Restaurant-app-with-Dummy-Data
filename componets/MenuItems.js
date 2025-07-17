import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const MenuItems = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardStyle}>
        <Pressable
          style={({ pressed }) => [
            styles.pressButton,
            pressed ? styles.pressButtonOpacity : null,
          ]}
          onPress={onPress}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.imageStyle} />
          <Text style={styles.textStyle}>{item.title}</Text>

          <View style={styles.rowItemStyle}>
            <Text style={styles.rowItemText}>{item.duration}m</Text>
            <Text style={styles.rowItemText}>
              {" "}{item.complexity.toUpperCase()}{" "}
            </Text>
            <Text style={styles.rowItemText}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    backgroundColor: "#d6d6d6",
    margin: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#ccc",
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    overflow: "hidden",
  },
  imageStyle: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textStyle: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressButton: {
    flex: 1,
  },
  pressButtonOpacity: {
    opacity: 0.75,
  },
  rowItemStyle: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  rowItemText: {
    fontSize: 15,
    paddingBottom: 8,
    textAlign: "center",
  },
});
