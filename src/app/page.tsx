'use client';

import React from 'react';
import * as data from '../../public/data.json';
export default function Home() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [item, setItem] = React.useState('Default');
  const { crusts, sauces } = data;
  return (
    <main className='flex min-h-screen flex-col gap-6 items-center p-24 text-2xl'>
      <div>Hideaway Nutrition Calculator</div>
      <div>Current: {item}</div>
      <div className='flex flex-row gap-4'>
        <span>{macros.cal} cal</span>
        <span>{macros.protein} protein</span>
        <span>{macros.fat} fat</span>
        <span>{macros.carb} carb</span>
      </div>
      <div>
        <div className='text-3xl'>Crusts</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cal</th>
              <th>Fat</th>
              <th>Carb</th>
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
                    onChange={() =>
                      setMacros({ cal: crust.calories, protein: 100, fat: crust.fat, carb: crust.carbohydrates })
                    }
                  />
                </td>
                <td>{crust.name}</td>
                <td>{crust.calories}</td>
                <td>{crust.fat}</td>
                <td>{crust.carbohydrates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
