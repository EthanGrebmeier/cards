"use client";
import useMode from "~/hooks/useMode";
import EditMenu from "./editMenu";
import { cn } from "~/utils/cn";
import type { Block as BlockType } from "~/types/card";

type BlockProps = JSX.IntrinsicElements["div"] & {
  block: BlockType;
};

const Block = ({ children, className, block, ...rest }: BlockProps) => {
  const { isEditing } = useMode();
  return (
    <div {...rest} className={cn("relative", className)}>
      {children}
      {isEditing && <EditMenu block={block} />}
    </div>
  );
};

export default Block;
