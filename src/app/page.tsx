'use client';

import React from 'react';
import * as data from '../../public/data.json';
export default function Home() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [item, setItem] = React.useState('');
  const { crusts, sauces } = data;

  return (
    <main className='flex min-h-screen flex-col gap-6 items-center text-xs p-4'>
      <div>Hideaway Nutrition Calculator</div>
      <div>Current: {item}</div>
      <div className='flex flex-row gap-2'>
        <span>{macros.cal} cal</span>
        <span>{macros.protein} protein</span>
        <span>{macros.fat} fat</span>
        <span>{macros.carb} carb</span>
      </div>
      <div>
        <div className='text-3xl'>Crusts</div>
        <table className='table-auto '>
          <thead className='uppercase'>
            <tr>
              <th></th>
              <th className='px-2'>Name</th>
              <th className='px-2'>Cal</th>
              <th className='px-2'>Protein</th>
              <th className='px-2'>Fat</th>
              <th className='px-2'>Carb</th>
            </tr>
          </thead>
          <tbody>
            {crusts.map((crust) => (
              <tr key={crust.name}>
                <td>
                  <input
                    type='radio'
                    id={crust.name}
                    name='crust'
                    value={crust.name}
                    onChange={() => {
                      setMacros({
                        cal: crust.calories,
                        protein: crust.protein,
                        fat: crust.total_fat,
                        carb: crust.total_carbohydrates,
                      });
                      setItem(crust.name);
                    }}
                  />
                </td>
                <td className='px-2'>{crust.name}</td>
                <td className='px-2 text-center'>{crust.calories}</td>
                <td className='px-2 text-center'>{crust.protein}</td>
                <td className='px-2 text-center'>{crust.total_fat}</td>
                <td className='px-2 text-center'>{crust.total_carbohydrates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
