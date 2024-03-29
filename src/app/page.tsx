'use client';

import BYOPizzaTable from '@/components/BYOPizzaTable';
import CurrentSelection from '@/components/CurrentSelection';
import PageTitle from '@/components/PageTitle';
import PizzaSizeRadioButtons from '@/components/PizzaSizeRadioButtons';
import { PizzaWithSizeOptions } from '@/lib/types';
import data from 'public/BYOPizza.json';

import React from 'react';
export default function BYOPizza() {
  const emptyPizza: PizzaWithSizeOptions = {
    name: '',
    small: {
      name: 'small',
      calories: 0,
      calories_from_fat: 0,
      total_fat: 0,
      saturated_fat: 0,
      trans_fat: 0,
      polyunsaturated_fat: 0,
      monounsaturated_fat: 0,
      cholesterol: 0,
      sodium: 0,
      potassium: 0,
      total_carbohydrates: 0,
      dietary_fiber: 0,
      sugars: 0,
      added_sugars: 0,
      protein: 0,
    },
    medium: {
      name: 'medium',
      calories: 0,
      calories_from_fat: 0,
      total_fat: 0,
      saturated_fat: 0,
      trans_fat: 0,
      polyunsaturated_fat: 0,
      monounsaturated_fat: 0,
      cholesterol: 0,
      sodium: 0,
      potassium: 0,
      total_carbohydrates: 0,
      dietary_fiber: 0,
      sugars: 0,
      added_sugars: 0,
      protein: 0,
    },
    large: {
      name: 'large',
      calories: 0,
      calories_from_fat: 0,
      total_fat: 0,
      saturated_fat: 0,
      trans_fat: 0,
      polyunsaturated_fat: 0,
      monounsaturated_fat: 0,
      cholesterol: 0,
      sodium: 0,
      potassium: 0,
      total_carbohydrates: 0,
      dietary_fiber: 0,
      sugars: 0,
      added_sugars: 0,
      protein: 0,
    },
  };
  const [size, setSize] = React.useState('small');

  // CRUST
  const crusts: PizzaWithSizeOptions[] = data.crust;
  const [macrosCrust, setMacrosCrust] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [crust, setCrust] = React.useState(emptyPizza);
  const [crustName, setCrustName] = React.useState('');

  // SAUCE
  const sauces: PizzaWithSizeOptions[] = data.sauce;
  const [macrosSauce, setMacrosSauce] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [sauce, setSauce] = React.useState(emptyPizza);
  const [sauceName, setSauceName] = React.useState('');

  return (
    <>
      <PageTitle title='Build Your Own Pizza' />
      <CurrentSelection selected={[crustName, sauceName]} macros={[macrosCrust, macrosSauce]} />
      {`Viewing info for a ${size} pizza`}
      <PizzaSizeRadioButtons size={size} setSize={setSize} crust={crust} sauce={sauce} setMacros={setMacrosCrust} />
      <BYOPizzaTable
        category='crust'
        items={crusts}
        size={size}
        setSelected={setCrustName}
        setMacros={setMacrosCrust}
        setCrust={setCrust}
      />
      <BYOPizzaTable
        category='sauce'
        items={sauces}
        size={size}
        setSelected={setSauceName}
        setMacros={setMacrosSauce}
        setCrust={setSauce}
      />
    </>
  );
}
