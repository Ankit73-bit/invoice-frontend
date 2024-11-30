import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function InvoiceTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="company"
        options={[
          { value: "all", label: "All" },
          { value: "Paras Solutions", label: "Paras Solutions" },
          { value: "Paras Print", label: "Paras Print" },
        ]}
      />

      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "Pending", label: "Pending" },
          { value: "Paid", label: "Paid" },
          { value: "Due", label: "Due" },
        ]}
      />

      <SortBy
        options={[
          { value: "date-desc", label: "Sort by date (recent first)" },
          { value: "date-asc", label: "Sort by date (earlier first)" },
          { value: "grossAmount-desc", label: "Sort by amount (high first)" },
          { value: "grossAmount-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default InvoiceTableOperations;
