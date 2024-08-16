import { useState } from "react";
import { login } from "../../../services/api.service";
import Modal from "./Modal";
import Loader from "../../hoc/Loader";
import { useToast } from "../../../hooks/useToast";
import { useSelector } from "react-redux";

const LoginModal = ({ showLoginModal, setShowLoginModal, fetchUserData }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emptyCredentials = { email: "", password: "" };
  const [credentails, setCredentails] = useState(emptyCredentials);
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentails((prevState) => ({ ...prevState, [name]: value }));
  };
 
  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await login(credentails);
      localStorage.setItem('token', response.token);
      setShowLoginModal(false);
      toast('success','Logged in Successfully.');
    } catch (error) {
      console.log(error)
      setError(error.message);
    } finally {
      setLoading(false);
      const token = localStorage.getItem('token');
      if(token)
      fetchUserData();
    }
  };


  return (
    <Modal
      isModalOpen={showLoginModal}
      setIsModalOpen={setShowLoginModal} 
      centered={true}
      title="Login"
      okText="Login"
      confirmLoading={loading}
      onOk={handleLogin}
      onCancel={() => {
        setError("");
        setCredentails(emptyCredentials);
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={credentails.email}
            className="p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={credentails.password}
            className="p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
            name="password"
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-600 absolute bottom-6">{error}</p>}
      </div>
    </Modal>
  );
};

export default LoginModal;
