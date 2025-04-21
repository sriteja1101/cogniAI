import Box1 from "./box1"
import Box2 from "./box2"
import Box3 from "./box3"
import Box4 from "./box4"

function Hero(){
    return (
        <div className="flex justify-center items-center">
            <div className="w-[80%] h-[78vh] max-md:h-full max-md:w-full bg-[radial-gradient(ellipse_at_bottom,_#ffc590_0%,_#ffc590_15%,_#f0d4d9_40%,_#e0ecf9_60%,_#deeaf6_100%)] rounded-4xl flex justify-center items-center">
                <div className="w-[80%] h-[80%] max-md:w-full gap-4 flex max-md:flex-col justify-center items-start max-md:py-3 max-md:px-2">
                 <div className="w-full flex flex-col ite gap-4">
                    <div className="self-end w-[90%] h-full max-md:w-full">
                    <Box1/>
                    </div>
                   <div className="w-full h-full">
                   <Box3/>
                   </div>
                 </div>

                 <div className="w-full flex flex-col gap-4">
                    <div className="w-[80%] max-md:w-full h-full">
                    <Box2/>
                    </div>
                   <div className="w-[95%] max-md:w-full h-full">
                   <Box4/>
                   </div>
                 </div>

                </div>
            </div>
        </div>
    )
}



export default Hero