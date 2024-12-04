import Company from "../../invoiceForm/Company";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useCreateInvoice } from "./useCreateInvoice";
import BankDetails from "../../invoiceForm/BankDetails";
import { useEffect, useState } from "react";
import { COMPANY_DETAILS } from "../../utils/constant";
import ClientAddress from "../../invoiceForm/ClientAddress";

function InvoiceForm() {
  // Initialize the default company ("Paras Print") as selectedCompany
  const defaultCompany = COMPANY_DETAILS.find(
    (company) => company.clientCompanyName === "Paras Print"
  );
  const [selectedCompany, setSelectedCompany] = useState(defaultCompany);
  const [selectedClient, setSelectedClient] = useState(null); // Track selected client

  const { handleSubmit, register, setValue, formState } = useForm();
  const { errors } = formState;

  useEffect(() => {
    // Set the default value for the company field in React Hook Form
    setValue("company", defaultCompany?.clientCompanyName || "");
  }, [defaultCompany, setValue]);

  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
  };

  // Use the custom hook
  const { createInvoice, isCreating } = useCreateInvoice();

  function handleFormSubmit(data) {
    // Add the selected company's name under the "to" property
    const formData = {
      ...data,
      from: selectedCompany?.clientCompanyName,
      to: selectedClient?.clientCompanyName,
    };

    // Log the form data to ensure correctness
    console.log("Form submitted with data:", formData);

    // Call the custom hook's mutate function
    // createInvoice(formData);
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Company
        register={register}
        setValue={setValue}
        selectedCompany={selectedCompany}
        onCompanyChange={handleCompanyChange}
      />
      <ClientAddress
        register={register}
        setValue={setValue}
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
        selectedCompany={selectedCompany} // Pass selected company
      />
      <BankDetails
        register={register}
        setValue={setValue}
        selectedCompany={selectedCompany}
      />
      <FormRow>
        <Button type="submit" disabled={isCreating}>
          {isCreating ? "Creating..." : "Create Invoice"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default InvoiceForm;
