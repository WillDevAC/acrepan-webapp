import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

interface IPaymentMethodsClubProps {
  methodPayment: string;
  setMethodPayment: (value: string) => void;
}

export function PaymentMethodsClub({
  methodPayment,
  setMethodPayment,
}: IPaymentMethodsClubProps) {
  return (
    <RadioGroup
      value={methodPayment}
      onChange={setMethodPayment}
      className="flex flex-col gap-3 pt-5 pb-5"
    >
      <RadioGroup.Option value="pix">
        {({ checked }) => (
          <>
            <div
              className={`flex w-full h-16 p-5 gap-3 rounded-md bg-gray-200 ${
                checked ? "border-2 border-[#EAA85C]" : ""
              }`}
            >
              <img src="/pix.webp" alt="Pix" />
              <p className="font-bold">Pix</p>
            </div>
          </>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="boleto">
        {({ checked }) => (
          <>
            <div
              className={`flex w-full h-16 p-5 gap-3 rounded-md bg-gray-200 ${
                checked ? "border-2 border-[#EAA85C]" : ""
              }`}
            >
              <img src="/boleto.png" alt="Boleto" />
              <p className="font-bold">Boleto</p>
            </div>
          </>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}
