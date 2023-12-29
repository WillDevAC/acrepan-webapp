import { Card } from "./Card";
import { Info } from "./Info";

export function Highlighted() {
  return (
    <>
      <section className="pt-10 pb-5">
        <Info title="Destaques" redirect="#" />
      </section>
      <div className="flex gap-2 w-full overflow-x-auto no-scrollbar">
        <Card typeBadge="highlighted" />
        <Card typeBadge="highlighted" />
        <Card typeBadge="highlighted" />
      </div>
    </>
  );
}