import GradientText from "./gradientText";
import BlackBtn from "./blackBtn";
import InfoCard from "./infoCard";
import fileUpload from "../assets/fileUpload.png";
import wristWatch from "../assets/wristWatch.png";
import lineChart from "../assets/lineChart.png";
import trophy from "../assets/trophy.png";



function Work() {
  const width = "w-[43%] max-md:w-[90%]";
  const data = [
    {image: fileUpload, title: "Upload & Connect Seamlessly", text: "Easily import data from spreadsheets, databases, and APIs effortlessly for seamless integration and efficient workflows."},
    {image: wristWatch, title: "Al-Driven Processing in Real-Time", text: "No coding required! Al instantly cleans, analyzes, and structures your data for seamless organization."},
    {image: lineChart, title: "Gain Actionable Insights Instantly", text: "Generate reports, visualize trends, and detect patterns with Al-powered analytics."},
    {image: trophy, title: "Make Smarter, Data-Driven Decisions", text: "Use Al recommendations to optimize strategies, enhance decision-making, boost efficiency, and drive business growth."}
  ]
  return (
    <div className="flex justify-center w-full my-20">
      <div className="w-[80%] max-xl:w-[90%] max-lg:w-[95%] flex flex-col items-center gap-7">
        <div className="w-full flex justify-between max-md:justify-center max-md:text-center">
          <GradientText
            title={"HOW IT WORKS"}
            tag={"Unlock the Power of Your Data with CogniAl"}
            text={
              "Organize tasks, track progress, and achieve more-effortlessly."
            }
            width={width}
          />
          <div className="self-end max-md:hidden">
            <BlackBtn text="Try Al-Powered Analysis Today" />
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-between gap-y-3 max-md:flex-col h-full">
        {data.map((item)=>{
          return(
            <div className="flex w-[49.5%] max-md:w-full items-center">
              <InfoCard src={item.image} title={item.title} text={item.text} />
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default Work;
