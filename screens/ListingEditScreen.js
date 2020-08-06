import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/FormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const items = [
  { label: "Movie & Music", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Cameras", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Furniture", value: 3, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = ({}) => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={({ title, price, category, description }) => console.log(location)}
      >
        <FormImagePicker name="images" />
        <FormField
          name="title"
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormField
          name="price"
          placeholder="Price"
          maxLenght={8}
          keyboardType="numeric"
          width={120}
        />
        <AppFormPicker
          name="category"
          items={items}
          placeholder="Categories"
          width={"50%"}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField name="description" placeholder="Description" multiline numberOfLines={3} />
        <SubmitButton title="POST" />
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
