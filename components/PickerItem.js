import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    margin: 20,
  },
});

export default PickerItem;
