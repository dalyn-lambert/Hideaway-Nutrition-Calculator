'use client';

import React from 'react';
import * as data from '../../public/BYOPizzaData.json';
import { CategoryData } from './lib/types';
export default function Home() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [item, setItem] = React.useState('');
  const { crust, sauce } = data;
  console.log(crust);
  const categories: CategoryData[] = [{ name: 'crusts', options: crust }, ,];
  return (
    <main className='flex min-h-screen flex-col gap-6 items-center p-4'>
      <div>Hideaway Nutrition Calculator</div>
      <div>Current: {item}</div>
      <div className='flex flex-row gap-2'>
        <span>{macros.cal} cal</span>
        <span>{macros.protein} protein</span>
        <span>{macros.fat} fat</span>
        <span>{macros.carb} carb</span>
      </div>
      {/* {categories.map((category) => (
        <div key={category.name}>
          <span className='text-xl'>{category.name}</span>
          <MenuCategory category={category.name} items={category.options} />
        </div>
      ))} */}
    </main>
  );
}
