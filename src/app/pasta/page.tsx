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
      <div className='flex flex-col items-center text-center'>
        <CurrentSelection selected={[selected]} />
        <div className='flex flex-row gap-2'>
          <span>{macros.cal} cal</span>
          <span>{macros.protein} protein</span>
          <span>{macros.fat} fat</span>
          <span>{macros.carb} carb</span>
        </div>
      </div>
      <MenuRadioButtonGroup category='pasta' items={pastas} setSelected={setSelected} setMacros={setMacros} />
    </>
  );
}
