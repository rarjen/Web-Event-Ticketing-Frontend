import React from "react";
import { Form } from "react-bootstrap";
import PButton from "../../components/Button";
import PTextInputWithLabel from "../../components/TextInputWithLabel";

export default function CategoriesForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <PTextInputWithLabel
        placeholder={"Masukkan nama kategori"}
        label={"Nama Kategori"}
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <PButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Simpan"}
      </PButton>
    </Form>
  );
}
