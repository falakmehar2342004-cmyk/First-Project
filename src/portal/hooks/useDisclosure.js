import { useCallback, useState } from "react";

/** open/close/toggle state — Modal, Drawer, dropdown sab ke liye ek hi hook. */
export function useDisclosure(initial = false) {
  const [isOpen, setOpen] = useState(initial);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  return { isOpen, open, close, toggle, setOpen };
}
