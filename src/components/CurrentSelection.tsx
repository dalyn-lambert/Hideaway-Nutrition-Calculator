'use client';

import { Macros } from '@/lib/types';
import _ from 'lodash';

type CurrentSelectionProps = {
  selected: string[][];
  macros: Macros[][];
  size?: string;
  bread?: string;
};

const CurrentSelection = ({ selected, macros, size }: CurrentSelectionProps) => {
  const allSelected = selected.flat();
  const allMacros = macros.flat();
  const filteredSelected = allSelected.filter((selection) => selection !== '');
  const noSelectionMessage = 'Select an item to begin';
  const totalCal = _.sumBy(allMacros, 'cal');
  const totalProtein = _.sumBy(allMacros, 'protein');
  const totalFat = _.sumBy(allMacros, 'fat');
  const totalCarb = _.sumBy(allMacros, 'carb');

  return (
    <div className='flex flex-col gap-4 items-center text-center'>
      <div className='flex flex-row gap-2'>
        {filteredSelected.length ? (
          <div className='flex flex-col gap-1 items-center'>
            {size && (
              <span>
                Viewing info for one <span className='font-bold'>{size}</span>
                <span> slice of pizza with:</span>
              </span>
            )}
            <div className='flex flex-row gap-2'>
              {filteredSelected.map((selection, index) => (
                <span key={selection}>{selection}</span>
              ))}
            </div>
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
