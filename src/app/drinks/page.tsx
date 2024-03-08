'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import MenuRadioButtonGroup from '@/components/MenuRadioButtonGroup';
import data from 'public/drinks.json';
export default function Drinks() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selected, setSelected] = React.useState('');
  const drinks: MenuItem[] = data.drinks;
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='text-lg'>Drinks</div>
      <div className='flex flex-col items-center text-center'>
        <div className='flex flex-row gap-2'>
          {selected ? '' : 'Please make a selection...'}
          <span>{selected}</span>
        </div>
        <div className='flex flex-row gap-2'>
          <span>{macros.cal} cal</span>
          <span>{macros.protein} protein</span>
          <span>{macros.fat} fat</span>
          <span>{macros.carb} carb</span>
        </div>
      </div>
      <MenuRadioButtonGroup category='drinks' items={drinks} setSelected={setSelected} setMacros={setMacros} />
    </div>
  );
}
