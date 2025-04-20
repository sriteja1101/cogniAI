function GradientText({title, tag,text}){
    return(
        <div className="flex flex-col gap-3 w-[55%]">
                <p className="text-md text-[#F46800] font-bold">{title}</p>
                <h2 className="text-3xl font-bold">{tag}</h2>
                <span className="text-md text-gray-500">{text}</span>
        </div>
    )
}


export default GradientText