import React from "react";
import Svg, { G, Path, Circle, ClipPath, Defs, Rect } from "react-native-svg";

function SearchIcon({ color = "", size = {} }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke=""
      strokeWidth="1.6"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth="1.6" />

      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <G id="SVGRepo_iconCarrier">
        <G clip-path="url(#clip0_15_152)">
          <Circle
            cx="10.5"
            cy="10.5"
            r="6.5"
            stroke={color}
            strokeLinejoin="round"
          />
          <Path
            d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_15_152">
            <Rect width={size} height={size} fill="none" />
          </ClipPath>
        </Defs>
      </G>
    </Svg>
  );
}

export default SearchIcon;
