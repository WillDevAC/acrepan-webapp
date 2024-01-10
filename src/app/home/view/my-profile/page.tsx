import { Menu } from "@/app/components/Menu";

export default function ProfilePage() {
  return (
    <>
      <div className="p-5 flex items-center justify-between w-full">
        <section className="flex items-center bg-white w-full p-3 rounded">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Bem vindo,</span>
              <p className="font-bold">Wydenmairion Silva.</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="bg-orange-200 text-orange-600 p-1 rounded text-sm">Plano básico</p>
            </div>
          </div>
        </section>
      </div>
      <Menu />
    </>
  );
}
