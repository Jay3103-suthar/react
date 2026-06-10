import React from "react";
import Hero from "./hero";
import Arrow from "./arrow";

const Left = () => {
  return (
    <div className="w-1/3 h-full flex justify-between flex-col  px-5 py-5 ">
     <Hero />
     <Arrow />
    </div>
  );
};

export default Left;