import React, { useState } from "react";
import Modal from "./Modal";
import { message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { getVersion } from "../../../utils/resume.utils";
const { Dragger } = Upload;

const UploadFileModal = ({
  showFileUploadModal,
  setShowFileUploadModal,
  handleFileUpload,
  resumeVersions,
  ...props
}) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [isMajorVersion, setIsMajorVersion] = useState(false);
  const [errors, setErrors] = useState([]);

  // Handle file selection
  const handleFileChange = (info) => {
    const selectedFile = info.fileList[[0]]?.originFileObj;
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setErrors((prevErrors) => [...prevErrors, "Failed to load file."]);
    }
  };

  // Handle form submission
  const handleUpload = async () => {
    if (!file || !description) {
      setErrors(["File and description required."]);
      return;
    }
    let latestVersion = getVersion(resumeVersions.map(resume => resume.version));
    const version = isMajorVersion ? Math.floor(latestVersion) + 1 : latestVersion + 0.1;

    // Create FormData object
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    formData.append("version", version);

    // Call the parent function to handle the file upload
    await handleFileUpload(formData);
    // Clear errors and reset state
    setErrors([]);
    setFile(null);
    setDescription("");
    setIsMajorVersion(false);
    setShowFileUploadModal(false);
  };

  return (
    <Modal
      isModalOpen={showFileUploadModal}
      setIsModalOpen={setShowFileUploadModal}
      centered={true}
      okText="Upload"
      onCancel={() => {
        setFile(null);
        setDescription("");
        setIsMajorVersion(false);
      }}
      onOk={handleUpload}
      {...props}
    >
      <Dragger
        name="file"
        multiple={false}
        showUploadList={true}
        beforeUpload={() => false}
        onChange={handleFileChange}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>

      <div className="form-control items-center !flex-row mt-2 cursor-pointer">
        <input
          type="checkbox"
          name="version"
          id="version"
          checked={isMajorVersion}
          onChange={() => setIsMajorVersion(!isMajorVersion)}
        />
        <label htmlFor="version">Major Version</label>
      </div>

      <div className="form-control gap-2 mt-2">
        <label htmlFor="description">Description</label>
        <textarea
          className="p-1 outline-[#2271ef] hover:border-[#2271ef]"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name="description"
          id="description"
          maxLength={100}
        ></textarea>
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
    </Modal>
  );
};

export default UploadFileModal;
