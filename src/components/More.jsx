import React, { useEffect, useState } from "react";

const More = ({ moreData }) => {
  const [ismore, setIsmore] = useState(false);


  return (
    <div>
      <button
        onClick={() => {
          setIsmore(!ismore);
        }}
        className="bg-slate-200 border    rounded-lg  p-3 "
      >
        see more{" "}
      </button>
      {ismore ? (
        <div className="fixed top-0 text-left left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          
          <div>
            <p> age : {moreData.dob.age}</p>
          </div>
          <div>
            <p> location </p>
            <p> city : {moreData.location.city}</p>
            <p> country : {moreData.location.country}</p>
            <p> postcode : {moreData.location.postcode}</p>
            <p> state : {moreData.location.state}</p>
          </div>
          <div>
            <p> phone : {moreData.phone}</p>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default More;
