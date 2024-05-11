import { FormikContextType, FormikValues, useFormikContext } from "formik";

import AppNativePicker, { Item } from "../AppNativePicker";
import ErrorMessage from "./ErrorMessage";

export default function FormPicker({
  items,
  name,
  label,
}: {
  items: Item[];
  name: string;
  label: string;
}) {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<FormikContextType<FormikValues>>();
  return (
    <>
      <AppNativePicker
        items={items}
        onItemSelect={(item) => setFieldValue(name, item.value)}
        label={label}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
