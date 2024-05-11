import { useState } from "react";
import { FormikContextType, FormikValues, useFormikContext } from "formik";

import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface FormFieldProps extends AppTextInputProps {
  name: string;
  number?: boolean;
  label: string;
  my0?: boolean;
}

export default function FormPasswordField({
  name,
  number,
  my0,
  label,
  ...otherProps
}: FormFieldProps) {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext<FormikContextType<FormikValues>>();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => {
          if (number && Number.isNaN(parseInt(text, 10))) {
            setFieldValue(name, 0);
            return;
          }
          setFieldValue(name, number ? parseInt(text, 10) : text);
        }}
        value={values[name] === 0 ? "" : values[name]?.toString()}
        my0={my0}
        label={label}
        passwordField
        secureTextEntry={secureTextEntry}
        {...otherProps}
        setSecureTextEntry={setSecureTextEntry}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
