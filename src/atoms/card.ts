import {atom} from "jotai"
import { type Card } from "~/types/card"

export const cardIdAtom = atom<Card["id"] | undefined>(undefined)
