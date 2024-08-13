import React from "react";
import Svg, { G, Path } from "react-native-svg";

const Bar = ({ color = "", size = 25 }) => {
  return (
    <Svg
      fill="#F3F3F3"
      viewBox="-6.5 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
      <G
        id="SVGRepo_tracerCarrier"
        stroke-Linecap="round"
        stroke-Linejoin="round"
      ></G>
      <G id="SVGRepo_iconCarrier">
        <Path d="M8.469-1.156h2.25v29.813h-2.25v-29.813z"></Path>
      </G>
    </Svg>
  );
};

export default Bar;
