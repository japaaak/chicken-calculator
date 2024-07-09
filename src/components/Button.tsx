import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "rounded-full text-base font-medium outline-none shadow-md font-zenmarugothic",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-main",
    "active:opacity-80 active:shadow-inner active:translate-y-1",
    "ease-in duration-200",
  ],

  variants: {
    variant: {
      // mt-6 mx-auto w-fit
      primary:
        "w-fit px-9 py-2 bg-main text-brown-500 hover:translate-y-0.5 hover:opacity-80",
      secondary:
        "w-fit px-9 py-2 bg-white-0 border-2 border-main text-brown-500 hover:translate-y-0.5 hover:opacity-80",
      disabled:
        "w-fit mx-auto bg-brown-300 shadow-none text-brown-400 px-12 py-2 cursor-not-allowed",
      noborder: "bg-transparent shadow-none text-brown-500 hover:opacity-80",
      edit: "px-4 py-1 absolute top-3 right-3 bg-main rounded-md",
      simple: "text-sm px-4 py-1 bg-main rounded-md",
      simpleSecondary:
        "text-sm px-4 py-1 bg-white-0 border-2 border-main text-brown-500 rounded-md",
      simpleError:
        "text-sm px-4 py-1 bg-white-0 border-2 border-red-100 text-brown-500 rounded-md",
      simpleDisabled:
        "text-sm px-4 py-1 bg-brown-300 shadow-none text-brown-400 cursor-not-allowed rounded-md",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

// export interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof button>{}
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export function Button({ variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${button({ variant })} ${props.className}`}
    />
  );
}
