import styles from "./PageHeader.module.css";

type Props = {
  /** Compact metadata for the label row, e.g. "02 / ABOUT". */
  label?: string;
  /** Right-hand metadata on the same rule, e.g. "SUHONLABS / 2026". */
  meta?: string;
  title: string;
  /** Sits in the narrow secondary column beside the headline. */
  lede?: string;
  children?: React.ReactNode;
};

/**
 * The page masthead: a label rule, an oversized headline, and a narrow
 * secondary column. Every page opens on the same structure, so the grid
 * itself reads as part of the identity.
 */
export function PageHeader({ label, meta, title, lede, children }: Props) {
  return (
    <header className={styles.header}>
      <div className="container">
        {label || meta ? (
          <div className={styles.labelRow}>
            {label ? <p className="label">{label}</p> : <span />}
            {meta ? <p className="label label--muted">{meta}</p> : null}
          </div>
        ) : null}

        <div className={styles.grid}>
          <h1 className={styles.title}>{title}</h1>

          {lede || children ? (
            <div className={styles.aside}>
              {lede ? <p className={styles.lede}>{lede}</p> : null}
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
