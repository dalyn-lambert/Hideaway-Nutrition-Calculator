// cauliflower: {
//   small: {
//     calories: 90,
//     calories_from_fat: 30,
//     total_fat: 3.5,
//     saturated_fat: 0.5,
//     trans_fat: null,
//     polyunsaturated_fat: 1.5,
//     monounsaturated_fat: 1.5,
//     cholesterol: 10,
//     sodium: 55,
//     potassium: null,
//     total_carbohydrates: 13,
//     dietary_fiber: 1,
//     sugars: null,
//     added_sugars: null,
//     protein: 1
//   }
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
