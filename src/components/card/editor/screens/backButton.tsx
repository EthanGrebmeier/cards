"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useSetAtom } from "jotai";
import React from "react";
import { editorScreenAtom } from "~/atoms/editor";
import { Button } from "~/components/ui/button";

const BackButton = () => {
  const setEditorScreen = useSetAtom(editorScreenAtom);

  return (
    <Button
      onClick={() => setEditorScreen("")}
      variant="outline"
      className="flex gap-2"
      type="button"
    >
      <ChevronLeftIcon className="h-4 w-4 text-black" /> Back
    </Button>
  );
};

export default BackButton;
