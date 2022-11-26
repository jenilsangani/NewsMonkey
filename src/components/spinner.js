import React from "react";
import loading from "./loading.gif";

const spinner = () => {
  return (
    <div className="text-center">
      <img
        style={{
          paddingBottom: "60px",
          paddingTop: "20px",
          height: "auto",
          width: "40px",
        }}
        src={loading}
        alt="loading"
      />
    </div>
  );
};

export default spinner;
