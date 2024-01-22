import { CardOrder } from "@/app/components/Cards/CardOrder";
import { Header } from "@/app/components/Header";

export default function OrdersPage() {
  return (
    <>
      <Header type="back" isText="Meus pedidos" isBackUrl="/home/all" />
      <div className="flex flex-col w-full pr-5 pl-5 gap-3">
        <CardOrder id="1" order="2346" shippingMethod="Imediata" status="pending" total="250.00" />
        <CardOrder id="0" order="2345" shippingMethod="Imediata" status="canceled" total="250.00" />
        <CardOrder id="1" order="2346" shippingMethod="Agendada" status="arrived" total="250.00" />
        <CardOrder id="1" order="2346" shippingMethod="Imediata" status="shipping" total="250.00" />
      </div>
    </>
  );
}
