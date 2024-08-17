import { ConfigProvider, Select } from "antd";
import React from "react";
import { cn } from "../../../utils/cn.utils";

const testOptions = [
  { value: "0", label: "0" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
  { value: "disabled", label: "Disabled", disabled: true },
];

const SingleSelect = ({
  options = testOptions,
  classname,
  defaultValue,
  value,
  placeholder,
  ...props
}) => {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#2271ef", // Set primary color (e.g., for selected option)
        colorText: "#2271ef"
      },
      components: {
        Select: {
          controlItemBgHover: "#EDF3FD", // Set background color for hover state
          optionSelectedBg: "#2271ef",
          optionSelectedColor: "#fff",
        },
      },
    }}
  >
      <Select
        className={cn(classname)}
        options={options}
        placeholder={placeholder}
        {...props}
      ></Select>
    </ConfigProvider>
  );
};

export default SingleSelect;
