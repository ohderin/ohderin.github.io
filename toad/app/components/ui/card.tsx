import * as React from "react";

export function Card({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        "rounded-2xl border bg-white text-black shadow-md " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"p-6 " + className} {...props}>
      {children}
    </div>
  );
}
