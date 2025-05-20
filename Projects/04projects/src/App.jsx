import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex  flex-wrap   shadow-lg justify-center gap-3 bg-white  px-3 px-y rounded-3xl">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-=4 py-1 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-=4 py-1 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: "Yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-=4 py-1 rounded-xl text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
