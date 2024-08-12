import React, { useState } from "react";
import Modal from "./Modal";
import Loader from "../../hoc/Loader";
import { signUp } from "../../../services/api.service";
import { validMail } from "../../../utils/validation.utils";

const SignupModal = ({ showSignupModal, setShowSignupModal }) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const emptyCredentials = { email: "", username: "", password: "" };
  const [credentials, setCredentails] = useState(emptyCredentials);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentails((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const { username, email, password } = credentials;
    let valid = true;
    console.log(username, email, password);
    if(username.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {setErrors(prevState => [...prevState, "All fields are required"]); valid = false;}
    if(!validMail(email)) { setErrors(prevState => [...prevState, "Enter a valid E-mail address."]); valid = false;}
    if(password.trim().length < 8 && password.trim().length > 0) {setErrors(prevState => [...prevState, "Password must be atleast 8 characters long."]); valid = false;}

    return valid;
  }

  const handleSignup = async () => {
    try {
      setLoading(true);
      setErrors([]);
      const formValid = validateForm();
      if(!formValid) {return;}
      const response = await signUp(credentials);
      setShowSignupModal(false);
    } catch (error) {
      console.log(error);
      setErrors(prevState =>  [...prevState, error.message]);
    } finally {
      setLoading(false);
    }
  };

  console.log(errors)

  return (
    <Modal
      isModalOpen={showSignupModal}
      setIsModalOpen={setShowSignupModal}
      centered={true}
      title="SignUp"
      okText={
        <>
          {loading && <Loader />}
          <p>Sign Up</p>
        </>
      }
      onOk={handleSignup}
      onCancel={() => {
        setErrors("");
        setCredentails(emptyCredentials);
      }}
    >
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
        {
          errors && errors.length > 0 &&
          <ul>
            {errors.map((error) => {
              <li>
                {error}
              </li>
            })}
            </ul>
        }
      </div>
    </Modal>
  );
};

export default SignupModal;
