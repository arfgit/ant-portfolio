import React from "react";

const TechStackIcons = ({ stack }) => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-5">
      {stack?.map(({ name, image }, i) => (
        <img key={i} alt={name} src={image} title={name} />
      ))}
    </div>
  );
};

export default TechStackIcons;
