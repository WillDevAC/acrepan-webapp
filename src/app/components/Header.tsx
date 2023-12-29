import { Bell, ChevronLeft, CircleUser } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface IHeaderProps {
  type: "default" | "back";
}

export function Header({ type = "default" }: IHeaderProps) {
  return (
    <>
      {type === "default" && (
        <header className="w-full flex h-auto items-center justify-between px-4 py-1">
        <div className="flex items-center">
          <Image src="/logo.png" height={150} width={150} alt="Website Logo" />
        </div>
        <div className="flex items-center gap-3">
          <CircleUser />
        </div>
      </header>
      )}
      {type === "back" && (
        <header className="w-full flex h-auto items-center justify-between px-4 py-5">
        <Link href='/home/all' className="flex items-center gap-3">
          <ChevronLeft />
        </Link>
      </header>
      )}
    </>
  );
}
