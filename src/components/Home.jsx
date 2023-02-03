import React from "react";
import hero from "../assets/hero.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="section flex items-center xl:justify-center justify-start flex-wrap"
      id="home"
    >
      <div className="flex flex-col items-start gap-10">
        <div className="sm:text-[2.5rem] text-[1.8rem] font-bold">
          Delicious <br /> Paratha's is Waiting <br /> For you
        </div>
        <div className="btn">
          <a href="#">View Menu</a>
          <FaArrowRight />
        </div>
      </div>
      <div className="min-w-[200px] justify-self-center md:w-[600px]">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
