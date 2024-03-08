import type { FilterData, FilterValue, NumberFilter } from '@/catalog/types';

const prepareNumber = (value: string | undefined, minVal: number, maxVal: number) => {
  if (value === undefined) {
    return [minVal, maxVal];
  }

  const tmp = value.split(',');
  return tmp.length === 2 && Number.isInteger(+tmp[0]) && Number.isInteger(+tmp[1])
    ? [Math.max(+tmp[0], minVal), Math.min(+tmp[1], maxVal)]
    : [minVal, maxVal];
};

const prepareBolean = (value: string | undefined) => value === null;

const prepareList = (value: string | undefined) =>
  value !== undefined && Number.isInteger(+value) ? +value : null;

const prepareMultilist = (value: string | undefined) => {
  if (value === undefined) {
    return [];
  }
  const tmp = value.split(',');
  return tmp.every((el) => Number.isInteger(+el)) ? tmp.map(Number) : [];
};

export const prepareFilterValue = (value: any, filter: FilterData): FilterValue => {
  switch (filter.type) {
    case 'NUMBER':
      return prepareNumber(
        value,
        (filter as NumberFilter).meta.minVal,
        (filter as NumberFilter).meta.maxVal
      );
    case 'BOOLEAN':
      return prepareBolean(value);
    case 'LIST':
      return prepareList(value);
    case 'MULTILIST':
      return prepareMultilist(value);
  }
};
