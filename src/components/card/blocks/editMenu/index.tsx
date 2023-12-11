import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "~/components/ui/dropdown-menu";
import type { Block } from "~/types/card";
import BlockEditMenuMap from "./blockEditMenuMap";

type EditMenuProps = {
  block: Block;
};
const EditMenu = ({ block }: EditMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute right-2 top-2">
        <EllipsisVerticalIcon className="h-4 w-4 text-black" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="capitalize">
          {block.name}
        </DropdownMenuLabel>
        <BlockEditMenuMap block={block} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditMenu;
