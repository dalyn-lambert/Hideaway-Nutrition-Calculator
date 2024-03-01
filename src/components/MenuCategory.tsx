import { MenuCategoryProps } from '../lib/types';

function MenuCategory({ category, items, setItem, setMacros }: MenuCategoryProps) {
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
                <input
                  type='radio'
                  id={item.name}
                  name={category}
                  value={item.name}
                  onChange={() => {
                    setMacros({
                      cal: item.calories || 0,
                      protein: item.protein || 0,
                      fat: item.total_fat || 0,
                      carb: item.total_carbohydrates || 0,
                    });
                    setItem(item.name);
                  }}
                />
              </td>
              <td className='px-2'>{item.name}</td>
              <td className='px-2 text-center'>{item.calories || '-'}</td>
              <td className='px-2 text-center'>{item.protein || '-'}</td>
              <td className='px-2 text-center'>{item.total_fat || '-'}</td>
              <td className='px-2 text-center'>{item.total_carbohydrates || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MenuCategory;
