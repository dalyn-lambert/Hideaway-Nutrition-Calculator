'use client';

import { Macros, PizzaWithSizeOptions } from '@/lib/types';
import { Dispatch, SetStateAction } from 'react';

type PizzaSizeRadioButtonsProps = {
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
  setMacrosCrust: Dispatch<SetStateAction<Macros>>;
  setMacrosSauce: Dispatch<SetStateAction<Macros>>;
  setMacrosToppings: Dispatch<SetStateAction<Macros[]>>;
  crust: PizzaWithSizeOptions;
  sauce: PizzaWithSizeOptions;
  toppings: PizzaWithSizeOptions[];
};
function PizzaSizeRadioButtons({
  crust,
  sauce,
  toppings,
  setSize,
  setMacrosCrust,
  setMacrosSauce,
  setMacrosToppings,
}: PizzaSizeRadioButtonsProps) {
  const handleChange = (size: string) => {
    setSize(size);
    setMacrosCrust({
      // @ts-ignore
      cal: crust[size].calories || 0,
      // @ts-ignore
      protein: crust[size].protein || 0,
      // @ts-ignore
      fat: crust[size].total_fat || 0,
      // @ts-ignore
      carb: crust[size].total_carbohydrates || 0,
    });
    setMacrosSauce({
      // @ts-ignore
      cal: sauce[size].calories || 0,
      // @ts-ignore
      protein: sauce[size].protein || 0,
      // @ts-ignore
      fat: sauce[size].total_fat || 0,
      // @ts-ignore
      carb: sauce[size].total_carbohydrates || 0,
    });
    const newToppings = toppings.map((topping) => ({
      // @ts-ignore
      cal: topping[size].calories || 0,
      // @ts-ignore
      protein: topping[size].protein || 0,
      // @ts-ignore
      fat: topping[size].total_fat || 0,
      // @ts-ignore
      carb: topping[size].total_carbohydrates || 0,
    }));
    setMacrosToppings(newToppings);
  };
  return (
    <div className='flex flex-row gap-4 justify-center'>
      <input type='radio' id='small' name='size' value='small' onChange={() => handleChange('small')} />
      <label htmlFor='small'>Small</label>
      <input type='radio' id='medium' name='size' value='medium' onChange={() => handleChange('medium')} />
      <label htmlFor='medium'>Medium</label>
      <input type='radio' id='large' name='size' value='large' onChange={() => handleChange('large')} />
      <label htmlFor='large'>Large</label>
    </div>
  );
}
export default PizzaSizeRadioButtons;
