import Card from "~/components/card";

import ModeSwitch from "~/components/menu/modeSwitch";
import { api } from "~/trpc/server";

export default async function Home() {
  const cards = await api.card.getAll.query();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-pink-300">
      <Card />
      <div>
        {cards.length ? (
          cards.map((card) => (
            <div key={card.id}>
              <p> name: {card.name} </p>
              <p> id: {card.id} </p>
            </div>
          ))
        ) : (
          <p> No Cards Found. Try creating one!</p>
        )}
      </div>
      <div className="absolute bottom-8 left-32 flex gap-4 ">
        <ModeSwitch />
      </div>
    </main>
  );
}
