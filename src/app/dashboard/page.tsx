"use client";

import { LayoutDashboard } from "@/layout/dashboard";
import { Chip } from "../components/Chip";
import { useState } from "react";

const ChipsList = [
  "Mostrar todos",
  "Atacado",
  "Varejo",
];

export default function DashboardPage() {
  const [activeChip, setActiveChip] = useState<string | null>(ChipsList[0]); // Inicializa com o rótulo do primeiro chip

  const handleChipClick = (label: string) => {
    setActiveChip(label === activeChip ? null : label);
  };

  return (
    <LayoutDashboard>
      <div className="flex overflow-x-auto gap-5">
        {ChipsList.map((chipLabel) => (
          <Chip
            key={chipLabel}
            label={chipLabel}
            active={activeChip === chipLabel}
            onClick={() => handleChipClick(chipLabel)}
          />
        ))}
      </div>
    </LayoutDashboard>
  );
}
