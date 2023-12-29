import { Bell, CircleUser } from "lucide-react";

import Image from "next/image";

export function Header() {
  return (
    <header className="w-full flex h-auto items-center justify-between px-4 py-1">
      <div className="flex items-center">
        <Image src='/logo.png' height={150} width={150} alt="Website Logo"/>
      </div>
      <div className="flex items-center gap-3">
        <CircleUser />
      </div>
    </header>
  );
}
