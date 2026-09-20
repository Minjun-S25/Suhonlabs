/**
 * A mailto link that is allowed to wrap, but only at the "@".
 *
 * These addresses are longer than some of the columns they sit in. Left to
 * `overflow-wrap: anywhere` the browser snaps them mid-domain
 * ("…@outl / ook.com"); a <wbr> gives it one sensible place to break instead.
 * <wbr> is an empty element, so the link's text is still exactly the address.
 */
export function EmailLink({ address, className }: { address: string; className?: string }) {
  const at = address.lastIndexOf("@");
  const local = at === -1 ? address : address.slice(0, at);
  const domain = at === -1 ? "" : address.slice(at);

  return (
    <a className={className} href={`mailto:${address}`}>
      {local}
      {domain ? (
        <>
          <wbr />
          {domain}
        </>
      ) : null}
    </a>
  );
}
