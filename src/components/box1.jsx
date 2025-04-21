import gmail from "../assets/gmail.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import upRight from "../assets/upRight.png";

function SocialCards({ company, tag, src, growth }) {
  return (
    <div className="flex justify-between  items-center bg-white rounded-full w-full px-3 py-2">
      <div className="flex gap-2 items-center">
        <div className="p-2 rounded-full bg-[#f5f7fb]">
          <img src={src} alt="social-icons" className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">{company}</p>
          <span className="text-[9px] text-gray-500">{tag}</span>
        </div>
      </div>
      <div className="bg-[#06a33d] rounded-2xl flex items-center text-white px-2 py-0.5">
        <span className="text-[10px]">{growth}</span>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="w-full h-full bg-[#f5f7fba7] flex flex-col justify-between items-center gap-3 rounded-3xl p-4">
      <div className="flex justify-between items-center w-full">
        <p className="text-md font-medium">Integration Tools</p>
        <img
          src={upRight}
          alt="up-right-icon"
          className="p-2 bg-white rounded-full w-7"
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-3 max-md:flex-col items-center w-full">
          <SocialCards
            src={gmail}
            company="Gmail"
            tag="Email Sent: 1,200"
            growth="+8%"
          />
          <SocialCards
            src={facebook}
            company="Facebook"
            tag="Ad CTR: 4.2%"
            growth="+6%"
          />
        </div>
        <div className="flex gap-3 max-md:flex-col items-center w-full">
          <SocialCards
            src={instagram}
            company="Instagram"
            tag="Profile Visits: 18.5k"
            growth="+12%"
          />
          <SocialCards
            src={twitter}
            company="X (Twitter)"
            tag="Tweets: 150"
            growth="+5%"
          />
        </div>
      </div>
    </div>
  );
}

export default Box1;
