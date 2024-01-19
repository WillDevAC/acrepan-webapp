import { GetHighlighteds } from "../Get/GetHighlighteds";
import { ProductList } from "@/types/product";
import { Info } from "./Info";

import api from "@/services/api";

export async function Highlighted() {
  const response = await api.get("/product", {
    params: {
      isEmphasis: true,
    },
  });

  const products: ProductList = response.data;

  return (
    <>
      <section className="pt-10 pb-5">
        <Info title="Destaques" redirect="#" />
      </section>
      <GetHighlighteds products={products.products} count={products.count} />
    </>
  );
}
