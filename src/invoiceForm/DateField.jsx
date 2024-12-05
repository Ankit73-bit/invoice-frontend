import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

function DateField({
  name,
  label,
  register,
  validation,
  error,
  defaultValue,
  readOnly = false,
}) {
  return (
    <FormRow label={label} error={error}>
      <Input
        type="date"
        id={name}
        {...register(name, validation)}
        defaultValue={defaultValue}
        readOnly={readOnly}
      />
    </FormRow>
  );
}

export default DateField;
