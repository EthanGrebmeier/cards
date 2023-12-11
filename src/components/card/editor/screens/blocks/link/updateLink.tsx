"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

import LinkForm from "./linkForm";
import { useAtomValue } from "jotai";
import Screen from "../../screen";
import { editorUpdateBlockAtom } from "~/atoms/editor";

const UpdateLink = () => {
  const router = useRouter();
  const editorUpdateBlock = useAtomValue(editorUpdateBlockAtom);

  const { mutate } = api.blocks.links.update.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  if (!editorUpdateBlock) {
    return null;
  }

  const editorUpdateBlockId = editorUpdateBlock.id;

  const updateLink = ({ text, href }: { text: string; href: string }) => {
    !!editorUpdateBlockId &&
      mutate({
        blockId: editorUpdateBlockId,
        text,
        href,
      });
  };

  return (
    <Screen title="Update Link">
      <LinkForm
        key={editorUpdateBlockId}
        defaultValues={{
          text: editorUpdateBlock.text,
          href: editorUpdateBlock.href,
        }}
        onSubmit={updateLink}
      />
    </Screen>
  );
};

export default UpdateLink;
