import React from "react";
import { Button, Modal as AntdModal } from "antd";

const Modal = ({ modalVis, setIsModalOpen, ...props }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <AntdModal
        title="Basic Modal"
        open={modalVis}
        onOk={handleOk}
        onCancel={handleCancel}
        {...props}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntdModal>
    </>
  );
};
export default Modal;
