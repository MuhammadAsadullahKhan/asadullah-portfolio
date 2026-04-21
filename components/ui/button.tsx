import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--accent)] text-white shadow-sm shadow-[color:var(--ring)] hover:bg-[color:var(--accent)]/90",
        outline:
          "border border-[color:var(--border-soft)] bg-[color:var(--card)] text-[color:var(--foreground)] hover:bg-[color:var(--accent-soft)]",
        ghost:
          "text-[color:var(--foreground)] hover:bg-[color:var(--accent-soft)]",
      },
      size: {
        default: "h-8 px-4",
        sm: "h-7 px-3 text-[0.7rem]",
        lg: "h-9 px-5 text-sm",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

