import React from "react";
import { cn } from "../../utils/helpers";

const Input = React.forwardRef(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-xs text-[#8899BB] font-medium">{label}</label>
        )}
        <input
          ref={ref}
          className={cn("input-field", error && "border-red-500/60 focus:border-red-500", className)}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
