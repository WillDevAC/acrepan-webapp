"use client";

import { Chip } from "../components/Chip";
import { useState } from "react";

const ChipsList = ["Principal", "Atacado", "Varejo"];

export function Chips() {
  const [activeChip, setActiveChip] = useState<string | null>(ChipsList[0]);

  const handleChipClick = (label: string) => {
    setActiveChip(label === activeChip ? null : label);
  };

  return (
    <>
      {ChipsList.map((chipLabel) => (
        <Chip
          key={chipLabel}
          label={chipLabel}
          active={activeChip === chipLabel}
          onClick={() => handleChipClick(chipLabel)}
        />
      ))}
    </>
  );
}
