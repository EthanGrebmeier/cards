import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "~/components/card";
import Editor from "~/components/card/editor";
import { Button } from "~/components/ui/button";

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
    includeBlocks: true,
  });

  if (!card) {
    notFound();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center  gap-24 bg-pink-300 px-24 ">
      <Editor cardId={card.id} />
      <Card card={card} />
      <div className="absolute bottom-8 left-32 flex gap-4 ">
        <Button asChild>
          <Link href="/cards">Back </Link>
        </Button>

        <ModeSwitch />
      </div>
    </main>
  );
}
