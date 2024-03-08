'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import MenuCheckbox from '@/components/MenuCheckbox';
import MenuRadioButtonGroup from '@/components/MenuRadioButtonGroup';
import data from 'public/sandwiches.json';
export default function Sandwiches() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [macrosColeSlaw, setMacrosColeSlaw] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selected, setSelected] = React.useState('');
  const [selectedColeSlaw, setSelectedColeSlaw] = React.useState('');
  const sandwichesNoChoice: MenuItem[] = data['no-choices'];
  const addColeSlaw: MenuItem[] = data.extra;
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='text-lg'>Sandwiches</div>
      <div className='flex flex-col items-center text-center'>
        <div className='flex flex-row gap-2'>
          {selected || selectedColeSlaw ? '' : 'Please make a selection...'}
          <span>{selected}</span>
          {selected && selectedColeSlaw ? '&' : ''}
          <span>{selectedColeSlaw}</span>
        </div>
        <div className='flex flex-row gap-2'>
          <span>{macros.cal + macrosColeSlaw.cal} cal</span>
          <span>{macros.protein + macrosColeSlaw.protein} protein</span>
          <span>{macros.fat + macrosColeSlaw.fat} fat</span>
          <span>{macros.carb + macrosColeSlaw.carb} carb</span>
        </div>
      </div>
      <MenuRadioButtonGroup
        category='sandwich'
        items={sandwichesNoChoice}
        setSelected={setSelected}
        setMacros={setMacros}
      />
      <MenuCheckbox
        category='add-coleslaw'
        items={addColeSlaw}
        setSelected={setSelectedColeSlaw}
        setMacros={setMacrosColeSlaw}
      />
    </div>
  );
}
