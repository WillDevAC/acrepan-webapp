'use client'

import Link from "next/link";

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useRouter } from "next/navigation";

export default function authPage() {

  const router = useRouter();

  return (
    <section className="w-screen h-screen p-10">
      <Link href="#" className="text-white text-md font-bold flex w-full items-center justify-end">
        Continuar como visitante
      </Link>
      <div className="h-full flex flex-col items-center justify-center gap-7">
        <h1 className="text-3xl font-bold">ACREPAN WEB APP</h1>
        <Button color="google" size="google">Continuar com Google</Button>
        <form action='#' className="flex flex-col gap-3 w-full">
          <Input placeholder="Email" type="email"/>
          <Input placeholder="Senha" type="password"/>
        </form>
        <Button onClick={() => router.push('/dashboard')}>Entrar</Button>
        <section className="flex flex-col items-center justify-center w-full text-gray-300">
          <p>Não possui uma conta?</p>
          <Link className="text-sm font-semibold text-gray-300" href='#'>Cadastra-se</Link>
        </section>
      </div>
    </section>
  );
}
