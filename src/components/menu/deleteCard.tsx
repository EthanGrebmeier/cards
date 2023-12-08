"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { Button } from "../elements/button";

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
    <Button variant="destructive" onClick={deleteCard}>
      Delete
    </Button>
  );
};

export default DeleteCard;
