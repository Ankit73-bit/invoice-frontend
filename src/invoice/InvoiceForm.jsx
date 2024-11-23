import { useState } from "react";

const InvoiceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientAddress: "",
    items: [{ description: "", quantity: 0, price: 0 }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 0, price: 0 }],
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <input
        name="clientName"
        value={formData.clientName}
        onChange={handleChange}
        placeholder="Client Name"
      />
      <input
        name="clientAddress"
        value={formData.clientAddress}
        onChange={handleChange}
        placeholder="Client Address"
      />
      {formData.items.map((item, index) => (
        <div key={index}>
          <input
            value={item.description}
            onChange={(e) =>
              handleItemChange(index, "description", e.target.value)
            }
            placeholder="Item Description"
          />
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleItemChange(index, "quantity", e.target.value)
            }
            placeholder="Quantity"
          />
          <input
            type="number"
            value={item.price}
            onChange={(e) => handleItemChange(index, "price", e.target.value)}
            placeholder="Price"
          />
        </div>
      ))}
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      <button type="submit">Generate Invoice</button>
    </form>
  );
};

export default InvoiceForm;
