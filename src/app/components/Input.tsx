import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const inputVariants = tv({
  base: "flex w-full rounded focus:outline-none",
  variants: {
    size: {
      default: "py-3 px-5",
    },
    color: {
      default: "bg-zinc-800",
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputVariants>;

export function Input({ size, ...props }: InputProps) {
  return <input className={inputVariants({ size })} {...props}></input>;
}
