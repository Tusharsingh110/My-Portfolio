import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { toTitleCase } from "../../../utils/string.utils";
import {
  getToastCloseButtonBorder,
  getToastStyle,
} from "../../../utils/toast.utils";
import "./Toast.css";
import { cn } from "../../../utils/cn.utils";

const Toast = ({
  id,
  type = "success",
  message = "message",
  onClose = () => {},
  duration = 4000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 500);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const toastStyle = getToastStyle(type);
  const closeButtonStyle = getToastCloseButtonBorder(type);
  const handleClose = (id) => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 500);
  };

  return (
    <div
      className={cn(
        `bg-slate-800 flex min-w-[fit-content] gap-2 p-4 py-2 items-center justify-between font-semibold rounded-3xl text-xs transition-transform duration-500 ease-in-out`,
        toastStyle,
        isVisible ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div>
        {/* <h5 className="font-semibold">{toTitleCase(type)}</h5> */}
        <p>{message}</p>
      </div>
      <button
        onClick={() => {
          handleClose(id);
        }}
        aria-label="Close notification"
        className="text-lg"
      >
        <IoClose
          className={cn("rounded-[50%] flex justify-between", closeButtonStyle)}
          style={{ width: "12px", height: "12px" }}
        />
      </button>
    </div>
  );
};

export default Toast;
