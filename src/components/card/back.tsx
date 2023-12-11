import CardSide from "./cardSide";
import BlockParser from "./blocks/blockParser";
import type { Card } from "~/types/card";

type CardBackProps = {
  blocks: Card["blocks"];
};

const CardBack = ({ blocks }: CardBackProps) => {
  return (
    <CardSide className="gap-4" style={{ transform: "rotateY(180deg)" }}>
      <div className="grid h-full w-full grid-cols-3 grid-rows-6 gap-4">
        {blocks.map((block) => (
          <BlockParser block={block} key={block.id} />
        ))}
      </div>
    </CardSide>
  );
};

export default CardBack;
