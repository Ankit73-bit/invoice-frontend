import InvoiceForm from "../features/createInvoice/InvoiceForm";
import { InvoiceContextProvider } from "../features/createInvoice/useInvoiceContext";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function CreateInvoice() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Create Invoice</Heading>
      </Row>

      <Row>
        <InvoiceContextProvider>
          <InvoiceForm />
        </InvoiceContextProvider>
      </Row>
    </>
  );
}

export default CreateInvoice;
