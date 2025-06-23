import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "outline" | "default";
  size?: "icon" | "default";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      variant = "default",
      size = "default",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClass =
      variant === "outline"
        ? "border-2 border-black bg-white text-black hover:bg-gray-100"
        : "bg-[#9d7af3] text-white hover:bg-[#a9f6ff]";
    const sizeClass =
      size === "icon"
        ? "w-12 h-12 p-0"
        : "h-12 px-6 py-2";
    if (asChild) {
      // For use as a wrapper around <a> or other components
      return React.cloneElement(
        React.Children.only(children as React.ReactElement) as any,
        {
          className:
            base + " " + variantClass + " " + sizeClass + " " + className,
          ref,
          ...props,
        }
      );
    }
    return (
      <button
        ref={ref}
        className={base + " " + variantClass + " " + sizeClass + " " + className}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
