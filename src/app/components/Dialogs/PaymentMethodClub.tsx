"use client";

import { Button } from "../Button";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PaymentMethodsClub } from "../Sections/PaymentMethodsClub";

import { toast } from "sonner";

import api from "@/services/api";
import { BeatLoader } from "react-spinners";

interface IPaymentMethodClubProps {
  selectedPlan: any;
  isOpen: boolean;
  closeModal: (value: boolean) => void;
}

export function PaymentMethodClub({
  isOpen,
  closeModal,
  selectedPlan,
}: IPaymentMethodClubProps) {
  const [methodPayment, setMethodPayment] = useState("");

  const [loading, setLoading] = useState(false);

  const finishOrderPlan = async () => {
    if (methodPayment === "") {
      toast.warning("Selecione uma forma de pagamento.");
      return;
    }

    if (methodPayment === "boleto") {
      toast.info("Forma de pagamento em manuntenção.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        `/plan/add-me/${selectedPlan}?type_payment=${methodPayment}`,
        {
          planId: selectedPlan,
          type_payment: methodPayment,
        }
      );

      if (response.data.paymentUrl) {
        window.open(response.data.paymentUrl, "_blank");
        //redireciona usuário para pagina de aguardando pagamento
      }
    } catch (error) {
      toast.error("Falha em se inscrever no plano.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/85" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Formas de pagamento
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Selecione abaixo a sua forma de pagamento.
                    </p>
                  </div>
                  <div className="mt-2">
                    <PaymentMethodsClub
                      methodPayment={methodPayment}
                      setMethodPayment={setMethodPayment}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-end">
                    <Button onClick={finishOrderPlan} disabled={loading}>
                      {loading ? (
                        <BeatLoader color="white" size={10} />
                      ) : (
                        "Finalizar pedido"
                      )}
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
