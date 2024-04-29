import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import More from "./components/More";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=5");

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      setData(result.results); // Extract 'results' array from the response
      console.log(result.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className=" py-10">
        {data?.map((e, i) => (
          <div key={i} className="grid py-4 border  grid-cols-6 px-10">
            <div className="text-lg text-center ">
            <img src={e?.picture?.thumbnail} className=" " />
            </div>
            <div className="text-lg text-center ">{e?.name?.title}</div>
            <div className="text-lg text-center overflow-auto">{e?.cell}</div>
            <div className="text-lg text-center overflow-auto">{e?.email}</div>
            <div className="text-lg text-center overflow-auto">{e?.gender}</div>

            <div>
              <More moreData={e} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
