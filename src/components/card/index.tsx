"use client";

import { useState } from "react";
import CardBackground from "./background";
import CardFront from "./front";
import CardSide from "./cardSide";
import CardBack from "./back";
import { cardSchema } from "~/schemas/card";

const cardData = {
  front: {
    template: "basic",
  },
  back: {
    blocks: [
      {
        id: 123,
        name: "link",
        theme: "basic",
        config: {
          width: 2,
          height: 2,
        },
        data: {
          href: "/",
          text: "Facebook",
        },
      },
      {
        id: 1234,
        name: "link",
        theme: "basic",
        config: {
          width: 1,
          height: 2,
        },
        data: {
          href: "/",
          text: "Twitter",
        },
      },
      {
        id: 1232,
        name: "link",
        theme: "basic",
        config: {
          width: 2,
          height: 2,
        },
        data: {
          href: "/",
          text: "Twitter",
        },
      },
    ],
  },
};

const userData = {
  firstName: "Ethan",
  lastName: "Grebmeier",
  profilePicture:
    "https://pm1.aminoapps.com/6759/e814f3473f6a0c2a480cfe2b8f4ab8b39bd7bdb2v2_00.jpg",
};

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  const parsedCardData = cardSchema.parse(cardData);

  return (
    <>
      <button onClick={() => setFlipped(!flipped)}>flip</button>
      <CardBackground
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="relative h-full w-full duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <CardFront />
          <CardBack blocks={parsedCardData.back.blocks} />
        </div>
      </CardBackground>
    </>
  );
};

export default Card;
