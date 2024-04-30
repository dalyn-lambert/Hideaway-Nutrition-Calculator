import { Macros, PizzaWithSizeOptions } from '@/lib/types';
import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';

type BYOPizzaToppingsProps = {
  category: string;
  items: PizzaWithSizeOptions[];
  size: string;
  setMacros: Dispatch<SetStateAction<Macros[]>>;
  setSelected: Dispatch<SetStateAction<string[]>>;
  setIngredient: React.Dispatch<React.SetStateAction<PizzaWithSizeOptions[]>>;
  toppingsNameList: string[];
  macrosList: Macros[];
  currentToppings: PizzaWithSizeOptions[];
};

function BYOPizzaToppings({
  category,
  items,
  size,
  currentToppings,
  setSelected,
  setMacros,
  setIngredient,
  macrosList,
  toppingsNameList,
}: BYOPizzaToppingsProps) {
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

  // https://stackoverflow.com/a/75819497
  const handleClick = (e: BaseSyntheticEvent) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const currentItem = items.find((item) => item.name === value) || emptyPizza;
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
      setSelected(toppingsNameList.filter((a) => a !== value));
      setIngredient(currentToppings.filter((a) => a.name !== value));
      removeMacros(itemMacros);
    } else if (checked) {
      setSelected([...toppingsNameList, value]);
      setMacros([...macrosList, itemMacros]);
      setIngredient([...currentToppings, currentItem]);
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
