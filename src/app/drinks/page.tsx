'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import CurrentSelection from '@/components/CurrentSelection';
import MenuRadioButtonGroup from '@/components/MenuRadioButtonGroup';
import PageTitle from '@/components/PageTitle';
import data from 'public/drinks.json';
export default function Drinks() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selected, setSelected] = React.useState('');
  const drinks: MenuItem[] = data.drinks;
  return (
    <>
      <PageTitle title='Drinks' />
      <CurrentSelection selected={[selected]} macros={[macros]} />
      <MenuRadioButtonGroup category='drinks' items={drinks} setSelected={setSelected} setMacros={setMacros} />
    </>
  );
}
