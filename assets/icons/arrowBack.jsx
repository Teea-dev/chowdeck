import React from "react";
import Svg, { G, Path } from "react-native-svg";

function BackIcon({ color = "", size = 24 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth="0" />

      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <G id="SVGRepo_iconCarrier">
        <Path
          d="M8 17L3 12M3 12L8 7M3 12H21"
          stroke="#000000"
          strokeWidth="1.8160000000000001"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default BackIcon;
