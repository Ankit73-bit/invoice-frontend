import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// import Empty from "../../ui/Empty";

import { useQuery } from "@tanstack/react-query";
import { getAllInvoices } from "../../services/apiInvoices";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import InvoiceRow from "./InvoiceRow";

// import { useBookings } from "./useBookings";
// import Pagination from "../../ui/Pagination";

// function BookingTable() {
//   const { bookings, isLoading, count } = useBookings();

//   if (isLoading) return <Spinner />;

//   if (!bookings.length) return <Empty resourceName="bookings" />;

//   return (
//     <Menus>
//       <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
//         <Table.Header>
//           <div>Invoice</div>
//           <div>Client</div>
//           <div>Dates</div>
//           <div>Status</div>
//           <div>Amount</div>
//           <div></div>
//         </Table.Header>

//         <Table.Body
//           data={bookings}
//           render={(booking) => (
//             <BookingRow key={booking.id} booking={booking} />
//           )}
//         />

//         <Table.Footer>
//           <Pagination count={count} />
//         </Table.Footer>
//       </Table>
//     </Menus>
//   );
// }

// export default BookingTable;

function InvoiceTable() {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    data: invoices,
    error,
  } = useQuery({
    queryKey: ["invoice", { page, limit: 10 }],
    queryFn: ({ queryKey }) => {
      const [_key, params] = queryKey;
      return getAllInvoices(params);
    },
    keepPreviousData: true,
  });

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
          data={invoices?.data}
          render={(invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
          )}
        />

        {/* <Table.Footer>
          <Pagination count={count} />
        </Table.Footer> */}
      </Table>
    </Menus>
  );
}

export default InvoiceTable;
