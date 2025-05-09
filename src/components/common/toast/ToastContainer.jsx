import {
  useToastStateContext,
  useToastDispatchContext,
} from "../../../contexts/ToastProvider";
import Toast from "./Toast";
import "./ToastContainer.css";

const ToastContainer = () => {
  const { toasts } = useToastStateContext();
  const dispatch = useToastDispatchContext();

  // const handleClose = (id) => {
  //   dispatch({ type: "DELETE_TOAST", id });
  // };

  return (
    <div className="fixed top-2 right-2 w-auto max-w-xl toast-container flex flex-col gap-1">
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={()=> { dispatch({ type: "DELETE_TOAST", id:toast.id });}}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
