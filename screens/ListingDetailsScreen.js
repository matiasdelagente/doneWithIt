import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = ({ navigation, route: { params } }) => {
  return (
    <View>
      <Image source={params.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.price}>${params.subTitle}</Text>
        <View style={styles.userContainer}>
          <ListItem
            title="Mati Benincasa"
            subtitle="5 listings"
            image={require("../assets/benincasa.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
