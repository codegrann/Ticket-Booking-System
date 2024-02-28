import React from "react";

function ImageContainer({ imageurl }) {
  return (
    <div className=" rounded-full w-ful h-full">
      <img src={imageurl} className="w-full h-full rounded-full" />
    </div>
  );
}

export default ImageContainer;
