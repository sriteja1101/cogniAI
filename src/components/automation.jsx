import GradientText from "./gradientText";
import BlackBtn from "./blackBtn";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
function Automation(){
    return(
        <div className="flex items-center justify-center my-20">
            <div className="w-[80%] flex flex-col items-center justify-center gap-5">
                <div className="flex items-center justify-between w-full">
                    <GradientText title={"USE CASE"} tag={"Optimize Workflows with Smart Automation Tools"} text={"Organize tasks, track progress, and achieve more effortlessly."}/>
                    <BlackBtn text={"See AI in Action"}/>
                </div>

                <div className="flex w-full items-center gap-5">
                    <div className="w-[35%] bg-[#f5f7fb] flex flex-col justify-between gap-3 rounded-3xl py-5 px-6">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">For Business Leaders</h3>
                            <p className="text-md text-gray-500">Identify trends & opportunities in real-time to make data-driven decisions and stay ahead of the competition.</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-white flex flex-col gap-7 items-center justify-center">
                            <h3 className="self-start text-md font-medium">Trend Insights</h3>

                            <div className="flex items-center gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 flex-wrap w-[150px]">
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="font-semibold">84%</p>
                                        <span className="text-gray-500 text-sm">Fashion</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 flex-wrap w-[150px]">
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#ffeae2] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                        <div className="w-[30px] h-[30px] bg-[#f88d38] rounded-lg"></div>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="font-semibold">43%</p>
                                        <span className="text-gray-500 text-sm">Tech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[65%] bg-[#f5f7fb] flex justify-between gap-3 rounded-3xl py-5 px-6">
                <div className="w-[50%] flex flex-col gap-3 justify-between">
                   <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">For Marketing Teams</h3>
                            <p className="text-md text-gray-500">Identify trends & opportunities in real-time to make data-driven decisions and stay ahead of the competition.</p>
                    </div>
                    <div className="flex items-center">
                        <img src={profile} alt="profile" className="w-13 rounded-full border-2"/>
                        <img src={profile4} alt="profile" className="w-13 rounded-full ml-[-20px] border-2"/>
                        <img src={profile3} alt="profile" className="w-13 rounded-full ml-[-20px] border-2"/>
                        <img src={profile2} alt="profile" className="w-13 rounded-full ml-[-20px] border-2"/>
                    </div>
                </div>

                <div className="w-[50%] bg-white rounded-2xl p-3 flex flex-col gap-7 items-center justify-center">
                    <div className="self-start flex flex-col gap-2">
                        <h3 className="text-md font-medium">Age Based User Trends</h3>
                        <div className="flex flex-col">
                            <p className="text-[10px] text-gray-500">People Born Between</p>
                            <span className="text-lg font-medium">1948-2002</span>
                        </div>
                    </div>

                    <div className="flex items-end gap-3 overflow-x-hidden max-w-full">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-sm font-medium">13.8%</span>
                            <div className="w-22 h-18 bg-[#ffeae2] rounded-2xl"></div>
                            <span className="text-xs text-gray-500 px-2 py-1">18-24</span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-sm font-medium">32,2%</span>
                            <div className="w-22 h-45 bg-[#f88d38] rounded-2xl"></div>
                            <span className="text-xs text-white px-2 py-1 bg-black rounded-full">25-34</span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-sm font-medium">26,9%</span>
                            <div className="w-22 h-40 bg-[#ffeae2] rounded-2xl"></div>
                            <span className="text-xs text-gray-500 px-2 py-1">35-44</span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-sm font-medium">10,8%</span>
                            <div className="w-22 h-28 bg-[#ffeae2] rounded-2xl"></div>
                            <span className="text-xs text-gray-500 px-2 py-1">45-54</span>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Automation;