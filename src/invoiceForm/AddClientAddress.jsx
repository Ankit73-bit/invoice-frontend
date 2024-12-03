import { useCreateAddress } from "../features/createInvoice/useCreateAddress";
import { createClientAddress as createClientAddressAPI } from "../services/apiaddress";
import AddNewAddress from "./AddNewAddress";

function AddClientAddress({ onCloseModal }) {
  const { createEntity: createClientAddress, isCreating } = useCreateAddress(
    createClientAddressAPI,
    "clients"
  );

  const clientFields = [
    {
      name: "clientCompanyName",
      label: "Client Company Name",
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
    { name: "clientName", label: "Client Name" },
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
      entityName="Client"
      fields={clientFields}
      onCloseModal={onCloseModal}
      onSubmit={(data) => createClientAddress(data)}
    />
  );
}

export default AddClientAddress;
