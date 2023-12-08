import type { z } from "zod";
import { Button } from "~/components/elements/button";
import useMode from "~/hooks/useMode";
import type { linkSchema } from "~/schemas/card/blocks";
import { cn } from "~/utils/cn";

type LinkProps = z.infer<typeof linkSchema>;

const Link = ({ data, theme, config }: LinkProps) => {
  const { isEditing } = useMode();

  return (
    <div
      className={cn(
        "group relative  rounded-md bg-slate-200 px-4 py-2 shadow-md transition-all hover:font-medium",
        isEditing && "hover:bg-slate-300",
      )}
      style={{
        gridColumn: `auto / span ${config.width}`,
        gridRow: `auto / span ${config.height}`,
      }}
    >
      {isEditing && (
        <Button className="absolute right-2 top-2 opacity-0 transition-all group-hover:opacity-100">
          Edit
        </Button>
      )}

      <a
        className="flex h-full w-full items-center justify-center"
        href={isEditing ? undefined : data.href}
      >
        {data.text}
      </a>
    </div>
  );
};

export default Link;
