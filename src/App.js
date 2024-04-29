import React, { useEffect, useState } from "react";
import More from "./components/More";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [number_fetch, setNumber_fetch] = useState("");

  const fetchData = async (e) => {
    try {
      const res = await fetch(`https://randomuser.me/api/?results=${e}`);

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

  return (
    <div className="px-5 py-10 bg-slate-500">
      <div className="border bg-slate-300    rounded-lg  px-10">
        <p className=" text-2xl">Number Form </p>
        <form>
          <div className="mt-8">
            <label className="">Number of fetch users </label>
            <br />
            <input
              type="number"
              required
              name="number_fetch"
              value={number_fetch}
              onChange={(e) => {
                setNumber_fetch(e.target.value);
              }}
              className="border   rounded-lg  p-2 mt-2 mb-2 w-full"
              placeholder="Enter your full name"
            />
            <br />
          </div>

          <button
            className=" bg-slate-900 py-2 my-5 text-white px-5  text-sm rounded-md "
            onClick={(e) => {
              e.preventDefault();
              fetchData(number_fetch);
            }}
          >
            Fetch
          </button>
        </form>
      </div>
      <div className="  py-10 ">
        <div className="border bg-slate-300     rounded-xl   ">
          <div className="grid py-4  grid-cols-7 ">
            <div className="  uppercase text-lg text-center ">Sno.</div>
            <div className="  uppercase text-lg  ">thumbnail</div>
            <div className="  uppercase text-lg text-center ">name</div>
            <div className="  uppercase text-lg text-center overflow-auto">
              cell
            </div>
            <div className="  uppercase text-lg text-center overflow-auto">
              email
            </div>
            <div className="  uppercase text-lg text-center overflow-auto">
              gender
            </div>
            <div className="  uppercase text-lg text-center overflow-auto">
              more data
            </div>
          </div>
          {data?.map((e, i) => (
            <div key={i} className="grid  py-4 border  grid-cols-7 ">
              <div className="text-lg text-center ">{i}</div>
              <div className="text-lg text-center ">
                <img src={e?.picture?.thumbnail} className=" " />
              </div>
              <div className="text-lg text-center ">{e?.name?.title}</div>
              <div className="text-lg text-center overflow-auto">{e?.cell}</div>
              <div className="text-lg text-center overflow-auto">
                {e?.email}
              </div>
              <div className="text-lg text-center overflow-auto">
                {e?.gender}
              </div>

              <div className="text-lg text-center overflow-auto">
                <More moreData={e} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
