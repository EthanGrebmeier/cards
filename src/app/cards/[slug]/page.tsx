import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "~/components/card";
import { Button } from "~/components/elements/button";

import ModeSwitch from "~/components/menu/modeSwitch";
import { api } from "~/trpc/server";

export default async function CardsIndex({
  params: { slug },
}: {
  params: { slug: string };
}) {
  let parsedSlug;

  try {
    parsedSlug = parseInt(slug);
  } catch {
    notFound();
  }

  const card = await api.card.getCard.query({
    id: parsedSlug,
  });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-pink-300 ">
      <Card />
      {JSON.stringify(card)}
      <div className="absolute bottom-8 left-32 flex gap-4 ">
        <Button asChild>
          <Link href="/cards">Back </Link>
        </Button>

        <ModeSwitch />
      </div>
    </main>
  );
}
