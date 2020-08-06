import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../components/navigation/routes";
import listingApi from "../api/listings";
import Button from "../components/Button";
import AppText from "../components/Text";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState();

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    setLoading(true);
    const response = await listingApi.getListings();
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't receive the listings</AppText>
          <Button title="Retry" onPress={getListings} />
        </>
      )}
      {loading && <ActivityIndicator visible={true} />}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
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
