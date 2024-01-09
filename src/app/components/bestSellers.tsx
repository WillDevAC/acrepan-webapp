import { CardProduct } from "./CardProduct";
import { Info } from "./Info";

export function BestSellers() {
  return (
    <>
      <section className="pt-10 pb-5">
        <Info title="Mais vendidos" redirect="#" />
      </section>
      <div className="flex gap-2 w-full overflow-x-auto no-scrollbar">
        <CardProduct typeBadge="bestseller" />
        <CardProduct typeBadge="bestseller" />
        <CardProduct typeBadge="bestseller" />
      </div>
    </>
  );
}