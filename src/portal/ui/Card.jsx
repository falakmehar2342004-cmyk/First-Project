import { cx } from "../lib/cx.js";
/** Portal ka standard card. hover=true par halka lift. Rang theme se aate hain. */
export default function Card({ as: Tag = "div", hover = false, className, children, ...rest }) {
  return <Tag className={cx("p-card", hover && "p-card--hover", className)} {...rest}>{children}</Tag>;
}
