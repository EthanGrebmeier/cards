import Link from "next/link";
import { Button } from "~/components/elements/button";
import CreateCard from "~/components/menu/createCard";
import DeleteCard from "~/components/menu/deleteCard";
import { api } from "~/trpc/server";

export default async function CardsIndex() {
  const cards = await api.card.getAll.query();

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-pink-300 py-44 ">
      <div className="flex max-h-[800px] w-full max-w-md flex-col gap-4 overflow-auto">
        {cards.map((card) => (
          <div
            className="flex w-full items-center justify-between rounded-md bg-slate-200 px-4 py-2"
            key={card.id}
          >
            <p>{card.name} </p>
            <div className="flex gap-2">
              <Button variant="link" asChild>
                <Link href={`/cards/${card.id}`}> View Card</Link>
              </Button>
              <DeleteCard id={card.id} />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-32 flex gap-4 ">
        <CreateCard />
      </div>
    </main>
  );
}
