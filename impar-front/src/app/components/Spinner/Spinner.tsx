import React, { CSSProperties } from "react";
import { motion } from "framer-motion";



export default function CircleLoader({ color, secondaryColor, width, height, margin }: { color: string, secondaryColor?: string, width?: string, height?: string, margin?: string }) {

  const containerStyle: CSSProperties = {
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    margin:""
  };

  const circleStyle: CSSProperties = {
    width: "100%",
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    flexWrap: "wrap",
    borderRadius: "50%",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid #3498db",
  };

  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1,
  };

  return (
    <div style={{ ...containerStyle, margin: `${margin ? margin : ""}` }}>
      <div>
        <motion.span
          style={{
            ...circleStyle,
            borderTop: `0.5rem solid ${color ? color : '#db2525'}`,
            border: `0.5rem solid ${secondaryColor ? secondaryColor : "#e9e9e9"}`,
            width: `${width ? width : '3rem'}`,
            height: `${height ? height : '3rem'}`,
          }}
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
      </div>

    </div>
  );
}
