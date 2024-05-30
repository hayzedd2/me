import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
const ReceiptTitle = React.forwardRef<
  HTMLHeadingElement,
  TitleProps
>(({ className, ...props } , ref) => {
  return (
    <h1 ref={ref} className={cn("text-red-600 text-[2rem]", className)} {...props}></h1>
  );
});
export { ReceiptTitle };
