import type { z } from "zod";
import type { blockSchemas } from "~/schemas/card/blocks";
import Link from "./link";

type BlockParserProps = {
  block: z.infer<typeof blockSchemas>;
};

const BlockParser = ({ block }: BlockParserProps) => {
  if (block.name === "link") {
    return <Link {...block} />;
  }

  return <div>Missing component</div>;
};

export default BlockParser;
