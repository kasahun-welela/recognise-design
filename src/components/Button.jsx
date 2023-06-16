import React from "react";

function Button(prop) {
  return (
    <a
      className="m-1 text-center inline-block  border-2 font-medium  px-6 py-3 rounded-3xl "
      href="/"
    >
      {prop.title}
    </a>
  );
}

export default Button;
