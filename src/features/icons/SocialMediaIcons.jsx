const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-5">
      <a
        className="hover:opacity-50 ease-in transition duration-200"
        href="http://www.linkedin.com/in/anthonyfeliz"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        <img alt="linkedin-link" src="../assets/linkedIn-invert-48.png" />
      </a>
      <a
        className="hover:opacity-50 ease-in transition duration-200"
        href="https://github.com/arfgit"
        target="_blank"
        rel="noreferrer"
        title="Github"
      >
        <img alt="github-link" src="../assets/github-inverted-48.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
