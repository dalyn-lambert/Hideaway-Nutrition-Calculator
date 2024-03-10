import React from 'react';
import { MenuWithChoiceProps } from '../lib/types';

function MenuWithChoice({ category, items, setSelected, setMacros }: MenuWithChoiceProps) {
  const [bread, setBread] = React.useState('white');
  return (
    <div className='flex flex-col items-center'>
      <span>Select your desired bread:</span>
      <div className='flex flex-row gap-4 justify-center'>
        <input
          type='radio'
          id={'white'}
          name={'bread'}
          value={'white'}
          onChange={() => {
            setBread('white');
          }}
        />
        <label htmlFor='white'>White</label>
        <input
          type='radio'
          id={'wheat'}
          name={'bread'}
          value={'wheat'}
          onChange={() => {
            setBread('wheat');
          }}
        />
        <label htmlFor='wheat'>Wheat</label>
      </div>
      <table className='table-auto'>
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
          {items.map((item) => (
            <tr key={item.name}>
              <td>
                <input
                  type='radio'
                  id={item.name}
                  name={category}
                  value={item.name}
                  onChange={() => {
                    setMacros({
                      // @ts-ignore
                      cal: item[bread].calories || 0,
                      // @ts-ignore
                      protein: item[bread].protein || 0,
                      // @ts-ignore
                      fat: item[bread].total_fat || 0,
                      // @ts-ignore
                      carb: item[bread].total_carbohydrates || 0,
                    });
                    setSelected(item.name);
                  }}
                />
              </td>
              <td className='px-2'>{item.name}</td>
              {/* @ts-ignore */}
              <td className='px-2 text-center'>{item[bread].calories || '-'}</td>
              {/* @ts-ignore */}
              <td className='px-2 text-center'>{item[bread].protein || '-'}</td>
              {/* @ts-ignore */}
              <td className='px-2 text-center'>{item[bread].total_fat || '-'}</td>
              {/* @ts-ignore */}
              <td className='px-2 text-center'>{item[bread].total_carbohydrates || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MenuWithChoice;
