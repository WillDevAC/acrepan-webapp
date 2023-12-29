import Image from "next/image";

export function Header() {
  return (
    <header className="w-full flex h-auto items-center justify-between px-8 py-10">
      <div className="flex items-center justify-center">
        <Image src='/logo.png' height={180} width={180} alt="Website Logo"/>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-light text-right">Seja bem vindo,</span>
        <p className="text-xl font-bold text-right">Lucas Costa</p>
      </div>
    </header>
  );
}
