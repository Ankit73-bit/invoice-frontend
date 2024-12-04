import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import InvoiceRow from "./InvoiceRow";
import useInvoices from "./useInvoices";
import Pagination from "../../ui/Pagination";

function InvoiceTable() {
  const { invoices, isLoading, totalCount } = useInvoices();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="2fr 2.4fr 1.5fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Invoice</div>
          <div>Client</div>
          <div>Date</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={invoices}
          render={(invoice) => (
            <InvoiceRow key={invoice._id} invoice={invoice} />
          )}
        />

        <Table.Footer>
          <Pagination count={totalCount} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default InvoiceTable;
