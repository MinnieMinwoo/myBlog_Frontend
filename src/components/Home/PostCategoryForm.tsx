import React from "react";
import { Form } from "react-bootstrap";

export const CategoryNameForm = (
  categoryRef: React.RefObject<HTMLInputElement>,
  defaultValue = ""
) => {
  return (
    <Form>
      <Form.Label>Write down the category name.</Form.Label>
      <Form.Control
        type="text"
        placeholder="enter category name"
        defaultValue={defaultValue}
        ref={categoryRef}
        required
      />
    </Form>
  );
};
