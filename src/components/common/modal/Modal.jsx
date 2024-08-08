import React from "react";
import { Modal as AntdModal } from "antd";

const Modal = ({ isModalOpen, setIsModalOpen, title, children,  ...props }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <AntdModal
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
