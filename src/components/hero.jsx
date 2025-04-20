
// eslint-disable-next-line no-unused-vars
import tick from "../assets/tick.svg"

import Box1 from "./box1"
import Box2 from "./box2"
import Box3 from "./box3"
import Box4 from "./box4"



function Hero(){
    return (
        <div className="flex justify-center items-center">
            <div className="w-[80%] h-[70vh] bg-[radial-gradient(ellipse_at_bottom,_#ffc590_0%,_#ffc590_15%,_#f0d4d9_40%,_#e0ecf9_60%,_#deeaf6_100%)] rounded-2xl flex justify-center items-center">
                <div className="w-[80%] h-[80%] grid grid-cols-2 grid-rows-2 justify-center gap-4">
                   <div className="w-[90%] h-full flex ">
                   <Box1/>
                   </div>
                    <div className="w-[85%] h-full flex items-start">
                    <Box2/>
                    </div>
                  {/* <div className="w-full h-full flex items-start">
                  <Box3/>
                  </div>
                  <div className="w-full h-full flex items-start mt-[-30px]">
                  <Box4/>
                  </div>
                     */}

                </div>
            </div>
        </div>
    )
}



export default Hero