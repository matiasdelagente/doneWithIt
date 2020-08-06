import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../components/navigation/routes";

const listings = [
  {
    id: 1,
    title: "Jacket",
    subTitle: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    subTitle: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.subTitle}
            image={item.image}
            onPress={() => {
              navigation.navigate(routes.LISTING_DETAILS, item);
            }}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
