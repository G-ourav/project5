import React, { useEffect, useState } from "react";

const More = ({ moreData }) => {
  const [ismore, setIsmore] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsmore(!ismore);
        }}
      >
        {" "}
        more{" "}
      </button>
      {ismore ? (
        <div>
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
