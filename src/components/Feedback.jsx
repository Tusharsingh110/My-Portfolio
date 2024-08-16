import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeedbackCards from "./FeedbackCards";
import { fetchFeedbacks, sendFeedback } from "../services/api.service";
import ToastContainer from "../components/common/toast/ToastContainer";
import { useToast } from "../hooks/useToast";

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
  const [feedbackData, setFeedbackData] = useState([]);
  const toast = useToast();
  const defaultFeedback = {
    username: "",
    email: "",
    type: "",
    collab: false,
    message: "",
  };

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const response = await fetchFeedbacks();
        setFeedbackData(response.data.data);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    getFeedbacks();
  }, []);

  const [feedback, setFeedback] = useState(defaultFeedback);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendFeedback(feedback);
      toast({ type: "success", message: "Feedback sent successfully." });
    } catch (error) {
      toast("error",error?.message);
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
    <div className="w-full p-10  dark:bg-[#33373f] duration-[500ms] dark:text-white">
      <div className=" dark:bg-[#33373f] duration-[500ms] mb-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center text-[#2271ef] dark:bg-[#183777] dark:text-white py-8 text-[20px] md:text-4xl font-bold duration-[150ms]">
            Feedbacks
          </div>
          {/* <div className='text-center text-[#2271ef] py-8 text-[20px] md:text-4xl font-bold dark:text-white'>Projects</div> */}
          <div className="bg-[#EDF3FD] dark:bg-[#262626]  rounded-lg duration-[500ms]">
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
          </div>
        </div>
      </div>

      <div className="text-center text-[#2271ef] dark:bg-[#183777] dark:text-white py-8 text-[20px] md:text-4xl font-bold duration-[150ms]">
        Feedback/Query Form
      </div>

      <div className="mx-auto md:p-10 p-4 max-w-[13000px] justify-center items-center bg-[#EDF3FD] dark:bg-[#262626] ">
        <form
          method="POST"
          className="text-zinc-800 dark:text-white"
          onSubmit={handleSubmit}
        >
          <div className="md:flex md:justify-evenly items-center">
            <div className="p-4 flex flex-col md:w-[40%] ">
              <label htmlFor="username">Name:</label>
              <input
                onChange={handleChange}
                className="dark:bg-[#464b55] p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
                type="text"
                name="username"
                value={feedback.username}
                required
              />

              <label className="mt-4" htmlFor="email">
                Email:
              </label>
              <input
                onChange={handleChange}
                className="dark:bg-[#464b55] p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
                type="email"
                name="email"
                value={feedback.email}
                required
              />

              <select
                onChange={handleChange}
                className="dark:bg-[#464b55] p-1 mt-8 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
                name="type"
                id="type"
                value={feedback.type}
                required
              >
                <option disabled value="">
                  ---Select an option---
                </option>
                <option value="feedback">Feedback/Suggestion</option>
                <option value="ask">Ask</option>
                <option value="other">Other</option>
              </select>

              <div className="mt-6 items-center flex gap-2">
                <label
                  htmlFor="collab"
                  className="accent-[#2271ef] -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-sm"
                >
                </label>

                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="collab"
                    id="collab"
                    checked={feedback.collab}
                  />
                  If you want to collaborate just check this check box
              </div>
            </div>

            <div className="flex md:w-[40%] justify-center">
              <textarea
                onChange={handleChange}
                className="w-full m-4 p-1 outline-none -outline-offset-0 focus:outline-[#2271ef] rounded-sm dark:bg-[#464b55]"
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your message goes here.."
                value={feedback.message}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex mt-2  justify-center">
            <input
              className="p-2 w-24 rounded-md drop-shadow-md bg-[#2271ef] dark:bg-[#464b55] border text-white hover:bg-white hover:text-[#2271ef] hover:border border-[#2271ef] duration-[100ms]"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Feedback;
