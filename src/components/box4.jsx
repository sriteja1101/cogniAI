import upRight from "../assets/upRight.png"

function Box4(){
    return(
        <div className="w-full h-[230px] bg-[#f5f7fb] flex flex-col justify-between items-center p-3 rounded-3xl">
        <div className="flex justify-between items-center w-full">
                <p className="text-md font-medium">Profile Completion</p>
                <img src={upRight} alt="up-right-icon" className="p-2 bg-white rounded-full w-7"/>
            </div>

        </div>
    )
}

export default Box4;