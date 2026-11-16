/** Chhota className joiner: cx("a", cond && "b", { c: true }) */
export function cx(...args) {
  return args
    .flatMap((a) => (a && typeof a === "object" && !Array.isArray(a) ? Object.entries(a).filter(([, v]) => v).map(([k]) => k) : a))
    .filter(Boolean)
    .join(" ");
}
