import Link from "next/link";

import { LoginForm } from "./components/loginForm";

export default function authPage() {
  return (
    <section className="w-screen h-screen p-10">
      <Link
        href="#"
        className="text-[#EAA85C] text-md font-bold flex w-full items-center justify-end"
      >
        Continuar como visitante
      </Link>
      <LoginForm />
    </section>
  );
}
