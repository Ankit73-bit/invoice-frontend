import AddClientAddress from "../../invoiceForm/AddClientAddress";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddClient() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="client-form">
          <Button>Add new client Address</Button>
        </Modal.Open>
        <Modal.Window name="client-form">
          <AddClientAddress />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddClient;
