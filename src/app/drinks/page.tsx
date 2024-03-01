'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import MenuCategory from '@/components/MenuCategory';
import data from 'public/drinks.json';
export default function Drinks() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [item, setItem] = React.useState('');
  const drinks: MenuItem[] = data.drinks;
  return (
    <main className='flex flex-col items-center gap-6'>
      <div className='text-lg'>Drinks</div>
      <div className='text-center'>
        <div>Current: {item}</div>
        <div className='flex flex-row gap-2'>
          <span>{macros.cal} cal</span>
          <span>{macros.protein} protein</span>
          <span>{macros.fat} fat</span>
          <span>{macros.carb} carb</span>
        </div>
      </div>
      <MenuCategory category='drinks' items={drinks} setItem={setItem} setMacros={setMacros} />
    </main>
  );
}
