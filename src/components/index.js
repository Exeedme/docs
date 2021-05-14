import React from "react";
import "./index.scss";

export const Image = ({ src, alt, ...rest }) => (
  <img
    src={src}
    alt={alt}
    style={{
      alignSelf: "center",
      objectFit: "cover",
      marginBottom: "8px",
      ...rest,
    }}
  />
);

export const Stack = ({ children, classes, ...rest }) => (
  <div className={`stack ${classes && classes}`} style={{ ...rest }}>
    {children}
  </div>
);

export const HStack = ({ children, ...rest }) => (
  <Stack classes="horizontal" {...rest}>
    {children}
  </Stack>
);

export const VStack = ({ children, ...rest }) => (
  <Stack classes="vertical" {...rest}>
    {children}
  </Stack>
);

export const Text = ({ children, classes, ...rest }) => (
  <p className={`text ${classes && classes}`} style={{ ...rest }}>
    {children}
  </p>
);

export const Bold = ({ children, ...rest }) => (
  <Text classes="bold" {...rest}>
    {children}
  </Text>
);

export const Note = ({ children, ...rest }) => (
  <div
    style={{
      paddingRight: "16px",
      paddingLeft: "16px",
      paddingTop: "12px",
      paddingBottom: "12px",
      borderRadius: "8px",
      background: "#e3c364",
      color: "black",
      ...rest,
    }}
  >
    <div style={{ color: "black", fontSize: "1.2rem", fontWeight: "600" }}>
      Note
    </div>
    {children}
  </div>
);
