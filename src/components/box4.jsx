import upRight from "../assets/upRight.png"
import tick from "../assets/tick.svg"

function Remainder({src, title, text}){
    return(
        <div className="w-full h-full rounded-2xl flex gap-2 bg-white p-2">
            {src ? <img src={src} alt={title} className="w-5"/> : <div className="self-center w-4 h-4 rounded-full border-2 border-[#80808044]"></div>}
            <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <span className="text-[10px] text-gray-500">{text}</span>
            </div>
        </div>
    )
}

function Box4(){
    return(
        <div className="w-full h-[230px] max-md:h-full bg-[#f5f7fba7] flex flex-col justify-between gap-2 items-center p-3 rounded-3xl">
        <div className="flex justify-between items-center w-full">
                <p className="text-md font-medium">Remainders</p>
                <img src={upRight} alt="up-right-icon" className="p-2 bg-white rounded-full w-7"/>
            </div>
            <div className="w-full flex flex-col items-center
            gap-2">
                <Remainder src={tick} title={"Content Refresh Alert"} text= {"Post the content, share insights and stireactive Comments!"}/>
                <Remainder title={"Engagement Check-in"} text= {"Reply to comments, interact with followers, and spark conversations today."}/>
                <Remainder title={"Analytics Review Day"} text= {"Time to check your name your reich, impresons and growth to refine you."}/>
            </div>
        </div>
    )
}

export default Box4;