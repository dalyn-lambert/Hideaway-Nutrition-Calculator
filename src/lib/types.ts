import { Dispatch, SetStateAction } from 'react';

export type LinkData = { label: string; route: string };

export type NavTileProps = { link: LinkData };

export type Category = {
  name: string;
};

export type Sizes = { small: MenuItem[]; medium: MenuItem[]; large: MenuItem[] };

export type CategoryData = {
  name: string;
  options: Sizes;
};

export type SandwichWithBreadOption = {
  name: string;
  wheat: MenuItem;
  white: MenuItem;
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

export type Macros = { cal: number; protein: number; fat: number; carb: number };

export type MenuRadioButtonGroupProps = {
  category: string;
  items: MenuItem[];
  setMacros: Dispatch<SetStateAction<Macros>>;
  setSelected: Dispatch<SetStateAction<string>>;
};

export type SandwichTableProps = {
  category: string;
  items: SandwichWithBreadOption[];
  setMacros: Dispatch<SetStateAction<Macros>>;
  setSelected: Dispatch<SetStateAction<string>>;
};

export type MenuCheckboxProps = {
  category: string;
  items: MenuItem[];
  setMacros: Dispatch<SetStateAction<Macros>>;
  setSelected: Dispatch<SetStateAction<string>>;
};

export type CurrentSelectionProps = {
  selected: string[];
  macros: Macros[];
};

export type PageTitleProps = {
  title: string;
};
