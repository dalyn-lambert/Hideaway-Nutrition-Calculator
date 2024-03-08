'use client';

import { CurrentSelectionProps } from '@/lib/types';

const CurrentSelection = ({ selected }: CurrentSelectionProps) => {
  const filteredSelected = selected.filter((selection) => selection !== '');
  const noSelectionMessage = 'Select an item to begin';

  return (
    <div className='flex flex-row gap-2'>
      {filteredSelected.length ? (
        <div className='flex flex-row gap-2'>
          {filteredSelected.map((selection, index) => (
            <span key={selection}>{selection}</span>
          ))}
        </div>
      ) : (
        noSelectionMessage
      )}
    </div>
  );
};

export default CurrentSelection;

{
  /* <div className='flex flex-row gap-2'>
{selectedFood || selectedDrink ? '' : 'Please make a selection...'}
<span>{selectedFood}</span>
{selectedFood && selectedDrink ? '&' : ''}
<span>{selectedDrink}</span>
</div> */
}
