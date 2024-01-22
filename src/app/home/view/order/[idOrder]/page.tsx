import { Header } from "@/app/components/Header";
import { CircleDollarSign, MapPin, Store } from "lucide-react";

export default function ViewOrder() {
  return (
    <>
      <Header type="back" isText="Pedido #2391" isBackUrl="/home/my-orders" />

      <div className="flex flex-col p-5 gap-10">
        <div className="flex gap-5">
          <section className="flex">
            <Store />
          </section>
          <section className="flex flex-col gap-2">
            <h1 className="text-md font-bold">ACREPAN PÃES FINOS</h1>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm">3x - pão francês</span>
              <span className="text-gray-500 text-sm">5x - pão caseirinho</span>
              <span className="text-gray-500 text-sm">
                35x - pão redondinho
              </span>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-md">Pedido #2359</p>
          <section className="flex items-center justify-between text-sm">
            <p>Subtotal: </p>
            <span>R$ 00,00</span>
          </section>
          <section className="flex items-center justify-between text-sm">
            <p>Tax. Serviço: </p>
            <span>R$ 00,00</span>
          </section>
          <section className="flex items-center justify-between text-sm">
            <p>Tax. Entrega: </p>
            <span>R$ 00,00</span>
          </section>
          <section className="flex items-center justify-between text-sm">
            <p>Descontos: </p>
            <span>-</span>
          </section>
          <section className="flex items-center justify-between">
            <p className="font-bold">Total: </p>
            <span>R$ 00,00</span>
          </section>
        </div>
        <h1 className="font-semibold text-md">Entrega e Pagamento</h1>
        <div className="p-1 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <MapPin />
            <div className="flex flex-col">
              <p className="font-semibold ">Travessa neutel maia, 12</p>
              <span className="text-gray-500 text-sm">Travessa neutel maia, 12</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CircleDollarSign />
            <div className="flex flex-col">
              <p className="font-semibold">Pagamento pelo App</p>
              <span className="text-gray-500 text-sm">PIX</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
