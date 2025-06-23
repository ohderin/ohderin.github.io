import * as React from "react";

type Variant = "outline" | "default";
type Size = "icon" | "default";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: false;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

interface ButtonAsChildProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild: true;
  variant?: Variant;
  size?: Size;
  children: React.ReactElement;
}

type Props = ButtonProps | ButtonAsChildProps;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      asChild = false,
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
      const child = React.Children.only(children) as React.ReactElement<
        React.AnchorHTMLAttributes<HTMLAnchorElement>
      >;
      return React.cloneElement(
        child,
        {
          ...props,
          className: base + " " + variantClass + " " + sizeClass + " " + (child.props.className ?? "") + " " + className,
          ref,
        } as React.AnchorHTMLAttributes<HTMLAnchorElement> & { ref: typeof ref }
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={base + " " + variantClass + " " + sizeClass + " " + className}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
