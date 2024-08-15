import React from "react";
import { IoClose } from "react-icons/io5";
import { toTitleCase } from "../../../utils/string.utils";
import { getToastStyle } from "../../../utils/toast.utils";
import "./Toast.css";
import { cn } from "../../../utils/cn.utils";

const Toast = ({ id, type, message, onClose = () => {} }) => {
  const toastStyle = getToastStyle(type);
  return (
    <div
      className={cn(
        `flex w-80 p-3 items-start justify-between gap-2 rounded-md border shadow-boxShadow`,
        toastStyle
      )}
    >
      <div>
        <h5 className="font-bold">{toTitleCase(type)}</h5>
        <p>{message}</p>
      </div>
      <button
        onClick={() => {
          onClose(id);
        }}
        aria-label="Close notification"
        className="text-lg"
      >
        <IoClose />
      </button>
    </div>
  );
};

export default Toast;
