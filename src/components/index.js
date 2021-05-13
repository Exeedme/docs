import React from "react";

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

export const HStack = ({ children, ...rest }) => (
  <div style={{ display: "flex", direction: "row", ...rest }}>{children}</div>
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
