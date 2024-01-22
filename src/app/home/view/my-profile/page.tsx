import { Header } from "@/app/components/Header";
import { Menu } from "@/app/components/Menu";
import { Loading } from "@/app/components/Loading";
import { Suspense } from "react";

import { GetProfileDetails } from "@/app/components/Get/GetProfileDetails";
import { BadgePercent, LocateFixed, LogOut } from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      <Header type="back" isText="Meu Perfil" />
      <Suspense fallback={<Loading />}>
        <GetProfileDetails />
      </Suspense>
      <section className="flex flex-col p-5 gap-3">
        <article className="flex gap-3 bg-white p-2 h-16 items-center rounded-md">
          <div className="flex items-center justify-center">
            <BadgePercent size={25} />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Meu clube</p>
            <span className="text-sm text-gray-600">
              Visualizar seu clube de beneficios.
            </span>
          </div>
        </article>
        <article className="flex gap-3 bg-white p-2 h-16 items-center rounded-md">
          <div className="flex items-center justify-center">
            <LocateFixed size={25} />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Meus endereços</p>
            <span className="text-sm text-gray-600">
              Visualizar seu endereço.
            </span>
          </div>
        </article>
        <article className="flex gap-3 bg-white p-2 h-16 items-center rounded-md">
          <div className="flex items-center justify-center">
            <LogOut size={25} />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Desconectar</p>
            <span className="text-sm text-gray-600">
              Clique para sair do sistema.
            </span>
          </div>
        </article>
      </section>
      <Menu />
    </>
  );
}
