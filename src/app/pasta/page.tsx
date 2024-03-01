'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import MenuCategory from '@/components/MenuCategory';
import data from 'public/pastas.json';
export default function Pastas() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selected, setSelected] = React.useState('');
  const pastas: MenuItem[] = data.pastas;
  return (
    <main className='flex flex-col items-center gap-6'>
      <div className='text-lg'>Pastas</div>
      <div className='text-center'>
        <div>Current: {selected}</div>
        <div className='flex flex-row gap-2'>
          <span>{macros.cal} cal</span>
          <span>{macros.protein} protein</span>
          <span>{macros.fat} fat</span>
          <span>{macros.carb} carb</span>
        </div>
      </div>
      <MenuCategory category='pasta' items={pastas} setSelected={setSelected} setMacros={setMacros} />
    </main>
  );
}
