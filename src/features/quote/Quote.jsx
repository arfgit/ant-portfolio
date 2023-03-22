import React from "react";

const Quote = ({ quote, author }) => {
  return (
    <div className="bg-deep-blue font-karla p-5 rounded-lg">
      <p className="text-white text-3xl font-semibold">&ldquo;{quote}&rdquo;</p>
      <p className="text-white sm:text-base text-lg font-normal mt-4">
        &mdash; {author}
      </p>
    </div>
  );
};

export default Quote;
