import { Header } from "@/app/components/Sections/Header";
import { Gem, Gift } from "lucide-react";

export default function OrdersPage() {
  return (
    <>
      <Header type="back" isText="Clube de benefícios" isBackUrl="/home/all" />
      <div className="flex items-center justify-center w-full p-5 flex-col">
        <img src="/clube.png" alt="Club" />
      </div>
      <div className="flex w-full p-5 flex-col gap-2">
        <section className="flex items-center gap-2">
          <Gem />
          <span>
            Até <b className="text-[#EAA85C]">20%</b> de desconto em todo
            pedido.
          </span>
        </section>
        <section className="flex items-center gap-2">
          <Gift />
          <span>Presentes do clube!</span>
        </section>
      </div>
      <div className="flex w-full p-5 flex-col gap-2">
        <h1 className="font-bold">Pode entrar e aproveitar</h1>
      </div>
      <div className="flex w-full pr-5 pl-5">
        
      </div>
    </>
  );
}
