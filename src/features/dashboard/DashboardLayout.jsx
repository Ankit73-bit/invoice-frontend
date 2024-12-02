import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import RevenueByStatusChart from "./RevenueByStatusChart";
import TotalRevenueChart from "./TotalRevenueChart";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import { useEffect, useState } from "react";
import { getInvoicesStats } from "../../services/apiInvoices";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await getInvoicesStats();
        setStats(data);
      } catch (error) {
        console.error("Error loading stats:", error);
      }
    }

    fetchStats();
  }, []);

  if (!stats) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <RevenueByStatusChart data={stats.revenueByStatus} />
      <TotalRevenueChart data={stats.totalRevenue} />
      <Stats stats={stats} />
      <SalesChart trends={stats.monthlyTrends} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
