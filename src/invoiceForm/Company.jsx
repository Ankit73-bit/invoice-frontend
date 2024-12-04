import { useEffect } from "react";
import { COMPANY_DETAILS } from "../utils/constant";
import Select from "../ui/Select";

function Company({ register, setValue, onCompanyChange, selectedCompany }) {
  // Effect to register the company field with react-hook-form
  useEffect(() => {
    register("company", { required: "Company selection is required" });
    setValue("company", selectedCompany?.clientCompanyName || ""); // Set form value when selectedCompany changes
  }, [register, setValue, selectedCompany]);

  const handleSelection = (event) => {
    const selectedOption = COMPANY_DETAILS.find(
      (company) => company.clientCompanyName === event.target.value
    );
    // Update the form state with the selected company name
    setValue("company", selectedOption?.clientCompanyName || "");
    // Notify the parent about the selected company
    onCompanyChange(selectedOption);
  };

  // Prepare options for the Select component
  const options = [
    { value: "", label: "-- Select a company --", disabled: true },
    ...COMPANY_DETAILS.map((company) => ({
      value: company.clientCompanyName,
      label: company.clientCompanyName,
    })),
  ];

  return (
    <>
      <div>
        <Select
          options={options}
          value={selectedCompany?.clientCompanyName || ""}
          onChange={handleSelection}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        />
      </div>

      {/* Display company details */}
      {selectedCompany?.add1 && <p>{selectedCompany.add1}</p>}
      {selectedCompany?.add2 && <p>{selectedCompany.add2}</p>}
      {selectedCompany?.add3 && <p>{selectedCompany.add3}</p>}
      {selectedCompany?.pinCode && <p>{selectedCompany.pinCode}</p>}
      {selectedCompany?.contact && <p>Contact: {selectedCompany.contact}</p>}
      {selectedCompany?.gstno && <p>GST/CIN: {selectedCompany.gstno}</p>}
      {selectedCompany?.mail && <p>Mail ID: {selectedCompany.mail}</p>}
    </>
  );
}

export default Company;
