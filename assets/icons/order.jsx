import React from "react";
import Svg, { G, Path } from "react-native-svg";

const Order = ({ color = "#83829A", size = 25 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <G strokeWidth="0" />

      <G strokeLinecap="round" strokeLinejoin="round" />

      <G>
        <Path
          fill={color}
          d="M60.53,18.71A2,2,0,0,0,59,18H48.85A15,15,0,0,0,34,5H30A15,15,0,0,0,15.15,18H5a2,2,0,0,0-1.53.71A2,2,0,0,0,3,20.35l5.33,30.3A6.51,6.51,0,0,0,14.77,56H49.23a6.51,6.51,0,0,0,6.41-5.36L61,20.35A2,2,0,0,0,60.53,18.71ZM30,9h4a11,11,0,0,1,10.81,9H19.19A11,11,0,0,1,30,9ZM51.71,49.94A2.52,2.52,0,0,1,49.23,52H14.77a2.5,2.5,0,0,1-2.47-2L7.38,22H56.62Z"
        />
      </G>
    </Svg>
  );
};

export default Order;
