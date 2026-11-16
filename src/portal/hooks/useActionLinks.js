import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Declarative button wiring (eval-free).
 * Pages ke static buttons ko text se route/action se jodta hai — ek hi click listener
 * (event delegation) container par lagta hai, is liye re-render par kuch toot-ta nahi.
 *
 *   const onClick = useActionLinks([
 *     [["new campaign"], "/portal/campaigns/new"],
 *     [["export"], () => toast("Export shuru")],
 *   ]);
 *   <div onClick={onClick}>...</div>
 */
export function useActionLinks(rules) {
  const navigate = useNavigate();
  return useCallback((event) => {
    const el = event.target.closest?.("button,a");
    if (!el || el.dataset.noWire !== undefined) return;
    const text = (el.textContent || "").toLowerCase().replace(/\s+/g, " ");
    for (const [words, target] of rules) {
      if (!words.some((w) => text.includes(w))) continue;
      event.preventDefault();
      if (typeof target === "function") target(el, event); else navigate(target);
      return;
    }
  }, [rules, navigate]);
}
