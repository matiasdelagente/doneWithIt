import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  name,
  width,
  PickerItemComponent,
  numberOfColumns,
  ...otherProps
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  return (
    <>
      <Picker
        {...otherProps}
        onSelectedItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
