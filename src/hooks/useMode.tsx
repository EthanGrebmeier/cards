"use client";

import { useSearchParams } from "next/navigation";
import type { z } from "zod";
import type { modeSchema } from "~/schemas/util/navigation";
import useAppendQuery from "~/utils/useAppendQuery";

const useMode = () => {
  const queryParams = useSearchParams();
  const appendQuery = useAppendQuery();

  const currentMode = queryParams.get("mode");

  const setMode = (mode: z.infer<typeof modeSchema>) => {
    appendQuery("mode", mode);
  };

  return {
    isEditing: currentMode === "edit",
    setMode,
  };
};

export default useMode;
