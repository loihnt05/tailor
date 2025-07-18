import { Carousel, Progress } from "antd";
import data from "./seed-data";
import { useState } from "react";
const contentStyle =
  "h-[300px] flex items-center justify-center text-white text-center text-2xl";
function App() {
  const [shownIndex, setShownIndex] = useState<number | null>(null);
  const [currentPercent, setCurrentPercent] = useState(1/data.length * 100); 
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div>
        <p className="font-bold text-4xl font-sans ">Flash Card</p>
      </div>
      <div className="w-1/2 my-2">
        <Progress
          percent={currentPercent}
          percentPosition={{ align: "end", type: "inner" }}
          size={[585, 30]}
          strokeColor="#0f4868"
        />
      </div>
      <div className="w-1/2">
        <Carousel
        afterChange={(current) => {
            setCurrentPercent(Math.round(((current + 1) / data.length) * 100));
          }}
          slickGoTo={2}
          arrows
          infinite={false}
          className="bg-[#364d79] text-white font-semibold border-gray-400 border-solid border-5 h-auto min-h-75 p-5 rounded-xl"
        >
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (shownIndex === index) setShownIndex(-1);
                else setShownIndex(index);
              }}
              className="cursor-pointer"
            >
              <div className={contentStyle}>
                {shownIndex === index ? item.answer : item.question}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
