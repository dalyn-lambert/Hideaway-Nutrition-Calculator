import { MenuRadioButtonGroupProps } from '../lib/types';

function MenuRadioButtonGroup({ category, items, setSelected, setMacros }: MenuRadioButtonGroupProps) {
  return (
    <div>
      <table className='table-auto'>
        <thead className='uppercase'>
          <tr>
            <th></th>
            <th className='pl-4'>Name</th>
            <th className='px-4'>Cal</th>
            <th className='px-4'>Protein</th>
            <th className='px-4'>Fat</th>
            <th className='pr-4'>Carb</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td className=''>
                <input
                  className=''
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
                    setSelected(item.name);
                  }}
                />
              </td>
              <td className='pl-4'>{item.name}</td>
              <td className='text-center'>{item.calories || '-'}</td>
              <td className='text-center'>{item.protein || '-'}</td>
              <td className='text-center'>{item.total_fat || '-'}</td>
              <td className='pr-4 text-center'>{item.total_carbohydrates || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MenuRadioButtonGroup;
