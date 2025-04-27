import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 h-[340px] mt-5">
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-3xl font-thin mt-3">
            <b>CogniAI</b>
          </h1>
          <h3 className="text-gray-500 mt-5">
            Our Intelligent platform provides real time
            <br />
            Insights, Predictive analytics, and automation to
            <br />
            optimize performance and efficiency.
          </h3>
        </div>
        <div>
          <h1 className="mt-3 font-thin text-3xl">
            <b>Solutions</b>
          </h1>
          <h3 className="mt-5 text-gray-500">AI Powered Analytics</h3>
          <h3 className="mt-1 text-gray-500">Predictive Insights</h3>
          <h3 className="mt-0.5 text-gray-500">Automation and Optimization</h3>
        </div>
        <div>
          <h1 className="text-3xl font-thin mt-3">
            <b>Resources</b>
          </h1>
          <h3 className="mt-5 text-gray-500">blog and Insights</h3>
          <h3 className="mt-1 text-gray-500">Case Studies</h3>
          <h3 className="mt-0.5 text-gray-500">Webinars & Events</h3>
        </div>
        <div>
          <div className="flex">
            <h1 className="text-3xl  mt-3">Company</h1>
            <p className="bg-green-500 text-black h-8 rounded-xl mt-4 ml-3 p-0.5 w-16 text-center">
              News
            </p>
          </div>
          <h3 className="mt-5 text-gray-500">About</h3>
          <h3 className="mt-1 text-gray-500">Careers</h3>
          <h3 className="mt-0.5 text-gray-500">Press & Media</h3>
        </div>
      </div>
      <div className="flex mt-10 justify-between">
        <div className="flex ml-32 mt-20">
          <h1 className="ml-2">2025 CogniAI All Rights Reserved.</h1>
        </div>
        <div className="flex mr-56 mt-20">
          <h1 className="ml-2">Back to top</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
