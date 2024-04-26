'use client';

import BYOPizzaTable from '@/components/BYOPizzaTable';
import BYOPizzaToppings from '@/components/BYOPizzaToppings';
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

  // TOPPINGS
  const allToppings = data.toppings;
  const [macrosToppings, setMacrosToppings] = React.useState({ cal: 0, protein: 0, fat: 0, carb: 0 });
  const [toppings, setToppings] = React.useState(emptyPizza);
  const [toppingsName, setToppingsName] = React.useState(['']);

  console.log(toppingsName);

  return (
    <>
      <PageTitle title='Build Your Own Pizza' />
      <CurrentSelection selected={[crustName, sauceName]} macros={[macrosCrust, macrosSauce]} />
      {`Viewing info for one ${size} slice of pizza`}
      <PizzaSizeRadioButtons
        size={size}
        setSize={setSize}
        crust={crust}
        sauce={sauce}
        setMacrosCrust={setMacrosCrust}
        setMacrosSauce={setMacrosSauce}
      />
      <BYOPizzaTable
        category='Crust'
        items={crusts}
        size={size}
        setSelected={setCrustName}
        setMacros={setMacrosCrust}
        setIngredient={setCrust}
      />
      <BYOPizzaTable
        category='Sauce'
        items={sauces}
        size={size}
        setSelected={setSauceName}
        setMacros={setMacrosSauce}
        setIngredient={setSauce}
      />
      {allToppings.map((toppings) => (
        <BYOPizzaToppings
          key={toppings.category}
          category={toppings.category}
          items={toppings.options}
          size={size}
          setSelected={setToppingsName}
          setMacros={setMacrosToppings}
          toppingsList={toppingsName}
        />
      ))}
    </>
  );
}
