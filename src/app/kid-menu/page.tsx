'use client';

import { MenuItem } from '@/lib/types';
import React from 'react';

import CurrentSelection from '@/components/CurrentSelection';
import MenuRadioButtonGroup from '@/components/MenuRadioButtonGroup';
import PageTitle from '@/components/PageTitle';
import data from 'public/kid-menu.json';
export default function KidMenu() {
  const [foodMacros, setFoodMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [drinkMacros, setDrinkMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selectedFood, setSelectedFood] = React.useState('');
  const [selectedDrink, setSelectedDrink] = React.useState('');
  const kidsFood: MenuItem[] = data.food;
  const kidsDrinks: MenuItem[] = data.drinks;

  return (
    <>
      <PageTitle title='Kid Menu' />
      <CurrentSelection selected={[selectedDrink, selectedFood]} macros={[foodMacros, drinkMacros]} />
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
    </>
  );
}
