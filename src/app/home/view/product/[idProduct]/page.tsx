import { AddCartFooter } from "@/app/components/AddCart";
import { Header } from "@/app/components/Header";
import { MessageSquareText } from "lucide-react";

import Image from "next/image";

export default function ViewProductPage() {
  return (
    <>
      <Header type="back" isBackUrl="/home/all"/>

      <div className="pr-5 pl-5 h-36 flex items-center justify-center">
        <Image
          src="/pao.png"
          alt="Product Image"
          width={50}
          height={50}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-5 w-full flex items-center justify-between">
        <section>
          <h1 className="font-bold text-lg">Pão Baguete</h1>
        </section>
        <section className="flex flex-col">
          <h2 className="text-xl text-[#EAA85C] font-medium">R$ 10.00</h2>
        </section>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <MessageSquareText />
          <h1 className="font-bold">Observações</h1>
        </div>
        <textarea
          rows={5}
          cols={50}
          className="bg-gray-200 rounded p-5 text-gray-500"
          placeholder="Informe aqui suas observações"
        />
      </div>
      <AddCartFooter />
    </>
  );
}
