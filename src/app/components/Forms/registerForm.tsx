"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";

import { Button } from "../Button";
import { Input } from "../Input";
import { toast } from "sonner";

import Link from "next/link";
import Image from "next/image";
import Cookie from "js-cookie";

import InputMask from "react-input-mask";

export function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.phone === ""
    ) {
      toast.warning("Preencha suas credenciais.");
      return;
    }

    const phoneWithoutMask = formData.phone.replace(/\D/g, "");

    if (formData.name.length < 6) {
      toast.warning("Insira um nome válido.");
      return;
    }

    if (phoneWithoutMask.length < 11) {
      toast.warning("Insira um número de telefone válido.");
      return;
    }

    if (formData.password.length < 6) {
      toast.warning("Insira uma senha de pelo menos 6 caracteres.");
      return;
    }

    if (formData.email.length < 6) {
      toast.warning("Insira um e-mail válido.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://acrepan-api-v2-production.up.railway.app/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error("Falha em registrar o usuário.");
        return;
      }

      const data = await response.json();

      Cookie.set("auth-data", JSON.stringify(data.user));
      Cookie.set("auth-token", data.token);

      router.push("/home/all");
    } catch (error) {
      toast.error("Falha em registrar o usuário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center gap-7">
        <Image src="/logo.png" height={280} width={280} alt="Website Logo" />
        <form action="#" className="flex flex-col gap-3 w-full">
          <Input
            placeholder="Nome completo"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <InputMask
            name="phone"
            className="flex w-full rounded focus:outline-none py-3 px-5 bg-gray-200"
            mask="(99) 999999999"
            placeholder="Telefone"
            type="tel"
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
          {loading ? <BeatLoader color="white" size={10} /> : "Registrar-se"}
        </Button>
        <section className="flex flex-col items-center justify-center w-full text-gray-500">
          <p>Já possui uma conta?</p>
          <Link href="/" className="text-sm font-semibold text-gray-400">
            Login
          </Link>
        </section>
      </div>
    </>
  );
}
