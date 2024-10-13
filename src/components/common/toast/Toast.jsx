import React from "react";
import { IoClose } from "react-icons/io5";
import { toTitleCase } from "../../../utils/string.utils";
import { getToastStyle } from "../../../utils/toast.utils";
import "./Toast.css";
import { cn } from "../../../utils/cn.utils";

const Toast = ({ id, type = "success", message = "message", onClose = () => {} }) => {
  const toastStyle = getToastStyle(type);
  return (
    <div
      className={cn(
        `flex w-40 p-2 text-xs items-start justify-between gap-1 rounded-md border shadow-boxShadow relative opacity-60`,
        toastStyle
      )}
    >
      <div>
        <h5 className="font-semibold">{toTitleCase(type)}</h5>
        <p>{message}</p>
      </div>
      <button
        onClick={() => {
          onClose(id);
        }}
        aria-label="Close notification"
        className="text-lg"
      >
        <IoClose className="absolute top-1 right-1" style={{width:"12px", height:"12px"}} />
      </button>
    </div>
  );
};

export default Toast;
