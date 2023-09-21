import React from "react";
import ellipse from "../images/ellipse.svg";
import planning from "../images/planning.svg";
const JudgingCriteria = ({ image, starWhite }) => {
  return (
    <div className="py-16 px-36 border-b-2 border-white border-opacity-20 flex items-center">
      <div className="flex items-end justify-end">
        <div className="flex flex-col">
          <img src={image} alt="pinkStar" className="w-8 h-8 ml-24" />
          <div className="mt-16">
            <img src={ellipse} alt="Ellipse" className="w-30 h-30 absolute left-48" />
            <img src={planning} alt="Planning" className="w-[460px] h-[587px] relative -top-12" />
          </div>
        </div>
        <img src={starWhite} alt="Star White" className="w-8 h-8 -translate-y-40" />
      </div>
    </div>
  );
};

export default JudgingCriteria;
