import CardSide from "./cardSide";
import type { z } from "zod";
import type { sideSchema } from "~/schemas/card";
import BlockParser from "./blocks/blockParser";

type CardBackProps = z.infer<typeof sideSchema>;

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
