import styled from "styled-components";
import { format } from "date-fns";
import {
  // HiArrowDownOnSquare,
  // HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { formatCurrency } from "../../utils/helpers";
import { useDeleteInvoice } from "./useDeleteInvoice";
// import { useCheckout } from "../check-in-out/useCheckout";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function InvoiceRow({
  invoice: {
    id: invoiceId,
    invoiceNo,
    date: invoiceDate,
    grossAmount,
    status,
    to,
  },
}) {
  const navigate = useNavigate();
  // const { checkout, isCheckingOut } = useCheckout();
  const { deleteInvoice, isDeleting } = useDeleteInvoice();

  const statusToTagName = {
    Pending: "blue",
    Paid: "green",
    Due: "red",
  };

  return (
    <Table.Row>
      <Cabin>{invoiceNo}</Cabin>

      <Stacked>
        <span>{to}</span>
      </Stacked>

      <Stacked>
        <span>{format(new Date(invoiceDate), "MMM dd yyyy")}</span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(grossAmount)}</Amount>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={invoiceId} />
          <Menus.List id={invoiceId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/invoices/${invoiceId}`)}
            >
              See details
            </Menus.Button>

            {/* {status === "pending" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/invoices/${invoiceId}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(invoiceId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )} */}

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="invoice"
            disabled={isDeleting}
            onConfirm={() => deleteInvoice(invoiceId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default InvoiceRow;
