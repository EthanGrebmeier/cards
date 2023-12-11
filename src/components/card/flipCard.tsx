import React from "react";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { cardFlippedAtom } from "~/atoms/card";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const FlipCard = () => {
  const [flipped, setFlipped] = useAtom(cardFlippedAtom);

  return (
    <Button
      className="absolute right-0 top-0"
      variant="ghost"
      onClick={() => setFlipped(!flipped)}
    >
      <ArrowPathIcon className="h-6 w-6 text-black transition-all duration-300 hover:rotate-180" />
    </Button>
  );
};

export default FlipCard;
