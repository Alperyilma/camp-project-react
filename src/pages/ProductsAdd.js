import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import CodingIoTextInput from "../utilities/customFormControls/CodingIoTextInput";

export default function ProductsAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const shema = Yup.object({
    productName: Yup.string().required("You must add product name"),
    unitPrice: Yup.number().required("You must add product price"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={shema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <CodingIoTextInput name="productName" placeholder="Product Name" />
          <CodingIoTextInput name="unitPrice" placeholder="Product Price" />

          <Button color="green" type="submit">
            Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
