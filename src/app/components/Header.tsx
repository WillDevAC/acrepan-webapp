import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="w-full flex h-auto items-center justify-between px-8 py-10">
      <div className="flex flex-col">
        <span className="text-sm font-light">Olá, bem vindo</span>
        <p className="text-xl font-bold">Lucas Costa</p>
      </div>
      <div className="flex items-center justify-center">
        <Search />
      </div>
    </header>
  );
}
