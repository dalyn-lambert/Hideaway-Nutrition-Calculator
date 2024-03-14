'use client';
import { PizzaSizeRadioButtonsProps } from '@/lib/types';

function PizzaSizeRadioButtons({ size, setSize, crust, setMacros }: PizzaSizeRadioButtonsProps) {
  return (
    <div className='flex flex-row gap-4 justify-center'>
      <input
        type='radio'
        id='small'
        name='size'
        value='small'
        onChange={() => {
          setSize('small');
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
        }}
      />
      <label htmlFor='large'>Large</label>
    </div>
  );
}
export default PizzaSizeRadioButtons;
