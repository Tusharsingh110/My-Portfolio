import React from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { logOut } from "../../../features/user/user.slice";
import { useToast } from "../../../hooks/useToast";

const LogoutModal = ({ showLogoutModal, setShowLogoutModal }) => {
  // const {isLoggedIn} = useSelector(state => state.auth);
  const toast = useToast();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    toast('success', "Logged out successfully")
    setShowLogoutModal(false);
  };
  return (
    <Modal
      isModalOpen={showLogoutModal}
      setIsModalOpen={setShowLogoutModal}
      title={"Logout"}
      okText={"Sure"}
      onOk={handleLogout}
      onCancel={() => setShowLogoutModal(false)}
      centered={true}
      okButtonProps={{
        style: {
          backgroundColor: "white",
          color: "red",
          border: "1px solid red",
        },
      }}
    >
      Leaving so soon?
    </Modal>
  );
};

export default LogoutModal;
