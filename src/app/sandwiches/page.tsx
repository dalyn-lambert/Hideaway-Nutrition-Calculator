'use client';

import { MenuItem, SandwichWithBreadOption } from '@/lib/types';
import React from 'react';

import CurrentSelection from '@/components/CurrentSelection';
import MenuCheckbox from '@/components/MenuCheckbox';
import PageTitle from '@/components/PageTitle';
import SandwichTable from '@/components/SandwichTable';
import data from 'public/sandwiches.json';
export default function Sandwiches() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [macrosColeSlaw, setMacrosColeSlaw] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selected, setSelected] = React.useState('');
  const [selectedColeSlaw, setSelectedColeSlaw] = React.useState('');
  const sandwiches: SandwichWithBreadOption[] = data['choices'];
  const addColeSlaw: MenuItem[] = data.extra;
  return (
    <>
      <PageTitle title='Sandwiches' />
      <CurrentSelection selected={[selected, selectedColeSlaw]} macros={[macros, macrosColeSlaw]} />
      <SandwichTable category='sandwich' items={sandwiches} setSelected={setSelected} setMacros={setMacros} />
      <MenuCheckbox
        category='add-coleslaw'
        items={addColeSlaw}
        setSelected={setSelectedColeSlaw}
        setMacros={setMacrosColeSlaw}
      />
    </>
  );
}
