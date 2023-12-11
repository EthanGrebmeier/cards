import React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import BackButton from "../../backButton";

type LinkFormProps = {
  onSubmit: (args: { text: string; href: string }) => void;
  defaultValues?: {
    text?: string;
    href?: string;
  };
};

const LinkForm = ({ onSubmit, defaultValues }: LinkFormProps) => {
  const [text, setText] = useState(defaultValues?.text ?? "");
  const [href, setHref] = useState(defaultValues?.href ?? "");

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit({
      text,
      href,
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <Label htmlFor="linkName">Name</Label>
      <Input
        value={text}
        id="linkName"
        className="rounded-md px-4 py-2"
        placeholder="Link Name"
        onChange={(e) => setText(e.target.value)}
      />
      <Label htmlFor="linkDestination">Destination</Label>
      <Input
        value={href}
        id="linkDestination"
        className="rounded-md px-4 py-2"
        placeholder="Link Destination"
        onChange={(e) => setHref(e.target.value)}
      />
      <div className="mt-4 flex w-full justify-between">
        <BackButton />
        <Button>Update Link</Button>
      </div>
    </form>
  );
};

export default LinkForm;
