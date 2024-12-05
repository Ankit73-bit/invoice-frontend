import { useEffect, useState } from "react";
import Select from "../ui/Select";

function AddressSelector({
  register,
  setValue,
  selectedEntity,
  setSelectedEntity,
  selectedCompany,
  fetchAddresses, // Function to fetch addresses (clients/consignees)
  label, // Label for the dropdown
  entity,
}) {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiEntities = await fetchAddresses();
      setEntities(Array.isArray(apiEntities) ? apiEntities : []);
    }
    fetchData();
  }, [fetchAddresses]);

  useEffect(() => {
    if (entities.length > 0 && selectedCompany) {
      const filteredEntities = entities.filter(
        (entity) => entity.company === selectedCompany.clientCompanyName
      );

      if (filteredEntities.length > 0) {
        const firstEntity = filteredEntities[0];
        setSelectedEntity(firstEntity); // Update selected entity
        setValue(entity, firstEntity._id); // Set form value
      } else {
        setSelectedEntity(null); // Clear selected entity if no match
        setValue(entity, ""); // Reset form value
        console.log(`No ${label} found for the selected company.`);
      }
    }
  }, [entities, selectedCompany, setValue, label]);

  const handleSelection = (event) => {
    const filteredEntities = entities.filter(
      (entity) => entity.company === selectedCompany?.clientCompanyName
    );
    const selectedOption = filteredEntities.find(
      (entity) => entity.clientCompanyName === event.target.value
    );
    setSelectedEntity(selectedOption); // Update selected entity
    setValue(entity, selectedOption?._id || "");
  };

  const filteredEntities = entities.filter(
    (entity) => entity.company === selectedCompany?.clientCompanyName
  );

  const options = [
    { value: "", label: `-- Select a ${label} --`, disabled: true },
    ...(Array.isArray(filteredEntities) && filteredEntities.length > 0
      ? filteredEntities.map((entity) => ({
          value: entity.clientCompanyName,
          label: entity.clientCompanyName,
        }))
      : []),
  ];

  return (
    <>
      <div>
        <Select
          options={options}
          value={selectedEntity?.clientCompanyName || ""}
          onChange={handleSelection}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        />
      </div>

      {/* Display address details based on the selected entity */}
      {selectedEntity && (
        <>
          {selectedEntity?.address?.add1 && (
            <p>{selectedEntity.address.add1}</p>
          )}
          {selectedEntity?.address?.add2 && (
            <p>{selectedEntity.address.add2}</p>
          )}
          {selectedEntity?.address?.add3 && (
            <p>{selectedEntity.address.add3}</p>
          )}
          {selectedEntity?.address?.pinCode && (
            <p>{selectedEntity.address.pinCode}</p>
          )}
          {selectedEntity?.address?.panNo && (
            <p>PAN: {selectedEntity.address.panNo}</p>
          )}
          {selectedEntity?.address?.gstNo && (
            <p>GST/CIN: {selectedEntity.address.gstNo}</p>
          )}
          {selectedEntity?.address?.stateCode && (
            <p>{selectedEntity.address.stateCode}</p>
          )}
        </>
      )}
    </>
  );
}

export default AddressSelector;
