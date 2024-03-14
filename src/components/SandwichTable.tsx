import React from 'react';
import { SandwichTableProps, SandwichWithBreadOption } from '../lib/types';

function SandwichTable({ category, items, setSelected, setMacros }: SandwichTableProps) {
  const emptySandwhich: SandwichWithBreadOption = {
    name: '',
    white: {
      name: 'white',
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
    wheat: {
      name: 'wheat',
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
  const [bread, setBread] = React.useState('white');
  const [current, setCurrent] = React.useState(emptySandwhich);
  return (
    <div className='flex flex-col items-center'>
      <span>Select your desired bread:</span>
      <div className='flex flex-row gap-4 justify-center'>
        <input
          type='radio'
          id='white'
          name='bread'
          value='white'
          onChange={() => {
            setBread('white');
            setMacros({
              // @ts-ignore
              cal: current[bread].calories || 0,
              // @ts-ignore
              protein: current[bread].protein || 0,
              // @ts-ignore
              fat: current[bread].total_fat || 0,
              // @ts-ignore
              carb: current[bread].total_carbohydrates || 0,
            });
          }}
        />
        <label htmlFor='white'>White</label>
        <input
          type='radio'
          id='wheat'
          name='bread'
          value='wheat'
          onChange={() => {
            setBread('wheat');
            setMacros({
              // @ts-ignore
              cal: current[bread].calories || 0,
              // @ts-ignore
              protein: current[bread].protein || 0,
              // @ts-ignore
              fat: current[bread].total_fat || 0,
              // @ts-ignore
              carb: current[bread].total_carbohydrates || 0,
            });
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
                    setCurrent(item);
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

export default SandwichTable;
