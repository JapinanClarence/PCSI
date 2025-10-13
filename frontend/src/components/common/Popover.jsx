import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export function Popover({
  trigger,
  children,
  orientation = "bottom",
  responsiveOrientation,
  className,
  triggerable = false,
  onCancel,
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

  const getOrientationClass = (orientation) => {
    const classes = {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
      left: "right-full mr-2",
      right: "left-full ml-2",
    };
    return classes[orientation] || classes.bottom;
  };

  // Handle responsive orientation
  const getResponsiveOrientationClass = () => {
    if (responsiveOrientation) {
      const { small, medium } = responsiveOrientation;
      const smallClass = getOrientationClass(small);
      const mediumClass = getOrientationClass(medium);
      
      // Use Tailwind responsive classes
      return `${smallClass} md:${mediumClass}`;
    }
    return getOrientationClass(orientation);
  };

  const orientationClass = getResponsiveOrientationClass();

  const handleClose = () => {
    setOpen(false);
    onCancel?.();
  };

  return (
    <div ref={popoverRef} className={clsx("relative inline-block", className)}>
      <div onClick={() => setOpen((prev) => !prev)}>{trigger}</div>

      {open && (
        <div
          className={clsx(
            "absolute border bg-white shadow-lg rounded-lg",
            orientationClass
          )}
        >
          {typeof children === 'function' ? children({ close: handleClose }) : children}
        </div>
      )}
    </div>
  );
}
