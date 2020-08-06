import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris, onAddImage, onRemoveImage }) => {
  const scrollview = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollview}
        onContentSizeChange={() => scrollview.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((imageUri) => (
            <View style={styles.image} key={imageUri}>
              <ImageInput
                imageUri={imageUri}
                onChangeImage={(uri) => onRemoveImage(uri)}
              />
            </View>
          ))}

          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
