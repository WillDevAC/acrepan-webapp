"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { Button } from "./Button";
import { Input } from "./Input";
import Image from "next/image";

export function LoginForm() {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col items-center justify-center gap-7">
      <Image src='/logo.png' height={280} width={280} alt="Website Logo"/>
      <Button color="google" size="google">
        Continuar com Google
      </Button>
      <form action="#" className="flex flex-col gap-3 w-full">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
      </form>
      <Button onClick={() => router.push("/home/all")}>Entrar</Button>
      <section className="flex flex-col items-center justify-center w-full text-gray-500">
        <p>Não possui uma conta?</p>
        <Link className="text-sm font-semibold text-gray-400" href="#">
          Cadastra-se
        </Link>
      </section>
    </div>
  );
}
