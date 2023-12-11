import type { Block } from "~/types/card";
import LinkEditMenu from "./blocks/link";

type BlockEditMenuMap = {
  block: Block;
};
const BlockEditMenuMap = ({ block }: BlockEditMenuMap) => {
  switch (block.name) {
    case "link":
      return <LinkEditMenu link={block} />;

    default:
      return null;
  }
};

export default BlockEditMenuMap;
