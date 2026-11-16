import { cx } from "../lib/cx.js";
/** Material Symbols icon: <Icon name="download" className="text-[18px]" /> */
export default function Icon({ name, className, ...rest }) {
  return <span aria-hidden="true" className={cx("material-symbols-outlined", className)} {...rest}>{name}</span>;
}
