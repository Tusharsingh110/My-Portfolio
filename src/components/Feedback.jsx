import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeedbackCards from "./FeedbackCards";
import { fetchFeedbacks, sendFeedback } from "../services/api.service";
import { useToast } from "../hooks/useToast";
import { useSelector } from "react-redux";
import { ConfigProvider, Select } from "antd";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Feedback = () => {
  const { username, usermail, isVerified } = useSelector((state) => state.auth);
  console.log(usermail, username, isVerified);
  const defaultFeedback = {
    username: username ?? "",
    email: usermail ?? "",
    type: null,
    collab: false,
    message: "",
  };
  const [feedbackData, setFeedbackData] = useState([]);
  const [feedback, setFeedback] = useState(defaultFeedback);

  const toast = useToast();

  useEffect(() => {
    setFeedback({
      ...feedback,
      username: username ?? "",
      email: usermail ?? "",
    });
  }, [username, usermail]);

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const response = await fetchFeedbacks();
        setFeedbackData(response.data.data);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    setFeedback((prevFeedback) => {
      return {
        ...prevFeedback,
        username: defaultFeedback.username,
        email: defaultFeedback.email,
      };
    });
    getFeedbacks();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendFeedback(feedback);
      toast("success", "Feedback sent successfully.");
    } catch (error) {
      toast("error", error?.message);
    } finally {
      setFeedback(defaultFeedback);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: newValue,
    }));
  };

  const feedData = feedbackData.map((curfeed) => {
    return <FeedbackCards key={curfeed._id} {...curfeed} />;
  });

  return (
    <div className="w-full p-10 dark:bg-[#33373f] duration-[500ms] dark:text-white">
      <div className="dark:bg-[#33373f] duration-[500ms] mb-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center text-[#2271ef] dark:bg-[#183777] dark:text-white py-8 text-[20px] md:text-4xl font-bold duration-[150ms]">
            Testimonials
          </div>
          <div className="bg-[#EDF3FD] dark:bg-[#262626] rounded-lg rounded-tl-none rounded-tr-none duration-[500ms] w-full">
            {feedbackData?.length ? (
              <Carousel
                className="m-auto py-8 pb-10"
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                transitionDuration={500}
                infinite={true}
                showDots={true}
                removeArrowOnDeviceType={[
                  "tablet",
                  "mobile",
                  "desktop",
                  "superLargeDesktop",
                ]}
              >
                {feedData}
              </Carousel>
            ) : (
              <div className="py-8 pb-10 flex justify-evenly dark:text-white text-[#2271ef]">
                It's lonely here...
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-[#2271ef] dark:bg-[#183777] dark:text-white py-8 text-[20px] md:text-4xl font-bold duration-[150ms]">
        Feedback/Query Form
      </div>

      <div className="mx-auto md:p-10 p-4 max-w-[1300px] justify-center items-center bg-[#EDF3FD] dark:bg-[#262626]">
        <form
          method="POST"
          className="text-zinc-800 dark:text-white"
          onSubmit={handleSubmit}
        >
          <div className="md:flex md:justify-evenly items-center">
            <div className="p-4 flex flex-col md:w-[40%]">
              <label htmlFor="username">Name:</label>
              <input
                disabled={isVerified}
                onChange={handleChange}
                className="dark:bg-[#464b55]"
                type="text"
                name="username"
                value={feedback.username}
                required
              />

              <label className="mt-4" htmlFor="email">
                Email:
              </label>
              <input
                disabled={isVerified}
                onChange={handleChange}
                className="dark:bg-[#464b55]"
                type="email"
                name="email"
                value={feedback.email}
                required
              />

              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#2271ef",
                    borderRadius: "2px",
                    borderColor: "#2271ef5b",
                  },
                }}
              >
                <Select
                  onChange={(value) => {
                    setFeedback((prevFeedback) => ({
                      ...prevFeedback,
                      type: value,
                    }));
                  }}
                  className="dark:bg-[#464b55] mt-8 border-blue-200"
                  name="type"
                  id="type"
                  allowClear={true}
                  value={feedback.type}
                  showSearch
                  placeholder={"---Select an option---"}
                  required
                >
                  <Select.Option value="feedback">
                    Feedback/Suggestion
                  </Select.Option>
                  <Select.Option value="ask">Ask</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </ConfigProvider>

              <div className="mt-6 items-center flex gap-2">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="collab"
                  id="collab"
                  checked={feedback.collab}
                />
                <label htmlFor="collab" className="accent-[#2271ef]">
                  If you want to collaborate just check this checkbox
                </label>
              </div>
            </div>

            <div className="flex md:w-[40%] justify-center">
              <textarea
                onChange={handleChange}
                className="w-full m-4 dark:bg-[#464b55]"
                name="message"
                cols="30"
                rows="10"
                placeholder="Your message goes here..."
                value={feedback.message}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex mt-2 justify-center">
            <input
              className="p-2 w-24 rounded-md drop-shadow-md bg-[#2271ef] dark:bg-[#464b55] border text-white hover:bg-white hover:text-[#2271ef] hover:border border-[#2271ef] duration-[100ms]"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
