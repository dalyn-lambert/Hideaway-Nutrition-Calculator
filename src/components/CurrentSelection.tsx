'use client';

import { CurrentSelectionProps } from '@/lib/types';
import _ from 'lodash';

const CurrentSelection = ({ selected, macros }: CurrentSelectionProps) => {
  const filteredSelected = selected.filter((selection) => selection !== '');
  const noSelectionMessage = 'Select an item to begin';
  const totalCal = _.sumBy(macros, 'cal');
  const totalProtein = _.sumBy(macros, 'protein');
  const totalFat = _.sumBy(macros, 'fat');
  const totalCarb = _.sumBy(macros, 'carb');

  return (
    <div className='flex flex-col items-center text-center'>
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
      <div className='flex flex-row gap-2'>
        <span>{totalCal} cal</span>
        <span>{totalProtein} protein</span>
        <span>{totalFat} fat</span>
        <span>{totalCarb} carb</span>
      </div>
    </div>
  );
};

export default CurrentSelection;
