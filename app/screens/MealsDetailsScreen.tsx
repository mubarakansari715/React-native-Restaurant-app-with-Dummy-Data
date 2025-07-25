import { MEALS } from "@/data/dataService";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeToFavorite } from "../redux/action";

export default function MealsDetailsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const favoriteItemList = useSelector((state) => state.favoriteReducer);

  const data = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === data.id);

  const [markAsFavorite, setMarkAsFavorite] = useState(false);
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const markAsFavoriteHandler = (item) => {
    if (markAsFavorite) {
      setMarkAsFavorite(false);
      showToast("Mark As Remove Favorite");
      dispatch(removeToFavorite(item));
    } else {
      setMarkAsFavorite(true);
      showToast("Mark As Favorite");
      dispatch(addToFavorite(item));
    }
  };

  useEffect(() => {
    const result = favoriteItemList.filter(
      (item) => item.id === selectedMeal?.id
    );
    if (result.length) {
      setMarkAsFavorite(true);
    } else {
      setMarkAsFavorite(false);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => {
        return (
          <Pressable onPress={() => markAsFavoriteHandler(selectedMeal)}>
            {markAsFavorite ? (
              <AntDesign name="star" size={24} color="white" />
            ) : (
              <AntDesign name="staro" size={24} color="white" />
            )}
          </Pressable>
        );
      },
    });
  }, [markAsFavorite]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: selectedMeal?.imageUrl }}
            style={styles.imageStyle}
          />
        </View>

        <View style={styles.rowBox}>
          <Text style={styles.rowTitle}>{selectedMeal?.title}</Text>
          <View style={styles.rowItemStyle}>
            <Text style={styles.rowItemText}>{selectedMeal?.duration}m</Text>
            <Text style={styles.rowItemText}>
              {" "}
              {selectedMeal?.complexity.toUpperCase()}{" "}
            </Text>
            <Text style={styles.rowItemText}>
              {selectedMeal?.affordability.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* ingredients */}
        <View style={styles.rowBox}>
          <Text style={styles.textTitleStyle}>Ingredients: </Text>
          {selectedMeal?.ingredients?.map((item, index) => (
            <View key={index} style={styles.horizontalViewStyle}>
              <Text style={styles.textContent}>{item}</Text>
            </View>
          ))}
        </View>

        {/* steps */}
        <View style={styles.rowBox}>
          <Text style={styles.textTitleStyle}>Steps: </Text>
          {selectedMeal?.steps?.map((item, index) => (
            <View key={index} style={styles.horizontalViewStyle}>
              <Text style={styles.textContent}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 80 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    paddingHorizontal: 10,
  },
  imageStyle: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  rowBox: {
    marginTop: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rowItemStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  rowItemText: {
    fontSize: 14,
    fontStyle: "italic",
  },
  horizontalViewStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    paddingStart: 20,
  },
  textTitleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textContent: {
    fontSize: 14,
  },
});
