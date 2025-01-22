import React from "react";

const Img = ({ src, alt, loading = "lazy", ...rest }) => {
  return <img src={src} alt={alt || "an image"} loading={loading} {...rest} />;
};

export default Img;
