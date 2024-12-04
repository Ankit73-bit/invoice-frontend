import { useCreateAddress } from "../features/createInvoice/useCreateAddress";
import { createConsigneeAddress as createConsigneeAddressAPI } from "../services/apiaddress";
import AddNewAddress from "./AddNewAddress";

function AddConsigneeAddress({ onCloseModal }) {
  const { createEntity: createConsigneeAddress, isCreating } = useCreateAddress(
    createConsigneeAddressAPI,
    "consignees"
  );

  const consigneeFields = [
    {
      name: "clientConsigneeName",
      label: "Client Consignee Name",
      validation: { required: "This field is required" },
    },
    {
      name: "company",
      label: "Company",
      type: "select",
      options: [
        { value: "Select Company", label: "Select Company" },
        { value: "Paras Solutions", label: "Paras Solutions" },
        { value: "Paras Print", label: "Paras Print" },
      ],
      validation: { required: "Please select a company" },
    },
    { name: "consigneeName", label: "Consignee Name" },
    { name: "address.add1", label: "Address Line 1" },
    { name: "address.add2", label: "Address Line 2" },
    { name: "address.add3", label: "Address Line 3" },
    { name: "address.city", label: "City" },
    {
      name: "contact",
      label: "Contact",
    },
    {
      name: "email",
      label: "Email",
      validation: {
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email address",
        },
      },
    },
  ];

  return (
    <AddNewAddress
      entityName="Consignee"
      fields={consigneeFields}
      onCloseModal={onCloseModal}
      onSubmit={(data) => createConsigneeAddress(data)}
    />
  );
}

export default AddConsigneeAddress;
