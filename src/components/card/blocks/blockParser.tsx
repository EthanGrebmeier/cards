import Link from "./link";
import type { Block} from "~/types/card";

type BlockParserProps = {
  block: Block
};

const BlockParser = ({ block }: BlockParserProps) => {
  if (block.name === "link") {
    return <Link block={block} />;
  }

  return <div>Missing component</div>;
};

export default BlockParser;
