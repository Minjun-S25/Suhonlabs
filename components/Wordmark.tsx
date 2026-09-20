/**
 * The studio mark: two offset apertures — the studio and the product it
 * carries. Neutral by design so product colour never competes with it.
 */
export function Wordmark({ withText = true }: { withText?: boolean }) {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        focusable="false"
        fill="none"
      >
        <rect
          x="1.25"
          y="1.25"
          width="14"
          height="14"
          rx="3.25"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect x="8.75" y="8.75" width="14" height="14" rx="3.25" fill="currentColor" />
      </svg>
      {withText ? <span>SuhonLabs</span> : null}
    </>
  );
}
