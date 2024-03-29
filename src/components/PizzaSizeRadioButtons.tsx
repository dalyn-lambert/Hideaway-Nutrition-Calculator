'use client';
import { PizzaSizeRadioButtonsProps } from '@/lib/types';

function PizzaSizeRadioButtons({ crust, sauce, setSize, setMacros }: PizzaSizeRadioButtonsProps) {
  console.log(crust);
  console.log(sauce);
  return (
    <div className='flex flex-row gap-4 justify-center'>
      <input
        type='radio'
        id='small'
        name='size'
        value='small'
        onChange={() => {
          setSize('small');
          setMacros({
            // @ts-ignore
            cal: crust.small.calories + sauce.small.calories || 0,
            // @ts-ignore
            protein: crust.small.protein + sauce.small.protein || 0,
            // @ts-ignore
            fat: crust.small.total_fat + sauce.small.total_fat || 0,
            // @ts-ignore
            carb: crust.small.total_carbohydrates + sauce.small.total_carbohydrates || 0,
          });
        }}
      />
      <label htmlFor='small'>Small</label>
      <input
        type='radio'
        id='medium'
        name='size'
        value='medium'
        onChange={() => {
          setSize('medium');
          setMacros({
            // @ts-ignore
            cal: crust.medium.calories + sauce.medium.calories || 0,
            // @ts-ignore
            protein: crust.medium.protein + sauce.medium.protein || 0,
            // @ts-ignore
            fat: crust.medium.total_fat + sauce.medium.total_fat || 0,
            // @ts-ignore
            carb: crust.medium.total_carbohydrates + sauce.medium.total_carbohydrates || 0,
          });
        }}
      />
      <label htmlFor='medium'>Medium</label>
      <input
        type='radio'
        id='large'
        name='size'
        value='large'
        onChange={() => {
          setSize('large');
          setMacros({
            // @ts-ignore
            cal: crust.large.calories + sauce.large.calories || 0,
            // @ts-ignore
            protein: crust.large.protein + sauce.large.protein || 0,
            // @ts-ignore
            fat: crust.large.total_fat + sauce.large.total_fat || 0,
            // @ts-ignore
            carb: crust.large.total_carbohydrates + sauce.large.total_carbohydrates || 0,
          });
        }}
      />
      <label htmlFor='large'>Large</label>
    </div>
  );
}
export default PizzaSizeRadioButtons;
