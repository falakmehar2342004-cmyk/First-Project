import { useEffect } from "react";

/** Keyboard shortcut (jaise "/" se search focus). Input mein type karte waqt ignore hota hai. */
export function useHotkey(key, handler) {
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key !== key || tag === "INPUT" || tag === "TEXTAREA" || document.activeElement?.isContentEditable) return;
      e.preventDefault();
      handler(e);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [key, handler]);
}
