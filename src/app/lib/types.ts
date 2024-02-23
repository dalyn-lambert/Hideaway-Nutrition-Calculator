export type menuItem = {
  name: string;
  calories: number;
  fat: number;
  saturated_fat: number;
  trans_fat: number;
  cholesterol: number;
  sodium: number;
  carbohydrates: number;
  fiber: number;
  sugar: number;
};

export type menuCategory = { category: string; items: menuItem[] };
