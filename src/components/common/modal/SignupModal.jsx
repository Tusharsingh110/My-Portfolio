import React, { useState } from "react";
import Modal from "./Modal";
import { signUp, verifyUser } from "../../../services/api.service";
import { validMail } from "../../../utils/validation.utils";
import { useToast } from "../../../hooks/useToast";
import OTP from "../misc/OTP";
import { useSelector } from "react-redux";

const SignupModal = ({
  showSignupModal,
  setShowSignupModal,
  title,
  okText,
  cancelText,
  fetchUserData,
}) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const emptyCredentials = { email: "", username: "", password: "" };
  const [credentials, setCredentails] = useState(emptyCredentials);
  const [userOtp, setUserOtp] = useState(new Array(6).fill(""));
  const toast = useToast();
  const { isVerified } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentails((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const { username, email, password } = credentials;
    let valid = true;
    if (
      username.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      setErrors((prevState) => [...prevState, "All fields are required"]);
      valid = false;
    }
    if (email.trim().length && !validMail(email)) {
      setErrors((prevState) => [...prevState, "Enter a valid E-mail address."]);
      valid = false;
    }
    if (password.trim().length < 8 && password.trim().length > 0) {
      setErrors((prevState) => [
        ...prevState,
        "Password must be atleast 8 characters long.",
      ]);
      valid = false;
    }
    return valid;
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      setErrors([]);
      const formValid = validateForm();
      if (!formValid) {
        return;
      }
      const response = await signUp(credentials);
      toast("success", response.message);
      // setShowSignupModal(false);
    } catch (error) {
      toast("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      setLoading(true);
      const response = await verifyUser({otp:userOtp});
      if (response.statusCode === 200) {
        toast('success', response.message);
      }
    } catch (error) {
      toast("error", error?.response?.message);
    } finally {
      setLoading(false);
      setShowSignupModal(false);
      fetchUserData();
    }
  };

  return (
    <Modal
      isModalOpen={showSignupModal}
      setIsModalOpen={setShowSignupModal}
      centered={true}
      title={title}
      okText={okText}
      confirmLoading={loading}
      onOk={
        isVerified == null
          ? handleSignup
          : isVerified == false
          ? handleOtpSubmit
          : handleSignup
      }
      cancelText={cancelText}
      onCancel={() => {
        setErrors("");
        setCredentails(emptyCredentials);
      }}
    >
      {isVerified == false ? (
        <div>
          <OTP submitOTP={handleOtpSubmit} setUserOtp={setUserOtp} />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              value={credentials.email}
              className="p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Username</label>
            <input
              type="username"
              value={credentials.username}
              className="p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
              name="username"
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={credentials.password}
              className="p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
              name="password"
              onChange={handleChange}
            />
          </div>
          {errors && (
            <ul className="absolute bottom-5 my-2">
              {errors.map((errorMsg, index) => (
                <li className="text-red-600 text-xs" key={index}>
                  {errorMsg}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Modal>
  );
};

export default SignupModal;
