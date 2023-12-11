import Link from "next/link";
import { Button } from "~/components/ui/button";
import CreateCard from "~/components/menu/createCard";
import DeleteCard from "~/components/menu/deleteCard";
import { api } from "~/trpc/server";

export default async function CardsIndex() {
  const cards = await api.card.getAll.query();

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-pink-300 py-44 ">
      <div className="flex max-h-[800px] w-full max-w-md flex-col items-center gap-4 overflow-auto">
        {cards.length ? (
          cards.map((card) => (
            <div
              className="flex w-full items-center justify-between rounded-md border-2 border-black bg-slate-200 px-4 py-2"
              key={card.id}
            >
              <p className="font-bold">{card.name} </p>
              <div className="flex gap-2">
                <Button variant="link" asChild>
                  <Link href={`/cards/${card.id}`}> View Card</Link>
                </Button>
                <DeleteCard id={card.id} />
              </div>
            </div>
          ))
        ) : (
          <>
            <p> No Cards Found.</p>
            <p className="font-bold"> Try creating one! </p>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-32 flex gap-4 ">
        <CreateCard />
      </div>
    </main>
  );
}
