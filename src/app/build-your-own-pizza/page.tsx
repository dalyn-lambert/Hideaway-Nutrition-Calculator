'use client';

import React from 'react';
export default function BYOPizza() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [item, setItem] = React.useState('');
  // const { crust, sauce } = data;
  // const categories: CategoryData[] = [{ name: 'crusts', options: crust }, ,];
  return (
    <main className=''>
      <div>Build Your Own Pizza</div>
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
