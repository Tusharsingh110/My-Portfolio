import React, { useState, useEffect } from "react";
import { sendOTPRequest } from "../../../services/api.service";
import { useToast } from "../../../hooks/useToast";
import Loader from "../../hoc/Loader"

const OTP = ({ setUserOtp }) => {
  const toast = useToast();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [otpMessage, setOtpMessage] = useState(
    <span>Please check your email for the OTP. It is valid for 1 minute.</span>
  );

  // Handle the OTP input changes
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;

    setOtp(newOtp);
    setUserOtp(newOtp.join(""));

    // Automatically focus on the next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  // Handle backspace and focus on the previous input
  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      e.target.previousSibling
    ) {
      e.target.previousSibling.focus();
    }
  };

  // Request a new OTP
  const requestOTP = async () => {
    if (timeLeft > 0) {
      toast(
        "error",
        "Please wait for the OTP to expire before requesting a new one."
      );
      return;
    }

    try {
      setFetching(true);
      const response = await sendOTPRequest();
      if (response.statusCode === 200) {
        setTimeLeft(60);
        setOtpMessage(
          <span>
            Please check your email for the OTP. It is valid for 1 minute.
          </span>
        );
        toast("success", response?.message);
      }
    } catch (error) {
      toast("error", error?.message || "Error while sending OTP");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    let interval;
    if (timeLeft >= 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            clearInterval(interval);
            setOtpMessage(
              <p>
                OTP expired! Please request a{" "}
                <span className="underlined cursor-pointer" onClick={requestOTP}>new one</span>.
              </p>
            );
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Initial OTP request on component mount
  useEffect(() => {
    requestOTP();
  }, []);
  return fetching ? (
    <div className="flex flex-col gap-2 items-center align-middle">
    <p>Sending OTP to the registered e-mail.</p>
    <div className="h-20 w-20">
    <Loader />
    </div>
    <p>Please Wait...</p>
    </div>
  ) : (
    <div className="space-y-5">
      <p className="text-blue-600">{otpMessage}</p>
      <div className="flex flex-col items-center gap-4 h-auto w-fit mx-auto">
        <div className="flex gap-2 items-center">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
              disabled={timeLeft === 0}
              className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
      </div>
      <p className="text-gray-500 mt-2">Time remaining: {timeLeft}s</p>
    </div>
  );
};

export default OTP;
