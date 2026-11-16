import { cx } from "../lib/cx.js";

/**
 * Har page ka upar wala gradient banner. Gradient/glow theme se (--p-hero).
 * Do tareeqe: (1) props: badge/title/description/actions   (2) children: apna andar ka markup.
 */
export default function PageHero({ badge, title, description, actions, children, glow = true, padding = "p-6 lg:p-8", className, innerClassName }) {
  return (
    <section data-purpose="hero-banner" className={cx("p-hero rounded-3xl text-white shadow-lg shadow-teal-700/10", padding, className)}>
      {glow && <div className="p-hero-glow" />}
      <div className={cx("relative z-10", innerClassName)}>
        {(title || badge || actions) ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              {badge && <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-2"><span className="w-2 h-2 rounded-full bg-portal-mint animate-pulse" />{badge}</div>}
              {title && <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-1.5">{title}</h2>}
              {description && <p className="text-teal-50 text-sm leading-relaxed opacity-95">{description}</p>}
            </div>
            {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
