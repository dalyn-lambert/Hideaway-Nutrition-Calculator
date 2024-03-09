'use client';

import CurrentSelection from '@/components/CurrentSelection';
import PageTitle from '@/components/PageTitle';
import React from 'react';
export default function BYOPizza() {
  const [macros, setMacros] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [selected, setSelected] = React.useState('');
  return (
    <>
      <PageTitle title='Build Your Own Pizza' />
      <CurrentSelection selected={[selected]} macros={[macros]} />
    </>
  );
}
