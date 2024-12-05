import Company from "../../invoiceForm/Company";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useCreateInvoice } from "./useCreateInvoice";
import BankDetails from "../../invoiceForm/BankDetails";
import { useEffect } from "react";
import AddressSelector from "../../invoiceForm/AddressSelector";
import {
  getAllClientAddress,
  getAllConsigneeAddress,
} from "../../services/apiAddress";
import InvoiceViewer from "../../invoice/InvoiceViewer";
import InvoiceDownload from "../../pages/InvoiceDownload";
import InvoiceNo from "../../invoiceForm/InvoiceNo";
import InvoiceDate from "../../invoiceForm/InvoiceDate";
import { useInvoiceData } from "./useInvoiceContext";
import { COMPANY_DETAILS } from "../../utils/constant";
import ReferenceNo from "../../invoiceForm/ReferenceNo";

function InvoiceForm() {
  const defaultCompany = COMPANY_DETAILS.find(
    (company) => company.clientCompanyName === "Paras Print"
  );
  const {
    invoiceData,
    setInvoiceData,
    invoiceNo,
    setInvoiceNo,
    selectedCompany,
    setSelectedCompany,
    selectedBank,
    setSelectedBank,
    selectedClient,
    setSelectedClient,
    selectedConsignee,
    setSelectedConsignee,
  } = useInvoiceData();

  const { handleSubmit, register, setValue, watch, formState } = useForm();
  const { createInvoice, isCreating } = useCreateInvoice();
  const { errors } = formState;

  useEffect(() => {
    setValue("company", defaultCompany?.clientCompanyName || "");
  }, [defaultCompany, setValue]);

  const handleFormSubmit = (data) => {
    const formData = {
      ...data,
      from: selectedCompany?.clientCompanyName,
      to: selectedClient?.clientCompanyName,
      consignee: selectedConsignee?.clientCompanyName,
    };
    setInvoiceData(formData);
    console.log("Form submitted with data:", formData);
    // createInvoice(formData);
  };

  const invoiceDate = watch("date"); // Use `watch` to track the date field
  const referenceNo = watch("referenceNo");
  const referenceDate = watch("referenceDate");

  return (
    <>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InvoiceNo
          selectedCompany={selectedCompany}
          invoiceNo={invoiceNo}
          setInvoiceNo={setInvoiceNo}
        />
        <InvoiceDate register={register} errors={errors} />
        <ReferenceNo register={register} errors={errors} />
        <Company
          register={register}
          setValue={setValue}
          selectedCompany={selectedCompany}
          onCompanyChange={setSelectedCompany}
        />
        <AddressSelector
          register={register}
          setValue={setValue}
          selectedEntity={selectedClient}
          setSelectedEntity={setSelectedClient}
          selectedCompany={selectedCompany}
          fetchAddresses={getAllClientAddress}
          label="Client"
          entity="client"
        />
        <AddressSelector
          register={register}
          setValue={setValue}
          selectedEntity={selectedConsignee}
          setSelectedEntity={setSelectedConsignee}
          selectedCompany={selectedCompany}
          fetchAddresses={getAllConsigneeAddress}
          label="Consignee"
          entity="consignee"
        />
        <BankDetails
          register={register}
          setValue={setValue}
          selectedCompany={selectedCompany}
          selectedBank={selectedBank}
          setSelectedBank={setSelectedBank}
        />
        <FormRow>
          <Button type="submit">
            {isCreating ? "Creating Invoice" : "Create Invoice"}
          </Button>
        </FormRow>
      </Form>
      <InvoiceViewer
        invoiceNo={invoiceNo}
        invoiceDate={invoiceDate}
        referenceNo={referenceNo}
        referenceDate={referenceDate}
        selectedCompany={selectedCompany}
        selectedClient={selectedClient}
        selectedConsignee={selectedConsignee}
        selectedBank={selectedBank}
      />
      {invoiceData && (
        <>
          <InvoiceDownload invoiceData={invoiceData} />
        </>
      )}
    </>
  );
}

export default InvoiceForm;
