import { useEffect, useState } from "react";
import Select from "../ui/Select";
import { getAllClientAddress } from "../services/apiAddress";

function ClientAddress({
  register,
  setValue,
  selectedClient,
  setSelectedClient,
  selectedCompany,
}) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClient() {
      const apiClients = await getAllClientAddress();
      setClients(Array.isArray(apiClients) ? apiClients : []);
    }

    fetchClient();
  }, []);

  useEffect(() => {
    // Proceed only if clients and selectedCompany are available
    if (clients.length > 0 && selectedCompany) {
      const filteredClients = clients.filter(
        (client) => client.company === selectedCompany.clientCompanyName
      );

      // Set the first client of the filtered list as default
      if (filteredClients.length > 0) {
        const firstClient = filteredClients[0];
        setSelectedClient(firstClient); // Update selected client
        setValue("client", firstClient._id); // Set form value
      } else {
        setSelectedClient(null); // Clear selected client if no clients match
        setValue("client", ""); // Reset form value
        console.log("No clients found for the selected company.");
      }
    }
  }, [clients, selectedCompany, setValue]);

  const handleSelection = (event) => {
    const filteredClients = clients.filter(
      (client) => client.company === selectedCompany?.clientCompanyName
    );
    const selectedOption = filteredClients.find(
      (client) => client.clientCompanyName === event.target.value
    );
    setSelectedClient(selectedOption); // Update selected client
    setValue("client", selectedOption?._id || "");
  };

  const filteredClients = clients.filter(
    (client) => client.company === selectedCompany?.clientCompanyName
  );

  const options = [
    { value: "", label: "-- Select a company --", disabled: true },
    ...(Array.isArray(filteredClients) && filteredClients.length > 0
      ? filteredClients.map((company) => ({
          value: company.clientCompanyName,
          label: company.clientCompanyName,
        }))
      : []),
  ];

  return (
    <>
      <div>
        <Select
          options={options}
          value={selectedClient?.clientCompanyName || ""}
          onChange={handleSelection}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        />
      </div>

      {/* Display company details based on the selected client */}
      {selectedClient && (
        <>
          {selectedClient?.address?.add1 && (
            <p>{selectedClient.address.add1}</p>
          )}
          {selectedClient?.address?.add2 && (
            <p>{selectedClient.address.add2}</p>
          )}
          {selectedClient?.address?.add3 && (
            <p>{selectedClient.address.add3}</p>
          )}
          {selectedClient?.address?.pinCode && (
            <p>{selectedClient.address.pinCode}</p>
          )}
          {selectedClient?.address?.panNo && (
            <p>PAN: {selectedClient.address.panNo}</p>
          )}
          {selectedClient?.address?.gstNo && (
            <p>GST/CIN: {selectedClient.address.gstNo}</p>
          )}
          {selectedClient?.address?.stateCode && (
            <p>{selectedClient.address.stateCode}</p>
          )}
        </>
      )}
    </>
  );
}

export default ClientAddress;
