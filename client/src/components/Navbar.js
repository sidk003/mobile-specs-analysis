import React from "react";
import { toggleDarkmode } from "reacthalfmoon";

export const Navbar = () => {
  return (
    <div className="m-20 p-20">
      <button className="btn" onClick={toggleDarkmode}>
        &#127769;
      </button>
    </div>
  );
};
