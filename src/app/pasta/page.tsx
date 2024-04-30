'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import CurrentSelection from '@/components/CurrentSelection';
import MenuRadioButtonGroup from '@/components/MenuRadioButtonGroup';
import PageTitle from '@/components/PageTitle';
import data from 'public/pastas.json';
export default function Pastas() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selected, setSelected] = React.useState('');
  const pastas: MenuItem[] = data.pastas;
  return (
    <>
      <PageTitle title='Pastas' />
      <CurrentSelection selected={[[selected]]} macros={[[macros]]} />
      <MenuRadioButtonGroup category='pasta' items={pastas} setSelected={setSelected} setMacros={setMacros} />
    </>
  );
}
