import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size = 40, backgroundColor = "#000", iconColor = "#fff" }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons size={size * 0.5} name={name} color={iconColor} />
    </View>
  );
};

export default Icon;
