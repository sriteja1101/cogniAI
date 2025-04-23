import upRight from "../assets/upRight.png";

function Box3() {
  return (
    <div className="w-full h-full bg-[#f5f7fba7] flex flex-col gap-1 items-center p-3 rounded-3xl">
      <div className="flex justify-between items-center w-full">
        <p className="text-md font-medium">Age-Based User Trends</p>
        <img
          src={upRight}
          alt="up-right-icon"
          className="p-2 bg-white rounded-full w-7"
        />
      </div>

      <div className="w-full h-full rounded-2xl flex flex-col gap-2 justify-center">
        <div className="flex flex-col">
          <p className="text-[10px] text-gray-500">People Born Between</p>
          <span className="text-lg font-medium">1948-2002</span>
        </div>

        <div className="flex items-end gap-2 justify-center max-sm:justify-start overflow-x-hidden">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium">13.8%</span>
            <div className="w-17 h-15 bg-[#f88e3830] rounded-xl"></div>
            <span className="text-[10px] text-gray-500 px-2 py-0.5">18-24</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium">32,2%</span>
            <div className="w-17 h-32 bg-[#f88d38] rounded-2xl"></div>
            <span className="text-[10px] text-white px-2 py-0.5 bg-black rounded-full">
              25-34
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium">26,9%</span>
            <div className="w-17 h-27 bg-[#f88e3830] rounded-xl"></div>
            <span className="text-[10px] text-gray-500 px-2 py-0.5">35-44</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium">17,9%</span>
            <div className="w-17 h-22 bg-[#f88e3830] rounded-xl"></div>
            <span className="text-[10px] text-gray-500 px-2 py-0.5">45-54</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium">14,2%</span>
            <div className="w-17 h-19 bg-[#f88e3830] rounded-xl"></div>
            <span className="text-[10px] text-gray-500 px-2 py-0.5">55-64</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium">9,5%</span>
            <div className="w-17 h-15 bg-[#f88e3830] rounded-xl"></div>
            <span className="text-[10px] text-gray-500 px-2 py-0.5">65+</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Box3;
