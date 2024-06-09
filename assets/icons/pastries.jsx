import React from "react";
import Svg, { G, Path, Rect, Polygon } from "react-native-svg";

function Pastries({ size = 24, color = "" }) {
  return (
    <Svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="#000000"
      stroke="#000000"
      strokeWidth="3.072"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth="0" />
      <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <G id="SVGRepo_iconCarrier">
        <Path 
          fill="#FEDCD7"
          d="M509.21,218.149C490.913,94.714,384.523,0,256,0C114.616,0,0,114.616,0,256 c0,124.525,88.918,228.267,206.72,251.242L509.21,218.149z"
        />
        <Path 
          fill="#FCB9B0"
          d="M512,256c0-12.862-0.961-25.499-2.792-37.851l-77.069-77.07L44.522,345.043L206.72,507.242 C222.669,510.353,239.142,512,256,512C397.385,512,512,397.385,512,256z"
        />
        <Polygon
          fill="#813115"
          points="445.217,196.552 445.217,333.913 256,333.913 256,163.161 "
        />
        <Path 
          fill="#692811"
          d="M445.217,172.522v24.031c-14.225,0-21.971,3.873-28.182,6.99c-5.343,2.66-9.561,4.775-18.844,4.775 c-9.294,0-13.512-2.115-18.844-4.775c-6.222-3.117-13.958-6.99-28.182-6.99c-14.225,0-21.96,3.873-28.182,6.99 c-5.343,2.66-9.55,4.775-18.844,4.775c-9.294,0-13.501-2.115-18.844-4.775c-6.222-3.117-13.958-6.99-28.182-6.99H256V128h144.696 C425.183,128,445.217,148.035,445.217,172.522z"
        />
        <Polygon
          fill="#934D2B"
          points="215.096,152.42 215.096,333.913 304.139,333.913 304.139,208.317 "
        />
        <Path 
          fill="#813115"
          d="M304.139,172.522v35.795c-9.294,0-13.501-2.115-18.844-4.775c-6.222-3.117-13.958-6.99-28.182-6.99 c-14.225,0-21.96,3.873-28.182,6.99c-4.274,2.126-7.825,3.907-13.835,4.53V128h44.522C284.104,128,304.139,148.035,304.139,172.522z "
        />
        <Path 
          fill="#A56840"
          d="M256,172.522v161.391H105.739L161.391,128h50.087C235.965,128,256,148.035,256,172.522z"
        />
        <Path 
          fill="#B78456"
          d="M161.391,128v205.913H66.783V172.522c0-24.487,20.035-44.522,44.522-44.522H161.391z"
        />
        <Path 
          fill="#FB9789"
          d="M233.739,172.522v128h-72.348L128,225.391l33.391-75.13h50.087 C223.755,150.261,233.739,160.245,233.739,172.522z"
        />
        <Path 
          fill="#FCB9B0"
          d="M161.391,150.261v150.261H89.043v-128c0-12.277,9.984-22.261,22.261-22.261H161.391z"
        />
        <Polygon
          fill="#FFE376"
          points="434.087,345.043 411.826,384 256,384 234.296,339.478 "
        />
        <G>
          <Polygon
            fill="#FFF3AD"
            points="100.174,384 256,384 256,333.913 77.913,345.043 "
          />
          <Polygon
            fill="#FFF3AD"
            points="256,322.783 245.009,333.913 256,345.043 467.478,345.043 467.478,322.783 "
          />
        </G>
        <Rect
          x="44.522"
          y="322.783"
          fill="#FFFFFF"
          width="211.478"
          height="22.261"
        />
        <Rect
          x="394.787"
          y="282.384"
          transform="matrix(-0.998 0.0629 -0.0629 -0.998 879.2228 559.3481)"
          fill="#63842C"
          width="72.039"
          height="22.26"
        />
        <Path 
          fill="#F94C10"
          d="M436.454,293.149l-111.784-4.102l-110.383,18.114c0.558,8.842,7.912,15.559,16.654,15.555h177.723 c0.591,0.007,1.182-0.008,1.771-0.045C425.776,321.703,437.422,308.489,436.454,293.149z"
        />
        <Path 
          fill="#FA690E"
          d="M436.454,293.149l-222.167,14.012c-0.558-8.842,5.885-16.497,14.56-17.592l176.323-22.262 c0.585-0.081,1.173-0.141,1.762-0.178C422.272,266.162,435.487,277.808,436.454,293.149z"
        />
        <G>
          <Rect
            x="111.304"
            y="256"
            fill="#FB9789"
            width="22.261"
            height="22.261"
          />
          <Rect
            x="111.304"
            y="211.478"
            fill="#FB9789"
            width="22.261"
            height="22.261"
          />
        </G>
        <Rect
          x="189.217"
          y="172.522"
          fill="#FA7461"
          width="22.261"
          height="22.261"
        />
      </G>
    </Svg>
  );
}

export default Pastries;
