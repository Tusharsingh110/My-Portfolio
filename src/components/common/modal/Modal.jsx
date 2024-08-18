import React from "react";
import { Modal as AntdModal } from "antd";

const Modal = ({ isModalOpen, onOk, onCancel, setIsModalOpen, title, children,  ...props }) => {
  const handleOk = async () => {
    await onOk();
    // setIsModalOpen(false);
  };
  const handleCancel = () => {
    onCancel();
    setIsModalOpen(false);
  };
  return (
    <>
      <AntdModal
        getContainer={false}
        title={title ?? "Title"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        {...props}
      >
       {children}
      </AntdModal>
    </>
  );
};
export default Modal;
