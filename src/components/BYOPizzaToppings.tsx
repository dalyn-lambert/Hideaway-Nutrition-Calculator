import { BYOPizzaToppingsProps } from '@/lib/types';
import { BaseSyntheticEvent } from 'react';

function BYOPizzaToppings({ key, category, items, size, setSelected, setMacros }: BYOPizzaToppingsProps) {
  // https://stackoverflow.com/a/75819497
  const handleClick = (e: BaseSyntheticEvent) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const itemMacros = items.find((item) => item.name === value);
    if (!checked) {
      setSelected('');
      setMacros({ cal: 0, protein: 0, fat: 0, carb: 0 });
    } else if (checked) {
      setSelected(value);
      setMacros({
        // @ts-ignore
        cal: itemMacros[size].calories || 0,
        // @ts-ignore
        protein: itemMacros[size].protein || 0,
        // @ts-ignore
        fat: itemMacros[size].total_fat || 0,
        // @ts-ignore
        carb: itemMacros[size].total_carbohydrates || 0,
      });
    }
  };
  return (
    <div>
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
                <input type='checkbox' id={item.name} name={category} value={item.name} />
              </td>
              <td className='px-2'>{item.name}</td>
              <td className='px-2 text-center'>
                {
                  // @ts-ignore
                  item[size].calories || '-'
                }
              </td>
              <td className='px-2 text-center'>
                {
                  // @ts-ignore
                  item[size].protein || '-'
                }
              </td>
              <td className='px-2 text-center'>
                {
                  // @ts-ignore
                  item[size].total_fat || '-'
                }
              </td>
              <td className='px-2 text-center'>
                {
                  // @ts-ignore
                  item[size].total_carbohydrates || '-'
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BYOPizzaToppings;
