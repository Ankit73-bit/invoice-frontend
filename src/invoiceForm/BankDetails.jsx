import { useEffect, useState } from "react";
import { COMPANY_BANK_DETAILS } from "../utils/constant";

function BankDetails({ register, setValue, selectedCompany }) {
  const [selectedBank, setSelectedBank] = useState(null);

  useEffect(() => {
    register("companyBankDetails", {
      required: "Bank details selection is required",
    });

    if (selectedCompany) {
      const bankDetails = COMPANY_BANK_DETAILS.find(
        (bank) => bank.companyName === selectedCompany.clientCompanyName
      );
      setSelectedBank(bankDetails || null);
      setValue("companyBankDetails", bankDetails?.companyName || "");
    }
  }, [register, setValue, selectedCompany]);

  return (
    <>
      {selectedBank?.companyName && <p>{selectedBank.companyName}</p>}
      {selectedBank?.bankName && <p>{selectedBank.bankName}</p>}
      {selectedBank?.accNo && <p>{selectedBank.accNo}</p>}
      {selectedBank?.ifsc && <p>{selectedBank.ifsc}</p>}
      {selectedBank?.branchName && <p>branchName: {selectedBank.branchName}</p>}
    </>
  );
}

export default BankDetails;
