import classNames from "classnames";
import type { CSSProperties, ReactNode } from "react";
import FlipCard from "./flipCard";

type CardSideProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};

const CardSide = ({ children, style, className }: CardSideProps) => {
  return (
    <div
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        ...style,
      }}
      className={classNames(
        "absolute flex h-full w-full  rounded-xl bg-[#DBD9DB]  shadow-xl",
        className,
      )}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-start px-6 py-10">
        <FlipCard />
        {children}
      </div>
    </div>
  );
};

export default CardSide;
