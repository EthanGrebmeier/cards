"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { Button } from "../ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";

type DeleteCardProps = {
  id: number;
};

const DeleteCard = ({ id }: DeleteCardProps) => {
  const router = useRouter();
  const { mutate } = api.card.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const deleteCard = () => {
    mutate({
      id,
    });
  };

  return (
    <Button className="px-2" variant="ghost" onClick={deleteCard}>
      <TrashIcon className="h-6 w-6 text-black " />
    </Button>
  );
};

export default DeleteCard;
