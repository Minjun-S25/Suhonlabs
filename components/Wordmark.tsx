import styles from "./Wordmark.module.css";

/**
 * The studio mark is typographic: the name set tight and heavy, with the
 * registered sign as a small superior. No logo mark — the wordmark, the
 * rules and the grid carry the identity.
 *
 * The name is written in mixed case and uppercased in CSS so screen readers
 * read "SuhonLabs" rather than spelling it out.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={[styles.wordmark, className].filter(Boolean).join(" ")}>
      SuhonLabs
      <span className={styles.mark} aria-hidden="true">
        ®
      </span>
    </span>
  );
}
