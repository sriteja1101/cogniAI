import BlackBtn from "./blackBtn"
function Navbar(){
    return(
        <div className="flex justify-evenly items-center h-20 mb-10">
            <div>
            <h2 className="text-3xl font-normal">Cogni<span className="font-medium">AI</span></h2>
            </div>
            <ul className="flex items-center box-border bg-[#f9f9f9] p-2 rounded-full">
                <li><span className="px-7 py-2.5 bg-[#F46800] text-white rounded-full text-sm inline-block">Home</span></li>
                <li><span className="px-7 py-2.5 text-gray-800 rounded-full text-sm inline-block">Work</span></li>
                <li><span className="px-7 py-2.5 text-gray-800 rounded-full text-sm inline-block">Expertise</span></li>
                <li><span className="px-7 py-2.5 text-gray-800 rounded-full text-sm inline-block">Pricing</span></li>
                <li><span className="px-7 py-2.5 text-gray-800 rounded-full text-sm inline-block">Testimonial</span></li>
            </ul>
                <BlackBtn text="Contact us"/>
        </div>
    )
}

export default Navbar