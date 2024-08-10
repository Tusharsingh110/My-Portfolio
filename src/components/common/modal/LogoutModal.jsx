import React from 'react'
import Modal from './Modal'
import { useDispatch } from 'react-redux';
import { logOut } from '../../../features/user/user.slice';


const LogoutModal = ({showLogoutModal, setShowLogoutModal}) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logOut());
        setShowLogoutModal(false)
    }
  return (
    <Modal
    isModalOpen={showLogoutModal}
    setIsModalOpen={setShowLogoutModal}
    title={"Logout"}
    okText={"Sure"}
    onOk={handleLogout}
    onCancel={() => setShowLogoutModal(false)}
    >
        Leaving so soon?
    </Modal>
  )
}

export default LogoutModal
