import React from "react";
import FormInput from "./formInput";
import ItemList from "./itemList";

const Form = ({ form, setForm }) => {
  return <ItemList form={form} setForm={setForm} />;
};

export default Form;
