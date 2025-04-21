import BlackBtn from "./blackBtn"
function Statement(){
    return (
        <div className="mt-10 flex justify-center items-center mb-5">
            <div className="w-[60%] max-md:w-full flex flex-col items-center justify-center gap-5">
            <h1 className="text-6xl max-md:text-2xl text-center">Turn Raw Data into <br /> Actionable Insights - Instantly</h1>
            <p className="text-sm max-md:text-xs text-center text-gray-500">Harness Al-driven analytics to transform complex data into clear, actionable insights. No coding required, just results.</p>
             <BlackBtn text="Get Started for Free"/>
            </div>
        </div>
    )
}

export default Statement