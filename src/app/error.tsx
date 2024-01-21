"use client";

import { Button } from "./components/Button";

import Cookies from "js-cookie";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  const handleLogout = () => {
    Cookies.remove("auth-token");
    Cookies.remove("auth-data");
    window.location.href = "/";
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col gap-8">
      <img src="/logo.png" alt="Error Logo" className="max-w-56" />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">Ooops... Calma ai!</h1>
        <span className="text-gray-500">Aconteceu um erro inesperado.</span>
      </div>
      <div className="flex items-center gap-3">
        <Button onClick={reset}>Recarregar</Button>
        <Button color="chip" onClick={handleLogout}>
          Desconectar
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
