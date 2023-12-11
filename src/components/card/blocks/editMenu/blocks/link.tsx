"use client";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import { editorScreenAtom, editorUpdateBlockAtom } from "~/atoms/editor";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { api } from "~/trpc/react";
import type { Link } from "~/types/card";

type LinkEditMenuProps = {
  link: Link;
};

const LinkEditMenu = ({ link }: LinkEditMenuProps) => {
  const router = useRouter();
  const setEditorScreen = useSetAtom(editorScreenAtom);
  const setEditorUpdateBlockAtom = useSetAtom(editorUpdateBlockAtom);
  const { mutate } = api.blocks.links.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const handleStartEdit = () => {
    setEditorUpdateBlockAtom(link);
    setEditorScreen("updateLink");
  };

  return (
    <DropdownMenuGroup>
      <DropdownMenuItem onSelect={handleStartEdit}>Edit Link</DropdownMenuItem>
      <DropdownMenuItem
        onSelect={() =>
          mutate({
            id: link.id,
          })
        }
      >
        Delete Link
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
};

export default LinkEditMenu;
