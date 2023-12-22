import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center rounded-md",
  variants: {
    size: {
      default: "p-3 h-15 px-4 w-full font-medium",
      google: 'p-3 h-12 px-4 w-full font-medium'
    },
    color: {
      default: "bg-white text-black",
      google: "bg-sky-700 text-white"
    }
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({ size, color, ...props }: ButtonProps) {
  return <button className={buttonVariants({ size, color })} {...props}></button>;
}
