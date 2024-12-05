import { useEffect, useState } from "react";
import { getAllCounters } from "../services/apiAddress";

function InvoiceNo({ selectedCompany, invoiceNo, setInvoiceNo }) {
  const [financialYear, setFinancialYear] = useState(getFinancialYear());
  const [counters, setCounters] = useState([]);
  const [isCountersLoaded, setIsCountersLoaded] = useState(false); // Track loading state

  // Get current financial year
  function getFinancialYear(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed (0 = January)
    const startYear = month < 3 ? year - 1 : year; // Financial year starts in April
    const endYear = startYear + 1;
    return `${startYear}-${endYear.toString().slice(-2)}`;
  }

  // Fetch counters on mount
  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await getAllCounters();
        setCounters(response);
        setIsCountersLoaded(true); // Mark counters as loaded
      } catch (error) {
        console.error("Error fetching counters:", error);
      }
    };

    fetchCounters();
  }, []);

  // Generate invoice number
  const generateInvoiceNumber = () => {
    const company = selectedCompany?.clientCompanyName;
    if (!company) return "";

    const prefix = company === "Paras Print" ? "PP" : "PS";

    // Find the relevant counter
    const counter = counters.find(
      (c) => c.company === company && c.financialYear === financialYear
    );

    if (counter) {
      // Increment the counter
      const newInvoiceNo = counter.lastInvoiceNo + 1;

      // Update the counter state
      setCounters((prev) =>
        prev.map((c) =>
          c.company === company && c.financialYear === financialYear
            ? { ...c, lastInvoiceNo: newInvoiceNo }
            : c
        )
      );

      return `${prefix}-${newInvoiceNo}/${financialYear}`;
    } else {
      // Initialize a new counter
      const newCounter = { company, financialYear, lastInvoiceNo: 1 };
      setCounters((prev) => [...prev, newCounter]);

      return `${prefix}-1/${financialYear}`;
    }
  };

  // Effect to generate invoice number after counters are loaded
  useEffect(() => {
    if (isCountersLoaded && selectedCompany && financialYear) {
      const invoice = generateInvoiceNumber();
      setInvoiceNo(invoice);
    }
  }, [isCountersLoaded, selectedCompany, financialYear]);

  return (
    <div>
      <p>InvoiceNo: {invoiceNo}</p>
    </div>
  );
}

export default InvoiceNo;
