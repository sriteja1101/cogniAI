import userImages from "../assets/userImages.png"
import star from "../assets/star.png"
import starredFile from "../assets/starredFile.png"
import paper from "../assets/paper.png"
import hub from "../assets/hub.png"
import BlackBtn from "./blackBtn"

function AIPowered(){
    return(
        <div className="flex items-center justify-center mt-15">
            <div className="w-[70%] flex flex-col items-center justify-center gap-18 mb-10">
                <div className="w-[85%]">
                    <h2 className="text-3xl font-medium text-center leading-[1.3]">CogniAl is an advanced Al-powered data <br /> analysis platform designed to transform <br /> raw data into actionable insights.</h2>
                </div>
                <div className="flex w-full justify-center items-center">
                    <img src={userImages} alt="userImages" className="bg-[#f46a0025] p-3 rounded-full"/>
                    <div className="w-[6%] h-[4px] bg-[#f46a0025]"></div>
                    <img src={starredFile} alt="starredFile" className="bg-[#f46a0025] p-3 rounded-full"/>
                    <div className="w-[9%] h-[4px] bg-[linear-gradient(to_right,_#f46a0025,_#F46800)]"></div>
                    <img src={star} alt="star" className="bg-[#F46800] p-5 rounded-full ring-[12px] ring-[rgba(244,106,0,0.11)] outline-[25px] outline-[rgba(244,106,0,0.06)]"/>
                    <div className="w-[9%] h-[4px] bg-[linear-gradient(to_left,_#f46a0025,_#F46800)]"></div>
                    <img src={hub} alt="hub" className="bg-[#f46a0025] p-3 rounded-full"/>
                    <div className="w-[6%] h-[4px] bg-[#f46a0025]"></div>
                    <img src={paper} alt="paper" className="bg-[#f46a0025] p-3 rounded-full"/>
                </div>
                <div className="w-[47%] text-center">
                    <p className="text-md text-gray-400">Using cutting-edge machine learning and deep analytics, CogniAl helps businesses, researchers, and decision-makers unlock hidden patterns, predict trends, and optimize performance.</p>
                </div>

                <div>
                    <BlackBtn text="Get Started Now"/>
                </div>
            </div>
        </div>
    )
}

export default AIPowered