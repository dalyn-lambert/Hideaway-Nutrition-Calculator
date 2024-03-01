import { Dispatch, SetStateAction } from 'react';

export type Category = {
  name: string;
};

export type Sizes = { small: MenuItem[]; medium: MenuItem[]; large: MenuItem[] };

export type CategoryData = {
  name: string;
  options: Sizes;
};

export type MenuItem = {
  name: string;
  calories: number | null;
  calories_from_fat: number | null;
  total_fat: number | null;
  saturated_fat: number | null;
  trans_fat: number | null;
  polyunsaturated_fat: number | null;
  monounsaturated_fat: number | null;
  cholesterol: number | null;
  sodium: number | null;
  potassium: number | null;
  total_carbohydrates: number | null;
  dietary_fiber: number | null;
  sugars: number | null;
  added_sugars: number | null;
  protein: number | null;
};

export type MenuCategoryProps = {
  category: string;
  items: MenuItem[];
  setMacros: Dispatch<SetStateAction<{ cal: number; protein: number; fat: number; carb: number }>>;
  setSelected: Dispatch<SetStateAction<string>>;
};
