import { BYOPizzaToppingsProps, Macros } from '@/lib/types';
import { BaseSyntheticEvent } from 'react';

function BYOPizzaToppings({
  category,
  items,
  size,
  setSelected,
  setMacros,
  macrosList,
  toppingsList,
}: BYOPizzaToppingsProps) {
  // https://stackoverflow.com/a/75819497
  const handleClick = (e: BaseSyntheticEvent) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const currentItem = items.find((item) => item.name === value);
    const itemMacros = {
      // @ts-ignore
      cal: currentItem[size].calories || 0,
      // @ts-ignore
      protein: currentItem[size].protein || 0,
      // @ts-ignore
      fat: currentItem[size].total_fat || 0,
      // @ts-ignore
      carb: currentItem[size].total_carbohydrates || 0,
    };
    if (!checked) {
      setSelected(toppingsList.filter((a) => a !== value));
      removeMacros(itemMacros);
    } else if (checked) {
      setSelected([...toppingsList, value]);
      setMacros([...macrosList, itemMacros]);
    }
  };
  const removeMacros = (unselectedItem: Macros) => {
    console.log(unselectedItem);
    for (let i = 0; i < macrosList.length; i++) {
      if (JSON.stringify(macrosList[i]) === JSON.stringify(unselectedItem)) {
        console.log('if statement');
        macrosList.splice(i, 1);
        break;
      }
    }
    setMacros(macrosList);
  };

  return (
    <div>
      <div>{category.toLocaleUpperCase()}</div>
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
                <input type='checkbox' id={item.name} name={category} value={item.name} onClick={handleClick} />
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
