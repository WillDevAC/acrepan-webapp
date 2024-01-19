"use client";

import Link from "next/link";
import Image from "next/image";
import Cookie from "js-cookie";

import { BeatLoader } from "react-spinners";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { Input } from "../Input";
import { toast } from "sonner";

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    if (formData.email === "" || formData.password === "") {
      toast.warning("Preencha suas credenciais.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://acrepan-api-v2-production.up.railway.app/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error("Senha ou usuário inválido.");
        return;
      }

      const data = await response.json();

      Cookie.set("auth-data", JSON.stringify(data.user));
      Cookie.set("auth-token", data.token);

      router.push("/home/all");
    } catch (error) {
      toast.error("Erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-7">
      <Image src="/logo.png" height={280} width={280} alt="Website Logo" />
      <form action="#" className="flex flex-col gap-3 w-full">
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </form>
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? <BeatLoader color="white" size={10} /> : "Entrar"}
      </Button>
      <section className="flex flex-col items-center justify-center w-full text-gray-500">
        <p>Não possui uma conta?</p>
        <Link href="#" className="text-sm font-semibold text-gray-400">
          Cadastra-se
        </Link>
      </section>
    </div>
  );
}
