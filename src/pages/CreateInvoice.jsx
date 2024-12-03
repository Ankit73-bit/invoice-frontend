import InvoiceForm from "../features/createInvoice/InvoiceForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function CreateInvoice() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Create Invoice</Heading>
      </Row>

      <InvoiceForm />
    </>
  );
}

export default CreateInvoice;
