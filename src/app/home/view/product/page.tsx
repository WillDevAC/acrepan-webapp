"use client";

import { AddCart } from "@/app/components/AddCart";
import { Header } from "@/app/components/Header";
import { MessageSquareText, Receipt } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/utils/functions";

import { useState } from "react";

import Image from "next/image";

export default function ViewProductPage() {
  const [selectedOption, setSelectedOption] = useState("varejo");
  const [observations, setObservations] = useState("");

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  const handleObservationsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setObservations(event.target.value);
  };

  const searchParams = useSearchParams();

  return (
    <>
      <Header type="back" isBackUrl="/home/all" />

      <div className="pr-5 pl-5 h-36 flex items-center justify-center">
        <Image
          src={searchParams.get("image") || "#"}
          alt="Product Image"
          width={50}
          height={50}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-5 w-full flex items-center justify-between">
        <section>
          <h1 className="font-bold text-lg">{searchParams.get("name")}</h1>
        </section>
        <section className="flex flex-col">
          <h2 className="text-xl text-[#EAA85C] font-medium">
            {selectedOption === "varejo" &&
              formatPrice(searchParams.get("priceVarejo"))}
            {selectedOption === "atacado" &&
              formatPrice(searchParams.get("priceAtacado"))}
          </h2>
        </section>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Receipt />
          <h1 className="font-bold">Tipo de compra</h1>
        </div>
        <div className="flex items-center mb-4 gap-4">
          <div className="flex items-center">
            <input
              type="radio"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              checked={selectedOption === "varejo"}
              onChange={() => handleOptionChange("varejo")}
            />
            <label className="ms-2 text-sm font-medium text-gray-900">
              Varejo
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              checked={selectedOption === "atacado"}
              onChange={() => handleOptionChange("atacado")}
            />
            <label className="ms-2 text-sm font-medium text-gray-900">
              Atacado
            </label>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <MessageSquareText />
          <h1 className="font-bold">Observações</h1>
        </div>
        <textarea
          rows={4}
          cols={50}
          className="bg-gray-200 rounded p-5 text-gray-500"
          placeholder="Informe aqui suas observações"
          onChange={handleObservationsChange}
        />
        <br /><br />
      </div>
      <AddCart
        price={
          selectedOption === "varejo"
            ? searchParams.get("priceVarejo") ?? "0"
            : searchParams.get("priceAtacado") ?? "0"
        }
        idProduct={searchParams.get("id") || "0"}
        selectedItem={selectedOption}
        name={searchParams.get("name") ?? "0"}
        image={searchParams.get("image") ?? "0"}
        observations={observations}
      />
    </>
  );
}
