import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const ChatRoundDots = ( {color ='#83829A', size= 25}) => {
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <Path
          opacity="0.5"
          d="M8 12H8.009M11.991 12H12M15.991 12H16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default ChatRoundDots;
