import React from "react";

/**
 * ImageResize Component
 * @param {string} src - The source URL or imported image.
 * @param {string} alt - The alt text for the image.
 * @param {number} width - The width of the image in pixels.
 * @param {number} height - The height of the image in pixels.
 */
const ImageResize = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default ImageResize;
