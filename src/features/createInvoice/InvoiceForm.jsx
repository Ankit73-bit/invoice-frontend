import { useState } from "react";
import Button from "../../ui/Button";
import AddClientAddress from "../../invoiceForm/AddClientAddress";
import AddConsigneeAddress from "../../invoiceForm/AddConsigneeAddress";

function InvoiceForm() {
  const [showClientForm, setShowClientForm] = useState(false);
  const [showConsigneeForm, setShowConsigneeForm] = useState(false);
  return (
    <>
      <Button onClick={() => setShowConsigneeForm((show) => !show)}>
        Add consignee Address
      </Button>
      {showConsigneeForm && <AddConsigneeAddress />}
      <Button onClick={() => setShowClientForm((show) => !show)}>
        Add Client Address
      </Button>
      {showClientForm && <AddClientAddress />}
    </>
  );
}

export default InvoiceForm;
