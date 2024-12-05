import TextField from "./TextField";

function ReferenceNo({ register, errors }) {
  return (
    <>
      <TextField
        name="referenceNo"
        label="Reference No"
        register={register}
        error={errors?.date?.message}
      />
    </>
  );
}

export default ReferenceNo;
