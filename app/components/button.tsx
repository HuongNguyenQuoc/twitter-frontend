import type { ComponentProps } from "react";

type Variant = "solid" | "outline" | "blue" | "ghost";

// Phần giống nhau ở MỌI nút
const base =
  "inline-flex h-10 w-full items-center justify-center gap-2 rounded-full px-4 text-[15px] font-bold leading-5 transition-colors select-none disabled:cursor-not-allowed";

// Phần khác nhau giữa các nút
const variants: Record<Variant, string> = {
  // Đảo màu theo theme: đen/chữ trắng ở light, trắng/chữ đen ở dark
  solid:
    "bg-foreground text-background hover:opacity-90 disabled:bg-disabled disabled:text-disabled-fg disabled:opacity-100",

  // Khóa cứng nền trắng vì logo thương hiệu có màu cố định
  outline: "border border-line bg-white text-[#0f1419] hover:bg-[#e6e6e6]",
  blue: "bg-x-blue text-white hover:bg-x-blue-hover disabled:opacity-50",
  ghost: "border border-line bg-transparent text-foreground hover:bg-hover",
};

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant = "solid", className = "", ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}