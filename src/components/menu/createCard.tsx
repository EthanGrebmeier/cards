"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { Button } from "../ui/button";
import { useState } from "react";

const CreateCard = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const { mutate } = api.card.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const createCard = () => {
    mutate({
      name,
    });
  };

  return (
    <div className="flex gap-4">
      <input
        className="rounded-md px-4"
        placeholder="Card Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={createCard}>Create Card</Button>
    </div>
  );
};

export default CreateCard;
