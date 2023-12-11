"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

import LinkForm from "./linkForm";
import { useAtomValue } from "jotai";
import { cardIdAtom } from "~/atoms/card";
import Screen from "../../screen";

const CreateLink = () => {
  const router = useRouter();
  const cardId = useAtomValue(cardIdAtom);
  const { mutate } = api.blocks.links.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const createLink = ({ text, href }: { text: string; href: string }) => {
    !!cardId &&
      mutate({
        cardId,
        text,
        href,
      });
  };

  return (
    <Screen title="Create Link">
      <LinkForm onSubmit={createLink} />
    </Screen>
  );
};

export default CreateLink;
