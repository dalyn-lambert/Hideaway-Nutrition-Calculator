export type Category = {
  name: string;
  options: MenuItem[];
};

export type MenuItem = {
  name: string;
  calories: number;
  total_fat: number;
  saturated_fat: number;
  trans_fat: number;
  cholesterol: number;
  sodium: number;
  total_carbohydrates: number;
  dietary_fiber: number;
  sugars: number;
  protein: number;
};

export type MenuCategoryProps = { category: string; items: MenuItem[] };
