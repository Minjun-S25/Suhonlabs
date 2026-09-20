import { statusLabels, type ProductStatus } from "@/lib/products";

export function StatusPill({ status }: { status: ProductStatus }) {
  return (
    <span className="status">
      <span className="status__dot" aria-hidden="true" />
      <span className="visually-hidden">Status: </span>
      {statusLabels[status]}
    </span>
  );
}
