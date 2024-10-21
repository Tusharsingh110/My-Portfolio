import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { PlusOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useToast } from "../hooks/useToast";
import { deleteSkillById, fetchSkills } from "../services/api.service";

export default function Skills() {
  const toast = useToast();
  const [skillsdata, setSkillsdata] = useState([]);
  const [fetching, setFetching] = useState(false);
  const { isLoggedIn, isAdmin } = useSelector((state) => state.auth);

  const fetchSkillsData = async () => {
    try {
      const { statusCode, message, data } = await fetchSkills();
      if (statusCode == "200" && data?.length) {
        setSkillsdata(data);
      } else {
        toast("info", "No Skills found.");
      }
    } catch (error) {
      toast("error", "Failed in fetching skills.");
    }
  };


  useEffect(() => {
    fetchSkillsData();
  }, []);

  const allSkills = skillsdata.map((skill) => (
    <SkillCard
      key={skill.id}
      id={skill.id}
      source={skill.imgsrc}
      label={skill.label}
      fetchSkillsData={fetchSkillsData}
    />
  ));

  const handleAddSkill = () => {
    console.log("New skill added");
  };

  return (
    <div className="bg-[#2271ef] dark:bg-[#1d1f23] w-full py-10 duration-[500ms]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center text-[#fff] py-10 text-[20px] font-bold md:text-4xl">
          I have worked with these technologies{" "}
        </div>
        <div className="md:text-xl sm:text-[25px] text-white text-center grid lg:gap-5 md:gap-3 lg:grid-cols-5 sm:grid-cols-3">
          {allSkills}
          {isLoggedIn && isAdmin === "T" && (
            <SkillCard>
              <Button
                className="h-full w-full rounded-xl"
                onClick={handleAddSkill}
                icon={<PlusOutlined />}
                type="dashed"
              >
                Add Skill
              </Button>
            </SkillCard>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillCard({ id, source, label, children, fetchSkillsData }) {
  const toast = useToast();
  const { isLoggedIn, isAdmin } = useSelector((state) => state.auth);
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => {
    setMouseEnter(true);
  };
  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  const deleteSkill = async (id) => {
    console.log("deleteSkill id:", id);
    try {
      const {statusCode, message } = await deleteSkillById(id);
      if(statusCode == "200") {
        toast('success', message);
        fetchSkillsData();
      }
    } catch (error) {
      toast('error', "Failed to delete skill.");
    }
  };



  return (
    <>
      <div
        className=" h-[150px] bg-[#EDF3FD] dark:bg-[#33373f] p-4 rounded-2xl shadow-xl drop-shadow-lg w-[150px] mx-auto my-2 hover:scale-105 transition duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={source} alt={label} />
        {children}
        {isLoggedIn && isAdmin === "T" && mouseEnter && id && (
          <Button
            onClick={() => {
              deleteSkill(id);
            }}
            className="absolute -top-2 -right-2 w-2 text-xl rounded-full"
          >
            <CloseCircleOutlined />
          </Button>
        )}
      </div>
    </>
  );
}
