import React from "react";
import help from "../assets/help.jpg";
import charity from "../assets/charity-box.png";
import { Ripple } from "@progress/kendo-react-ripple";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return <IntroBody />;
};

const IntroBody = () => {
  return (
    <>
      <div className="container font-sans bg-white">
        <div className=" flex xs:flex flex-col-reverse sm:flex-row">
          <div className="flex-1">
            <div className="m-8 sm:m-12">
              <span className="text-xl sm:text-2xl md:text-2xl lg:text-4xl ">
                Charitable{" "}
                <span className="text-sm text-charity sm:text-sm md:text-base lg:text-xl">
                  Crowdfunding
                </span>
              </span>
              <br />
              <span className="text-xs mt-5 block sm:text-lg mt-5 block">
                Raise Funds Online for personal, public causes
              </span>
              <br />
              <Ripple>
                <Link to="/create-fundraiser">
                  <button className="k-button text-base font-semibold px-6 py-2 rounded-lg">
                    <img
                      src={charity}
                      width="24"
                      height="24"
                      alt="fundraiser"
                    />
                    Start a fundraiser - Its's free
                  </button>
                </Link>
              </Ripple>
              <br />
              <div className="flex mt-10 text-center">
                <div className="border-r-2 border-gray-200 flex-grow sm:w-40 sm:flex-none">
                  <span className="font-medium text-3xl sm:text-5xl">0</span>
                  <br />
                  <span>Fundraisers</span>
                </div>
                <div className="border-r-2 border-gray-200 flex-grow sm:w-40 sm:flex-none">
                  <span className="font-medium text-3xl sm:text-5xl">0</span>
                  <br />
                  <span>Raised</span>
                </div>
                <div className="flex-grow sm:w-40 sm:flex-none">
                  <span className="font-medium text-3xl sm:text-5xl">0</span>
                  <br />
                  <span>Donations</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={help} width="550" height="400" alt="charitable help" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
