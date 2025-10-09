import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export function Popover({
  trigger,
  children,
  orientation = "bottom",
  className,
  triggerable = false,
}) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close when clicking outside (only if not triggerable)
  useEffect(() => {
    if (triggerable) return; // Skip outside click listener if triggerable mode is on

    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [triggerable]);

  const orientationClass = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  }[orientation];

  return (
    <div ref={popoverRef} className={clsx("relative inline-block", className)}>
      <div onClick={() => setOpen((prev) => !prev)}>{trigger}</div>

      {open && (
        <div
          className={clsx(
            "absolute z-50 border bg-white shadow-lg rounded-lg",
            orientationClass
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
