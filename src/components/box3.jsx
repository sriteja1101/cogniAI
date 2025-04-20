import upRight from "../assets/upRight.png"

function Box3(){
    return(
        <div className="w-full h-full bg-[#f5f7fb] flex flex-col justify-between items-center p-3 rounded-3xl">
        <div className="flex justify-between items-center w-full">
                <p className="text-md font-medium">Age Based User Trends</p>
                <img src={upRight} alt="up-right-icon" className="p-2 bg-white rounded-full w-7"/>
            </div>

            <div className="w-full h-full bg-white rounded-2xl p-3 flex flex-col items-center justify-center">
                        <div className="flex flex-col">
                            <p className="text-[10px] text-gray-500">People Born Between</p>
                            <span className="text-lg font-medium">1948-2002</span>
                        </div>

                    <div className="flex items-end gap-3">
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
    )
}

export default Box3;