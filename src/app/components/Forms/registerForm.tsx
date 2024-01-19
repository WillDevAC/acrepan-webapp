"use client";

import { Button } from "../Button";
import { Input } from "../Input";

import Link from "next/link";
import Image from "next/image";

export function RegisterForm() {
  return (
    <>
      <Image src="/logo.png" height={280} width={280} alt="Website Logo" />
      <form action="#" className="flex flex-col gap-3 w-full">
        <Input placeholder="Nome completo" type="text" />
        <Input placeholder="Telefone" type="tel" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button>Cadastrar</Button>
        <section className="flex flex-col items-center justify-center w-full text-gray-500 pt-5">
          <p>Já possui uma conta?</p>
          <Link href="/" className="text-sm font-semibold text-gray-400">
            Login
          </Link>
        </section>
      </form>
    </>
  );
}
