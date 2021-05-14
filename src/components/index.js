import React from "react";
import "./index.scss";

export const Image = ({ src, alt, ...rest }) => (
  <img
    src={src}
    alt={alt}
    style={{
      objectFit: "cover",
      marginBottom: "8px",
      ...rest,
    }}
  />
);

export const Stack = ({ children, spacing, classes, ...rest }) => (
  <div
    className={`stack ${classes && classes}`}
    style={{ gap: spacing, ...rest }}
  >
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

export const Note = ({ children, title, ...rest }) => (
  <div
    style={{
      paddingRight: "16px",
      paddingLeft: "16px",
      paddingTop: "12px",
      paddingBottom: "12px",
      borderRadius: "8px",
      border: "1px solid",
      borderColor: "#666",
      background: "#333",
      color: "inherit",
      ...rest,
    }}
  >
    <div style={{ color: "inherit", fontSize: "1.2rem", fontWeight: "600" }}>
      {title || "Note"}
    </div>
    {children}
  </div>
);

export const Warning = ({ children, title, ...rest }) => (
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
      {title || "Warning"}
    </div>
    {children}
  </div>
);
