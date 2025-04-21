import email from "../assets/email.png";
import iphone from "../assets/iphone.png";
import upRight from "../assets/upRight.png";

function Box2() {
  return (
    <div className="w-full h-full bg-[#f5f7fba7] flex flex-col justify-between items-center p-3 rounded-3xl">
      <div className="flex justify-between items-center w-full">
        <p className="text-md font-medium">Profile Completion</p>
        <img
          src={upRight}
          alt="up-right-icon"
          className="p-2 bg-white rounded-full w-7"
        />
      </div>
      <div className="flex flex-col w-full gap-2 items-center">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-3xl font-medium">87%</h2>
          <span className="px-3 py-2 bg-white text-gray-500 rounded-full text-xs">
            You're Almost There
          </span>
        </div>

        <div className="flex items-center w-full gap-1 py-1.5">
          <div className="flex flex-col w-[35%] gap-1">
            <div className="h-3.5 rounded-full bg-[#06a33d] "></div>
            <span className="text-[7px] pl-0.5">Basic Information</span>
          </div>

          <div className="flex flex-col w-[25%] gap-1 justify-center">
            <div className="h-3.5 rounded-full bg-[#1b76f3] "></div>
            <span className="text-[7px] pl-0.5">Content & Activity</span>
          </div>

          <div className="flex flex-col w-[15%] gap-1 justify-center">
            <div className="h-3.5 rounded-full bg-[#f36700] "></div>
            <span className="text-[7px] pl-0.5">Social Links</span>
          </div>

          <div className="flex flex-col w-[25%] gap-1 justify-center">
            <div className="h-3.5 rounded-full bg-white"></div>
            <span className="text-[7px] pl-0.5 text-gray-400">
              Verification
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start w-full">
          <div>
            <p className="text-sm">Secure Your Account Now!</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-2 p-3 bg-white rounded-full">
              <img src={email} alt="email" className="w-5" />
              <span className="text-xs">Verify by Email</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white rounded-full">
              <img src={iphone} alt="iphone" className="w-5" />
              <span className="text-xs">Enable 2FA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box2;
