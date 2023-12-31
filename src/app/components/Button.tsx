import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center rounded-md",
  variants: {
    size: {
      default: "p-3 h-15 px-4 w-full font-medium",
      google: 'p-3 h-12 px-4 w-full font-medium',
      chip: 'p-2 h-10 w-56 font-medium'
    },
    color: {
      default: "bg-[#EAA85C] text-black",
      google: "bg-sky-700 text-white",
      chip: "bg-[#303030] text-white"
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
