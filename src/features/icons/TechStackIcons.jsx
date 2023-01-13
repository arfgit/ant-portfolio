import React from "react";

const TechStackIcons = ({ stack }) => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-5">
      {stack?.map((icon, i) => (
        <img key={i} alt="linkedin-link" src={icon} />
      ))}
    </div>
  );
};

export default TechStackIcons;
