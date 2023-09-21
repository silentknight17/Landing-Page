import { HACKATHON_CONTENT } from "./config/constant.js";
import JudgingCriteria from "./components/JudgingCriteria.js";
import Timer from "./components/Timer.js";
import arrow from "../src/images/arrow.svg";
import hackathonLogo from "../src/images/hackathonLogo.svg";
import intelligent from "../src/images/intelligent.svg";
import lady from "../src/images/lady.svg";
import man from "../src/images/man.svg";
import pinkLine from "../src/images/pinkLine.svg";
import pinkStar from "../src/images/pinkStar.svg";
import star from "../src/images/star.svg";
import starWhite from "../src/images/starWhite.svg";
import theBigIdea from "../src/images/theBigIdea.svg";
import title from "../src/images/title.svg";

const App = () => {
  const currentTimeMillis = Date.now();

  const expiryTime = currentTimeMillis + 3 * 60 * 60 * 1000; // 3 hours timer from current date!

  return (
    <div className="w-full" style={{ background: "#150E28" }}>
      <div className="p-9 flex justify-between border-b-2 border-white border-opacity-20">
        <img src={hackathonLogo} className="h-11 w-36" alt="Hackathon Logo" />
        <div
          className="text-white font-normal text-base flex space-x-14"
          style={{ fontFamily: "Montserrat" }}>
          <button>Timeline</button>
          <button>Overview</button>
          <button>FAQs</button>
          <button>Contact</button>
          <div
            className="px-12 py-4 cursor-pointer"
            style={{
              borderRadius: "4px",
              background:
                "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
            }}>
            Register
          </div>
        </div>
      </div>
      <div className="flex mt-8 justify-between">
        <img src={star} alt="Star" className="mt-16 ml-20" />
        <div className="flex flex-col items-end mr-14">
          <div className="text-4xl italic" style={{ color: "#FFFFFF", fontFamily: "Montserrat" }}>
            Igniting a Revolution in HR Innovation
          </div>
          <img src={pinkLine} alt="pinkLine" className="h-2" />
        </div>
      </div>
      <div className="mt-28 flex justify-end border-b-2 border-white h-[600px] border-opacity-20">
        <div className="flex flex-col">
          <img src={title} alt="title" className="h-[236px] w-[722px]" />
          <div
            className="text-xl text-white font-normal w-[420px] mt-2"
            style={{ fontFamily: "Montserrat" }}>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
          </div>
          <div
            className="px-12 py-4 cursor-pointer w-[172px] text-white mt-10 h-[53px]"
            style={{
              borderRadius: "4px",
              background:
                "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
            }}>
            Register
          </div>
          <Timer duration={expiryTime} />
        </div>
        <div className="flex justify-end">
          <img src={starWhite} alt="StarWhite" className="h-8 w-8 relative" />
          <img src={man} alt="man" className="h-[715px] w-[828px] absolute top-[250px]" />\
          <img
            src={intelligent}
            alt="intelligent"
            className="w-[667px] h-[641px] relative "
            style={{ top: "-100px" }}
          />
        </div>
      </div>

      <div className="py-16 px-28 border-b-2 border-white border-opacity-20 flex">
        <img src={pinkStar} alt="Pink Star" className="w-5 h-5 mt-40 mr-8" />
        <div className="flex items-end">
          <img src={theBigIdea} alt="The Big Idea" className="w-[490px] h-[477px]" />
          <img src={arrow} alt="Arrow" className="w-14 h-12" />
        </div>

        <div className="flex flex-col items-start ml-20">
          <div className="flex mt-40 items-center">
            <div className="mr-[97px] text-[32px]" style={{ fontFamily: "Clash Display" }}>
              <div className="text-white ">Introduction to getlinked </div>
              <div className="" style={{ color: "#D434FE" }}>
                tech Hackathon 1.0
              </div>
            </div>
            <img src={pinkStar} alt="Pink Star" className="w-7 h-7 mr-8" />
          </div>
          <div
            style={{ fontFamily: "Montserrat" }}
            className="w-[460px] text-sm text-white font-normal">
            {HACKATHON_CONTENT}
          </div>
        </div>
      </div>
      <div className="py-16 px-36 border-b-2 border-white border-opacity-20 flex items-center">
        <div className="flex items-end justify-end">
          <div className="flex flex-col">
            <img src={starWhite} alt="StarWhite" className="h-8 w-8 ml-60" />
            <div className="mr-[97px] text-[32px]" style={{ fontFamily: "Clash Display" }}>
              <div className="text-white ">Rules and</div>
              <div className="" style={{ color: "#D434FE" }}>
                Guidelines
              </div>
            </div>
            <div
              style={{ fontFamily: "Montserrat" }}
              className="w-[460px] text-sm text-white font-normal">
              {HACKATHON_CONTENT}
            </div>
          </div>
          <img src={star} alt="StarWhite" className="h-8 w-8 relative ml-8" />
        </div>
        <img src={lady} alt="Lady" className="w-[664px] h-[664px] ml-8" />
      </div>

      <JudgingCriteria image={pinkStar} starWhite={star} />
    </div>
  );
};

export default App;
