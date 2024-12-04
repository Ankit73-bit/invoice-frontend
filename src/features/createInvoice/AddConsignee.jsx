import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import AddConsigneeAddress from "../../invoiceForm/AddConsigneeAddress";

function AddConsignee() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="consignee-form">
          <Button>Add new consignee Address</Button>
        </Modal.Open>
        <Modal.Window name="consignee-form">
          <AddConsigneeAddress />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddConsignee;
