import React from 'react';
import { Chip } from "../Chip";

interface IChipsProps {
  activeChip: 'principal' | 'cakes' | 'breads';
}

export function Chips(props: IChipsProps) {
  const { activeChip } = props;

  return (
    <>
      <Chip label="Principal" active={activeChip === 'principal'} redirect='/home/all' />
      <Chip label="Pães" active={activeChip === 'breads'} redirect='/home/breads' />
      <Chip label="Bolos" active={activeChip === 'cakes'} redirect='/home/cakes' />
    </>
  );
}
