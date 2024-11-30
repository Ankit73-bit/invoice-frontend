import InvoiceTable from "../features/invoices/InvoiceTable";
import InvoiceTableOperations from "../features/invoices/InvoiceTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Invoices() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Invoices</Heading>
        <InvoiceTableOperations />
      </Row>

      <Row>
        <InvoiceTable />
      </Row>
    </>
  );
}

export default Invoices;
