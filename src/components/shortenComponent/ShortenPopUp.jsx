import React from "react";

import Modal from "@mui/material/Modal";
import CreateNewShorten from "./CreateNewShorten";


export default function ShortenPopUp({ open, setOpen, refetch }) {
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center items-center h-full w-full">
          <CreateNewShorten setOpen={setOpen} refetch={refetch} />
        </div>
      </Modal>
    </div>
  );
}
