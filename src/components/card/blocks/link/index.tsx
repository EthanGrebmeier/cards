import { Link } from "~/types/card";
import { cn } from "~/utils/cn";
import useMode from "~/hooks/useMode";
import Block from "..";

type LinkProps = {
  block: Link & { name: "link" };
};

const Link = ({ block }: LinkProps) => {
  const { isEditing } = useMode();
  const { href, text } = block;
  return (
    <Block
      block={block}
      className={cn(
        "group relative rounded-md bg-slate-200 px-4 py-2 shadow-md transition-all",
        !isEditing && "hover:font-medium",
      )}
      style={{
        gridColumn: `auto / span 3`,
        gridRow: `auto / span 1`,
      }}
    >
      <a
        className="flex h-full w-full items-center justify-center"
        href={isEditing ? undefined : `//${href}`}
      >
        {text}
      </a>
    </Block>
  );
};

export default Link;
