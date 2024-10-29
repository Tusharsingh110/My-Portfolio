import React, { useState } from "react";
import Modal from "./Modal";
import { addSkill, fetchSkillImages } from "../../../services/api.service";
import { useToast } from "../../../hooks/useToast";
import Loader from "../../hoc/Loader";
import { Button } from "antd";

const AddSkillModal = ({
  showAddSkillModal,
  setShowAddSkillModal,
  title,
  okText,
  cancelText,
  fetchSkillsData,
}) => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const toast = useToast();
  const [skill, setSkill] = useState("");
  const [skillImages, setSkillImages] = useState([]);
  const [selectedSkillImage, setSelectedSkillImage] = useState("");

  // fetch skill images
  const fetchImages = async () => {
    try {
      setFetching(true);
      const { statusCode, data } = await fetchSkillImages(skill);
      if (statusCode == "200" && data?.length) {
        setSkillImages(data);
      }
    } catch (error) {
      toast("error", error.message);
    } finally {
      setFetching(false);
    }
  };

  const handleCancel = () => {
    setSkill("");
    setSkillImages([]);
    setLoading(false);
    fetchSkillsData();
    setShowAddSkillModal(false);
  };

  const handleAddSkill = async () => {
    try {
      setLoading(true);
      const { statusCode, message } = await addSkill({
        skillName: skill,
        skillImgSrc: selectedSkillImage,
      });
      if (statusCode == "200") {
        toast("success", message);
      }
    } catch (error) {
      toast("error", error.message);
    } finally {
      handleCancel();
    }
  };

  return (
    <Modal
      isModalOpen={showAddSkillModal}
      setIsModalOpen={setShowAddSkillModal}
      centered={true}
      title={title}
      okText={okText}
      confirmLoading={loading}
      okButtonProps={{
        disabled: selectedSkillImage == "",
      }}
      onOk={handleAddSkill}
      cancelText={cancelText}
      onCancel={handleCancel}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-2">
          <div className="form-control w-full">
            <label htmlFor="email">Enter a skill:</label>
            <input
              type="skill"
              value={skill}
              className="p-1 -outline-offset-0 outline-none focus:outline-[#2271ef] rounded-md"
              name="skill"
              onChange={(e) => setSkill(e.target.value)}
            />
          </div>
          <Button onClick={fetchImages}>Search</Button>
        </div>
        {
        fetching ? (
          <div className="flex items-center justify-evenly w-full">
            <Loader />
          </div>
        ) : skillImages.length > 0 ? (
          <div className="flex flex-col gap-4">
            <p className="text-left w-full">Select one of the images</p>
            <div
              className={`flex justify-start gap-4 w-full overflow-x-scroll`}
            >
              {skillImages.map((skillImg, index) => (
                <button
                  onClick={() => {
                    setSelectedSkillImage(skillImg);
                  }}
                  className={`p-2 m-2 min-w-[120px] ${
                    skillImg == selectedSkillImage
                      ? "border border-[#2271ef] rounded-md"
                      : ""
                  }`}
                >
                  <img key={index} src={skillImg} alt={skill} width={"100px"} />
                </button>
              ))}
            </div>
          </div>
        ) : (
          skill && 
          <>No Images found.</>
        )}

        {/* {errors && (
            <ul className="absolute bottom-5 my-2">
              {errors.map((errorMsg, index) => (
                <li className="text-red-600 text-xs" key={index}>
                  {errorMsg}
                </li>
              ))}
            </ul>
          )} */}
      </div>
    </Modal>
  );
};

export default AddSkillModal;
