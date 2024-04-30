import { BYOPizzaTableProps } from '../lib/types';

function BYOPizzaTable({ category, items, size, setSelected, setMacros, setIngredient }: BYOPizzaTableProps) {
  return (
    <div>
      <div className='uppercase text-lg font-bold text-center mb-2 border-b border-b-black w-full'>{category}</div>
      <table className='table-auto'>
        <thead className='uppercase'>
          <tr>
            <th></th>
            <th className='px-4'>Name</th>
            <th className='px-4'>Cal</th>
            <th className='px-4'>Protein</th>
            <th className='px-4'>Fat</th>
            <th className='px-4'>Carb</th>
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
                      cal: item[size].calories || 0,
                      // @ts-ignore

                      protein: item[size].protein || 0, // @ts-ignore

                      fat: item[size].total_fat || 0, // @ts-ignore

                      carb: item[size].total_carbohydrates || 0,
                    });
                    setSelected(`${item.name} ${category}`);
                    setIngredient(item);
                  }}
                />
              </td>
              <td className='px-4'>{item.name}</td>
              <td className='px-4 text-center'>
                {
                  // @ts-ignore
                  item[size].calories || '-'
                }
              </td>
              <td className='px-4 text-center'>
                {
                  // @ts-ignore
                  item[size].protein || '-'
                }
              </td>
              <td className='px-4 text-center'>
                {
                  // @ts-ignore
                  item[size].total_fat || '-'
                }
              </td>
              <td className='px-4 text-center'>
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
export default BYOPizzaTable;
