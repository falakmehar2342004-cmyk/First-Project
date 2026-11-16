import { cx } from "../lib/cx.js";

/**
 * Standard table. Header ka teal + white rang theme (portal-theme.css) se aata hai.
 * columns: [{ key, label, align?: "right"|"center", className?, render?: (row) => node }]
 */
export default function DataTable({ columns, rows, rowKey = "id", onRowClick, selectedKey, empty = "Koi record nahi mila.", className }) {
  return (
    <div className={cx("overflow-x-auto custom-scrollbar", className)}>
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="text-[11px] uppercase tracking-wider font-bold">
            {columns.map((c) => <th key={c.key} className={cx("py-3 px-4 first:rounded-tl-xl last:rounded-tr-xl whitespace-nowrap", c.align === "right" && "text-right", c.align === "center" && "text-center")}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-portal-border/70">
          {rows.length === 0 && <tr><td colSpan={columns.length} className="py-10 text-center text-portal-ink-muted text-sm">{empty}</td></tr>}
          {rows.map((r) => (
            <tr key={r[rowKey]} onClick={onRowClick ? () => onRowClick(r) : undefined}
              className={cx("transition-colors", onRowClick && "cursor-pointer hover:bg-portal-tint/70", selectedKey === r[rowKey] && "bg-portal-brand/5")}>
              {columns.map((c) => <td key={c.key} className={cx("py-3 px-4 text-portal-ink", c.align === "right" && "text-right", c.align === "center" && "text-center", c.className)}>{c.render ? c.render(r) : r[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
