import { BYOPizzaTableProps } from '../lib/types';

function BYOPizzaTable({ category, items, size, setSelected, setMacros, setCrust }: BYOPizzaTableProps) {
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
                    setSelected(item.name);
                    setCrust(item);
                  }}
                />
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
export default BYOPizzaTable;
