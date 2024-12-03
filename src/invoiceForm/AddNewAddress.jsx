import { useForm, Controller } from "react-hook-form";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Select from "../ui/Select";

function AddNewAddress({ entityName, fields, onCloseModal, onSubmit }) {
  const { control, register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function handleFormSubmit(data) {
    onSubmit(data, {
      onSuccess: () => {
        reset(); // Clear form fields
        onCloseModal?.(); // Close modal if applicable
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2>Add New {entityName}</h2>

      {fields.map((field) => (
        <FormRow
          key={field.name}
          label={field.label}
          error={errors?.[field.name]?.message}
        >
          {field.type === "select" ? (
            <Controller
              name={field.name}
              control={control}
              rules={field.validation}
              render={({ field: { value, onChange } }) => (
                <Select
                  options={field.options}
                  value={value || ""}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
          ) : (
            <Input
              type={field.type || "text"}
              id={field.name}
              {...register(field.name, field.validation)}
              disabled={field.disabled}
            />
          )}
        </FormRow>
      ))}

      <FormRow>
        <Button variation="secondary" type="reset" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button type="submit">Create {entityName}</Button>
      </FormRow>
    </Form>
  );
}

export default AddNewAddress;
