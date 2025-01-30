import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { AdmiroModalForm } from "./AdmiroModalForm";

export const AdmiroModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="primary" className="px-xl-2 px-xxl-3" onClick={toggle}>
        {"Open modal for Admiro"}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <ModalHeader className="justify-content-center border-0">{"Admiro SIGN-UP"}</ModalHeader>
          <ModalBody>
            <AdmiroModalForm />
          </ModalBody>
        </div>
      </Modal>
    </>
  );
};
