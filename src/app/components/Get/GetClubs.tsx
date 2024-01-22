"use client";

import Link from "next/link";

import { Clubs } from "@/types/plans";
import { Button } from "../Button";
import { useState } from "react";
import { CardClub } from "../Cards/CardClub";

import { PaymentMethodClub } from "../Dialogs/PaymentMethodClub";

export function GetClubs({ plans, count }: Clubs) {
  const [selectedCard, setSelectedCard] = useState(
    plans.length > 0 ? plans[0].id : null
  );

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleCardClick = (cardId: any) => {
    setSelectedCard(cardId === selectedCard ? null : cardId);
  };

  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        {plans.map((plan) => (
          <CardClub
            key={plan.id}
            id={plan.id}
            isSelected={selectedCard === plan.id}
            onClick={() => handleCardClick(plan.id)}
            title={`Plano ${plan.title}`}
            price={plan.cost}
            discont={plan.porcent}
          />
        ))}

        <div className="pt-5">
          <Button onClick={() => setIsOpen(true)}>
            Participar do clube
          </Button>
        </div>
      </div>
      <PaymentMethodClub
        closeModal={closeModal}
        isOpen={isOpen}
        selectedPlan={selectedCard}
      />
    </>
  );
}
