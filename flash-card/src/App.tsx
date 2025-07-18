import { Carousel, Progress} from "antd";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-[70%]">
      <p className="font-bold text-2xl font-sans ">Flash Card</p>
      <div className="App">
      </div>
          <Progress percent={100} />
              <Carousel arrows infinite={false} className="bg-amber-800">
                <div>hello</div>
                <div>there</div>
                <div>world</div>
              </Carousel>
    </div>
  );
}

export default App;
