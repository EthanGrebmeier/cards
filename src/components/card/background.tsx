import { type CSSProperties, type ReactNode } from "react";

type CardBackgroundProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const CardBackground = ({
  children,
  className,
  style,
}: CardBackgroundProps) => {
  return (
    <div
      className={`relative flex h-[600px] w-screen max-w-[400px]  rounded-md ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardBackground;
