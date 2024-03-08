export type FitlersByCategoryInput = {
  id: number;
  name: string;
  caption: string;
  type: 'LIST' | 'MULTILIST' | 'NUMBER' | 'BOOLEAN';
  meta: { minVal: number; maxVal: number } | {};
  possibleValues:
    | {
        id: number;
        value: string;
      }[]
    | null;
};

export type NumberFilter = FitlersByCategoryInput & {
  type: 'NUMBER';
  meta: { minVal: number; maxVal: number };
  possibleValues: null;
};

export type FilterData = FitlersByCategoryInput;
export type FilterValue = boolean | number | number[] | [number, number] | null;
