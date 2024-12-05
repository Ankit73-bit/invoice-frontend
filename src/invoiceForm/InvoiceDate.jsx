import DateField from "./DateField";

function InvoiceDate({ register, errors }) {
  return (
    <>
      <DateField
        name="date"
        label="Invoice Date"
        register={register}
        validation={{ required: "Invoice date is required" }}
        error={errors?.date?.message}
        defaultValue={new Date().toISOString().split("T")[0]} // Default to today
        readOnly={true}
      />
      <DateField
        name="referenceDate"
        label="Refernce Date"
        register={register}
        error={errors?.date?.message}
      />
    </>
  );
}

export default InvoiceDate;
