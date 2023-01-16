import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../../features/icons/SocialMediaIcons";

const Footer = ({ setSelectedPage }) => {
  const year = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <h4 className="font-montserrat text-3xl font-bold  hover:text-yellow ease-in transition duration-200">
            <AnchorLink href="#home" onClick={() => setSelectedPage("home")}>
              {"Anthony Feliz"}
            </AnchorLink>
          </h4>
          <p className="font-montserrat text-md">
            ©{year()} FELIZ. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
