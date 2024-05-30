import React from "react";
import Svg, { G, Path, Ellipse } from "react-native-svg";

const Filter = () => {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G strokeWidth="0" />
      <G strokeLinecap="round" strokeLinejoin="round" />
      <G>
        <Path
          d="M11 8L20 8"
          stroke="#33363F"
          strokeWidth="1.176"
          strokeLinecap="round"
        />
        <Path
          d="M4 16L14 16"
          stroke="#33363F"
          strokeWidth="1.176"
          strokeLinecap="round"
        />
        <Ellipse
          cx="7"
          cy="8"
          rx="3"
          ry="3"
          transform="rotate(90 7 8)"
          stroke="#33363F"
          strokeWidth="1.176"
          strokeLinecap="round"
        />
        <Ellipse
          cx="17"
          cy="16"
          rx="3"
          ry="3"
          transform="rotate(90 17 16)"
          stroke="#33363F"
          strokeWidth="1.176"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};

export default Filter;
