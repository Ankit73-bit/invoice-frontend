import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ stats }) {
  const totalInvoices = stats.countByStatus.reduce(
    (acc, status) => acc + status.count,
    0
  );
  const totalRevenue = stats.totalRevenue.reduce(
    (acc, entity) => acc + entity.total,
    0
  );
  const pendingInvoices =
    stats.countByStatus.find((s) => s._id === "Pending")?.count || 0;
  const paidInvoices =
    stats.countByStatus.find((s) => s._id === "Paid")?.count || 0;

  return (
    <>
      <Stat
        title="Total Invoices"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={totalInvoices}
      />
      <Stat
        title="Total Revenue"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalRevenue)}
      />
      <Stat
        title="Pending Invoices"
        color="yellow"
        icon={<HiOutlineCalendarDays />}
        value={pendingInvoices}
      />
      <Stat
        title="Paid Invoices"
        color="indigo"
        icon={<HiOutlineChartBar />}
        value={paidInvoices}
      />
    </>
  );
}

export default Stats;
