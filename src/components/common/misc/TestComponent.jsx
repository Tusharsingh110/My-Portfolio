import React from "react";
import { useToast } from "../../../hooks/useToast";

const TestComponent = () => {
  const toast = useToast();
  function showToast(type) {
    console.log("Show toast type:",type);
    toast(type, `This is the ${type} toast.`,5000);
  }
  return (
    <>
      <div className="section">
        <h1>Toast</h1>
        <div className="flex gap-2">
          <button className="btn hover:bg-slate-200" onClick={() => showToast("success")}>Success</button>
          <button className="btn hover:bg-slate-200" onClick={() => showToast("error")}>Error</button>
          <button className="btn hover:bg-slate-200" onClick={() => showToast("warn")}>Warn</button>
          <button className="btn hover:bg-slate-200" onClick={() => showToast("info")}>Info</button>
        </div>
      </div>
    </>
  );
};

export default TestComponent;
