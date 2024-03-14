'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import CurrentSelection from '@/components/CurrentSelection';
import MenuRadioButtonGroup from '@/components/MenuRadioButtonGroup';
import PageTitle from '@/components/PageTitle';
import data from 'public/desserts.json';

export default function Dessert() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selected, setSelected] = React.useState('');
  const desserts: MenuItem[] = data.desserts;
  return (
    <>
      <PageTitle title='Desserts' />
      <CurrentSelection selected={[selected]} macros={[macros]} />
      <MenuRadioButtonGroup category='pasta' items={desserts} setSelected={setSelected} setMacros={setMacros} />
    </>
  );
}
