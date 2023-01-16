import React from "react";

const TechStackIcons = ({ stack }) => {
  return (
    <div className="flex justify-center justify-items-center md:justify-start my-5 gap-2">
      {stack?.map(({ name, image }, i) => (
        <img key={i} alt={name} src={image} title={name} />
      ))}
    </div>
  );
};

export default TechStackIcons;
