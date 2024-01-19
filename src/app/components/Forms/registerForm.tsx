"use client";

import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";
import { toast } from "sonner";

import Link from "next/link";
import Image from "next/image";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    logFormData(formData);
  };

  const logFormData = (data: any) => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.phone === ""
    ) {
      toast.warning("Preencha suas credenciais.");
      return;
    }
  };

  return (
    <>
      <Image src="/logo.png" height={280} width={280} alt="Website Logo" />
      <div className="flex flex-col gap-3 w-full">
        <Input
          name="fullName"
          placeholder="Nome completo"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          name="phone"
          placeholder="Telefone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <Input
          name="email"
          placeholder="Email"  
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          name="password"
          placeholder="Senha"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button onClick={handleSubmit}>Cadastrar</Button>
        <section className="flex flex-col items-center justify-center w-full text-gray-500 pt-5">
          <p>Já possui uma conta?</p>
          <Link href="/" className="text-sm font-semibold text-gray-400">
            Login
          </Link>
        </section>
      </div>
    </>
  );
}
