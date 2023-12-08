"use client";

import { Button } from "../elements/button";

import useMode from "~/hooks/useMode";

const ModeSwitch = () => {
  const { isEditing, setMode } = useMode();

  return (
    <Button
      onClick={() => {
        setMode(isEditing ? "view" : "edit");
      }}
      variant={isEditing ? "destructive" : "default"}
    >
      {isEditing ? "Cancel Edit" : "Edit Card"}
    </Button>
  );
};

export default ModeSwitch;
