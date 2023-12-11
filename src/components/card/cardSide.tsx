import classNames from "classnames";
import type { CSSProperties, ReactNode } from "react";

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
        "absolute flex h-full w-full flex-col items-center justify-start rounded-xl bg-[#DBD9DB] px-6 py-6 shadow-xl",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardSide;
