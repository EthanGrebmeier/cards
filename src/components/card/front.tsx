import React from "react";
import CardSide from "./cardSide";

const CardFront = () => {
  return (
    <CardSide>
      <div className=" relative mb-6 h-36 w-36 overflow-hidden rounded-full border bg-white">
        <img
          className="h-full w-full bg-cover"
          src="https://media.licdn.com/dms/image/C5603AQHM3738Ime5-w/profile-displayphoto-shrink_400_400/0/1617245549905?e=1706745600&v=beta&t=IRVcg4SvNj5TJ2Ug45lSQlx6wHWUSap4A9vdkrqy_wg"
        />
      </div>
      <h1 className="text-3xl"> Ethan Grebmeier </h1>
      <div>
        <p> Developer | Designer</p>
      </div>
    </CardSide>
  );
};

export default CardFront;
