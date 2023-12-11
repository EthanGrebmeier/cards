"use client";

import type { ReactNode } from "react";

type ScreenProps = {
  title: string;
  children: ReactNode;
};

const Screen = ({ title, children }: ScreenProps) => {
  return (
    <div className="relative flex flex-col gap-4 px-2 py-4">
      <h2 className="text-xl"> {title} </h2>
      {children}
    </div>
  );
};

export default Screen;
