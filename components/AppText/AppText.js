import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const AppText = (props) => {
  return <Text style={[styles.screen, props.style]}>{props.children}</Text>;
};

export default AppText;
