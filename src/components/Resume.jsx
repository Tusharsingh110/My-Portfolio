import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import UploadFileModal from "./common/modal/UploadFileModal";
import { useToast } from "../hooks/useToast";
import {
  getResumeJSON,
  getResumeVersions,
  getResumeWithVersion,
  uploadResume,
} from "../services/api.service";
import SingleSelect from "./common/select/SingleSelect";
import { DownloadOutlined } from "@ant-design/icons";
import { downloadPDFBase64, getResumeOptions } from "../utils/resume.utils";
import { getImageByName } from "../utils/image.utils";

export default function Resume() {
  const toast = useToast();
  const [resumeVersions, setResumeVersions] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState("");
  const [resumeData, setResumeData] = useState(null);
  const resumeOptions = getResumeOptions(resumeVersions);
  const state = useSelector((state) => state.auth);
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const { isLoggedIn, isAdmin } = state;

  const handleVersionSelect = (selectedOption) => {
    setSelectedVersion(selectedOption);
  };

  const fetchResumeVersions = async () => {
    try {
      const response = await getResumeVersions();
      setResumeVersions(response.data);
    } catch (error) {
      toast("error", error.message);
    }
  };

  const downloadResume = async () => {
    try {
      console.log(selectedVersion);
      if (["", " ", null, undefined].includes(selectedVersion)) {
        toast("warning", "Select a version to download.");
        return;
      }
      const response = await getResumeWithVersion(selectedVersion);
      downloadPDFBase64(
        response?.data?.file,
        `Tushar_Resume_v${response?.data?.version ?? 0}.pdf`
      );
      toast("success", `Resume downloaded successfully`);
    } catch (error) {
      toast("error", error.message);
    }
  };

  const handleFileUpload = async (payload) => {
    try {
      const response = await uploadResume(payload);
      toast("success", response.message);
    } catch (error) {
      toast("error", error.message);
    } finally {
      fetchResumeVersions();
    }
  };

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await getResumeJSON();
        setResumeData(response.data.jsonData);
      } catch (error) {
        toast("error",error?.message);
      }
    };
    fetchResume();
    fetchResumeVersions();
  }, []);

  return (
    resumeData && <div className="py-8 dark:bg-[#1d1f23] dark:text-white duration-[150ms]">
      <div className="max-w-[1300px] mx-auto px-10 my-8">
        <div className="text-center bg-[#2271ef] dark:bg-[#183777] text-white py-8 text-[20px] md:text-4xl font-bold duration-[150ms]">
          Resume
        </div>
        <div className="shadow-xl p-2 dark:bg-[#292c32]">
          <div className="text-center md:text-2xl p-4">
            <p className="py-1">{resumeData.personalInfo.name}</p>
            <div className="md:flex justify-center text-center items-center gap-4">
              <p>{resumeData.personalInfo.email}</p>
              <p className="py-1">{resumeData.personalInfo.phone}</p>
            </div>
          </div>
          <div className="md:flex h-full md:w-full border-2 border-t-[#d3d3d3] dark:border-t-[#414650] border-b-0 border-l-0 border-r-0">
            {/*left side*/}
            <div className="md:w-[50%] mx-auto px-4 md:py-2 md:border md:border-t-0 md:border-b-0 md:border-l-0 md:border-r-[#d3d3d3] dark:md:border-r-[#464b55] my-4">
              {/* Education Section */}
              <div className="bg-[#f8f8f8] dark:bg-[#4b5361] dark:text-white text-black p-4 my-2 rounded-2xl drop-shadow transition duration-100 hover:shadow-xl">
                <div className="md:text-2xl text-xl md:font-thin">
                  EDUCATION
                </div>
                <div className="text-[16px] md:text-sm">
                  <p className="py-2 font-semibold">
                    | {resumeData.education.university}
                  </p>
                  <p className="p-1">{resumeData.education.degree}</p>
                  <p className="p-1">CGPA | {resumeData.education.cgpa}</p>
                </div>
              </div>

              {/* Social Profiles Section */}
              <div className="bg-[#f8f8f8] dark:bg-[#4b5361] dark:text-white text-black p-4 my-2 rounded-2xl drop-shadow transition duration-100 hover:shadow-xl">
                <div className="md:text-2xl text-xl md:font-thin pb-2">
                  SOCIAL & CODING PROFILES
                </div>
                <div className="text-base md:text-base flex flex-col md:flex-row md:justify-start">
                  {resumeData.socialProfiles.map((profile, index) => {
                    return (
                      <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>
                          <p className="flex p-1 md:pl-4">
                            <div className="mr-2" >{getImageByName(profile.icon)} </div> {profile.name} 
                          </p>
                        </button>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Coursework Section */}
              <div className="bg-[#f8f8f8] dark:bg-[#4b5361] dark:text-white text-black p-4 my-2 rounded-2xl drop-shadow transition duration-100 hover:shadow-xl">
                <div className="md:text-2xl text-xl md:font-thin">
                  COURSEWORK
                </div>
                <div className="text-[16px] md:text-[14px]">
                  <p className="py-2 font-semibold">| UNDERGRADUATE</p>
                  <ul className="marker:text-[#2271ef] dark:marker:text-white list-disc pl-5 space-y-3">
                    <div className="md:flex md:justify-around">
                      <div className="space-y-1 px-2">
                        {resumeData.coursework.undergraduate
                          .slice(0, 4)
                          .map((course, index) => (
                            <li key={index}>
                              <p>{course}</p>
                            </li>
                          ))}
                      </div>
                      <div className="space-y-1 px-2">
                        {resumeData.coursework.undergraduate
                          .slice(4)
                          .map((course, index) => (
                            <li key={index + 4}>
                              <p>{course}</p>
                            </li>
                          ))}
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-[#f8f8f8] dark:bg-[#4b5361] dark:text-white text-black p-4 my-2 rounded-2xl drop-shadow transition duration-100 hover:shadow-xl">
                <div className="md:text-2xl text-xl md:font-thin">SKILLS</div>
                <p className="py-2 font-semibold">| PROGRAMMING AND TOOLS</p>
                <div className="md:flex md:justify-around text-[16px] md:text-[14px]">
                  <div>
                    <p className="py-2 font-semibold">Languages</p>
                    <ul className="marker:text-[#2271ef] dark:marker:text-white list-disc pl-5 space-y-1">
                      {resumeData.skills.languages.map((language, index) => (
                        <li key={index}>
                          <p>{language}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="py-2 font-semibold">Web Development</p>
                    <ul className="marker:text-[#2271ef] dark:marker:text-white list-disc pl-5 space-y-1">
                      {resumeData.skills.webDevelopment.map((tool, index) => (
                        <li key={index}>
                          <p>{tool}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="py-2 font-semibold">
                      Libraries and Frameworks
                    </p>
                    <ul className="marker:text-[#2271ef] dark:marker:text-white list-disc pl-5 space-y-1">
                      {resumeData.skills.librariesFrameworks.map(
                        (framework, index) => (
                          <li key={index}>
                            <p>{framework}</p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="bg-[#f8f8f8] dark:bg-[#4b5361] dark:text-white text-black p-4 my-2 rounded-2xl drop-shadow transition duration-100 hover:shadow-xl">
                <div className="md:text-2xl text:xl md:font-thin">
                  EXPERIENCE
                </div>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="text-[16px] md:text-[14px]">
                    <p className="py-2 font-semibold">
                      |{exp.company} |{exp.position}
                    </p>
                    <p className="pb-2 font-semibold text-slate-500 dark:text-slate-200">
                      |{exp.duration} | {exp.type}
                    </p>
                    <ul className="marker:text-[#2271ef] dark:marker:text-white list-disc pl-5 space-y-3">
                      <div className="">
                        <div className="space-y-1 px-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>
                              <p>
                                <span className="font-semibold">
                                  {resp.title}
                                </span>{" "}
                                {resp.description}
                              </p>
                            </li>
                          ))}
                        </div>
                      </div>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/*right side*/}
            <div className="md:w-[50%] mx-auto px-4 md:py-2 border-r-[#d3d3d3] my-4">
              {/* Projects Section */}
              <div className="bg-[#f8f8f8] dark:bg-[#4b5361] dark:text-white text-black p-4 my-2 rounded-2xl drop-shadow transition duration-100 hover:shadow-xl">
                <div className="md:text-2xl text:xl md:font-thin">PROJECTS</div>
                <div className="text-[16px] md:text-[14px]">
                  {resumeData.projects.map((project, index) => (
                    <React.Fragment key={index}>
                      <p className="py-2 font-semibold">
                        |{project.name} |{project.category}
                      </p>
                      <p className="pb-2 font-semibold text-slate-500 dark:text-slate-200">
                        {project.technologies}
                      </p>
                      <ul className="marker:text-[#2271ef] dark:marker:text-white list-disc pl-5 space-y-3">
                        <div className="">
                          <div className="space-y-1 px-2">
                            {project.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>
                                <p>
                                  {detail.title && (
                                    <span className="font-semibold">
                                      {detail.title}
                                    </span>
                                  )}{" "}
                                  {detail.description}
                                </p>
                              </li>
                            ))}
                          </div>
                        </div>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="bg-[#f8f8f8] dark:bg-[#4b5361] dark:text-white text-black p-4 my-2 rounded-2xl drop-shadow transition duration-100 hover:shadow-xl">
                <div className="md:text-2xl text:xl md:font-thin">
                  ACHIEVEMENTS
                </div>
                <div className="text-[16px] md:text-[14px]">
                  <p className="py-2 font-semibold">
                    |PERSONAL & PROFESSIONAL ACHIEVEMENTS
                  </p>
                  <ul className="marker:text-[#2271ef] dark:marker:text-white list-disc pl-5 space-y-3">
                    <div className="">
                      <div className="space-y-3 px-2">
                        {resumeData.achievements.map((achievement, index) => (
                          <li key={index}>
                            <p>{achievement}</p>
                          </li>
                        ))}
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              {/* Roles and Responsibilities Section */}
              <div className="bg-[#f8f8f8] dark:bg-[#4b5361] dark:text-white text-black p-4 my-2 rounded-2xl drop-shadow transition duration-100 hover:shadow-xl">
                <div className="md:text-2xl text:xl md:font-thin">
                  ROLES AND RESPONSIBILITIES
                </div>
                <div className="text-[16px] md:text-[14px]">
                  {resumeData.rolesResponsibilities.map((role, index) => (
                    <React.Fragment key={index}>
                      <p className="py-2 font-semibold">
                        |{role.role} |{role.organization}
                      </p>
                      <p className="pb-2 font-semibold text-slate-500 dark:text-slate-200">
                        |{role.duration}
                      </p>
                      <ul className="marker:text-[#2271ef] dark:marker:text-white list-disc pl-5 space-y-3">
                        <div className="">
                          <div className="space-y-1 px-2">
                            {role.achievements.map(
                              (achievement, achievementIndex) => (
                                <li key={achievementIndex}>
                                  <p>{achievement}</p>
                                </li>
                              )
                            )}
                          </div>
                        </div>
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download and Upload Buttons */}
          <div className="m-6 w-[fit-content] mx-auto flex gap-4">
            {isLoggedIn && isAdmin === "T" ? (
              <>
                <Button
                  className="p-2 text-md h-12 w-28 rounded-lg drop-shadow-md dark:bg-[#464b55] text-[#2271ef] border hover:border border-[#2271ef] duration-[100ms]"
                  onClick={() => setShowFileUploadModal(true)}
                >
                  Upload
                </Button>
                <UploadFileModal
                  showFileUploadModal={showFileUploadModal}
                  setShowFileUploadModal={setShowFileUploadModal}
                  title="Upload Resume"
                  handleFileUpload={handleFileUpload}
                  resumeVersions={resumeVersions}
                />
              </>
            ) : (
              <></>
            )}
            <div className="flex items-center">
              <SingleSelect
                suffixIcon={null}
                bordered={false}
                onChange={handleVersionSelect}
                options={resumeOptions}
                classname="h-12 w-24 border border-[#2271ef] border-r-0 rounded-r-none rounded-l-lg"
                placeholder={
                  <div className="text-[#2271ef] pl-1.5">Download</div>
                }
              />
              <Button
                className="p-2 border border-[#2271ef] dark:bg-transparent rounded-l-none rounded-r-lg h-12"
                onClick={downloadResume}
              >
                <DownloadOutlined className="text-[#2271ef]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
