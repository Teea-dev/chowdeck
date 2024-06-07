import React from "react";
import Svg, { G, Polygon } from "react-native-svg";

function CancelIcon({ color = "#000000", size = 15 }) {
  return (
    <>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
      >
        <G id="SVGRepo_bgCarrier" strokeWidth="0" />

        <G
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <G id="SVGRepo_iconCarrier">
         
          <G id="Page-1" strokeWidth="0.00512" fill="none" fillRule="evenodd">
            <G
              id="work-case"
              fill={color}
              transform="translate(91.520000, 91.520000)"
            >
              <Polygon
                id="Close"
                points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
              ></Polygon>
            </G>
          </G>
        </G>
      </Svg>
    </>
  );
}

export default CancelIcon;
