"use client";

import type { Card } from "~/types/card";
import { Button } from "~/components/ui/button";
import { useAtom, useSetAtom } from "jotai";
import { cardIdAtom } from "~/atoms/card";
import { useEffect } from "react";
import { editorScreenAtom } from "~/atoms/editor";
import { EditorScreens } from "./screens";
import useMode from "~/hooks/useMode";

type EditorProps = {
  cardId: Card["id"];
};

const Editor = ({ cardId }: EditorProps) => {
  const { isEditing } = useMode();
  const [editorScreen, setEditorScreen] = useAtom(editorScreenAtom);
  const setCardIdAtom = useSetAtom(cardIdAtom);

  useEffect(() => {
    setCardIdAtom(cardId);
    return () => {
      setCardIdAtom(undefined);
    };
  }, [cardId, setCardIdAtom, setEditorScreen]);

  useEffect(() => {
    if (!isEditing) {
      setEditorScreen("");
    }

    return () => {
      setEditorScreen("");
    };
  }, [setEditorScreen, isEditing]);

  if (!isEditing) return null;

  return (
    <div className="absolute left-32 h-fit w-[500px] rounded-md bg-white px-6 py-4 transition-[height] duration-300">
      {!editorScreen ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">Add Blocks </h1>
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="w-fit"
              onClick={() => setEditorScreen("createLink")}
            >
              {" "}
              Link{" "}
            </Button>
          </div>
        </div>
      ) : (
        EditorScreens[editorScreen]
      )}
    </div>
  );
};

export default Editor;
