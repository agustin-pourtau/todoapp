import React from "react";

const Squircle = ({ children }) => (
  <section>
    <div
      className="container"
      style={{
        clipPath: `url(#squircleClip)`,
        color: "#FEFCFD",
        backgroundColor: "#2D3142",
        height: "auto",
        width: "100%",
        padding: "1rem"
      }}
    >
      {children}
    </div>

    <svg width="0" height="0" viewBox="0 0 10 10">
      <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
        <path
          fill="red"
          stroke="none"
          d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
        />
      </clipPath>
    </svg>
  </section>
);

export default Squircle;
