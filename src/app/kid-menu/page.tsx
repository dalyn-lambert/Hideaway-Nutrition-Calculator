'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import MenuRadioButtonGroup from '@/components/MenuRadioButtonGroup';
import data from 'public/kid-menu.json';
export default function KidMenu() {
  const [foodMacros, setFoodMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [drinkMacros, setDrinkMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selectedFood, setSelectedFood] = React.useState('');
  const [selectedDrink, setSelectedDrink] = React.useState('');
  const kidsFood: MenuItem[] = data.food;
  const kidsDrinks: MenuItem[] = data.drinks;

  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='text-lg'>Kid Menu</div>
      <div className='flex flex-col items-center text-center'>
        <div className='flex flex-row gap-2'>
          {selectedFood || selectedDrink ? '' : 'Please make a selection...'}
          <span>{selectedFood}</span>
          {selectedFood && selectedDrink ? '&' : ''}
          <span>{selectedDrink}</span>
        </div>
        <div className='flex flex-row gap-2'>
          <span>{drinkMacros.cal + foodMacros.cal} cal</span>
          <span>{drinkMacros.protein + foodMacros.protein} protein</span>
          <span>{drinkMacros.fat + foodMacros.fat} fat</span>
          <span>{drinkMacros.carb + foodMacros.carb} carb</span>
        </div>
      </div>
      <MenuRadioButtonGroup
        category='food'
        items={kidsFood}
        setSelected={setSelectedDrink}
        setMacros={setDrinkMacros}
      />
      <MenuRadioButtonGroup
        category='drinks'
        items={kidsDrinks}
        setSelected={setSelectedFood}
        setMacros={setFoodMacros}
      />
    </div>
  );
}
