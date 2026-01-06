// import * as React from "react"
// // import { Slot } from "@radix-ui/react-slot"
// import { cva } from "class-variance-authority";

// // import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//         outline:
//           "border border-input shadow-sm hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2",
//         sm: "h-8 rounded-md px-3 text-xs",
//         lg: "h-10 rounded-md px-8",
//         icon: "h-9 w-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
//   const Comp = asChild ? Slot : "button"
//   return (
//     <Comp
//       className={cn(buttonVariants({ variant, size, className }))}
//       ref={ref}
//       {...props} />
//   );
// })
// Button.displayName = "Button"

// export { Button, buttonVariants }




import React from "react";

const Button = React.forwardRef(
  (
    {
      children,
      className = "",
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variants = {
      default: "bg-emerald-600 text-white hover:bg-emerald-700",
      outline: "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",
      ghost: "text-emerald-600 hover:bg-emerald-100",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    // Size styles
    const sizes = {
      sm: "h-8 px-3 text-sm",
      default: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center rounded-md font-medium
          transition focus:outline-none disabled:opacity-50
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
