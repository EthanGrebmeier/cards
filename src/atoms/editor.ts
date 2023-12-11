import { atom } from "jotai";
import type { EditorScreens } from "~/components/card/editor/screens";
import type { Block } from "~/types/card";

export const editorScreenAtom = atom<keyof typeof EditorScreens | "">("");
export const editorUpdateBlockAtom = atom<Block | undefined>(undefined);
