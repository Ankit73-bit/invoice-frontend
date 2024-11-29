import InvoiceTable from "../features/invoices/InvoiceTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Invoices() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Invoices</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <InvoiceTable />
      </Row>
    </>
  );
}

export default Invoices;
