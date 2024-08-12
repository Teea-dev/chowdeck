import React from "react";
import Svg, { G, Path } from "react-native-svg";

function NextNavIcon({ color = "#000000", size = {} }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <G id="SVGRepo_bgCarrier" strokeWidth="3" />

      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <G id="SVGRepo_iconCarrier">
        <G data-name="arrow right" id="arrow_right">
          <Path
            d="M10.05,29.73a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L20.66,16.71a1,1,0,0,0,0-1.42L9.34,4a1,1,0,0,1,1.42-1.42L22.07,13.88a3,3,0,0,1,0,4.24L10.76,29.44A1,1,0,0,1,10.05,29.73Z"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
}

export default NextNavIcon;

