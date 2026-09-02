"use client";

import { useId, useState, type ComponentProps } from "react";

type FloatingFieldProps = Omit<ComponentProps<"input">, "placeholder"> & {
  label: string;
  invalid?: boolean;
};

export function FloatingField({
  label,
  invalid = false,
  className = "",
  value,
  onFocus,
  onBlur,
  ...props
}: FloatingFieldProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  const filled = value !== undefined && value !== null && String(value).length > 0;
  const raised = focused || filled;

  const borderColor = invalid ? "border-x-red" : focused ? "border-x-blue" : "border-line";
  const labelColor = invalid ? "text-x-red" : focused ? "text-x-blue" : "text-muted";

  return (
    <div className={`relative ${className}`}>
      <input
        {...props}
        id={id}
        value={value}
        onFocus={(event) => {
          setFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          onBlur?.(event);
        }}
        className={`h-[59px] w-full rounded border bg-transparent px-2 pt-5 pb-1 text-[17px] text-foreground outline-none ${borderColor} ${focused ? "border-2 px-[7px]" : ""}`}
      />
      
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-2 transition-all duration-150 ${labelColor} ${raised ? "top-[9px] text-[13px]" : "top-[19px] text-[17px]"}`}
      >
        {label}
      </label>
    </div>
  );
}