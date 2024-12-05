import { PDFDownloadLink } from "@react-pdf/renderer";
import Button from "../ui/Button";
import InvoicePDF from "../invoice/InvoicePDF";

function InvoiceDownload({ invoiceData }) {
  return (
    <PDFDownloadLink
      document={<InvoicePDF invoiceData={invoiceData} />}
      fileName={`${invoiceData?.invoiceNo || "document"}.pdf`}
      style={{ textDecoration: "none" }}
    >
      {({ loading }) =>
        loading ? (
          <Button disabled>Generating PDF...</Button>
        ) : (
          <Button>Download Invoice</Button>
        )
      }
    </PDFDownloadLink>
  );
}

export default InvoiceDownload;
