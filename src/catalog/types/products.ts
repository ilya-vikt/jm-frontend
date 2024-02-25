import type { ImageInputDto } from '@/share/types';

type ProductBase = {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  price: number;
  marketingPrice: number | null;
  thumb: ImageInputDto;
};

export type ProductCardInput = ProductBase;

export type ProductByIdInput = ProductBase & {
  gallery: ImageInputDto[];
  features: {
    id: number;
    name: string;
    value: number | boolean | string | string[];
    type: 'LIST' | 'MULTILIST' | 'NUMBER' | 'BOOLEAN' | 'STRING';
  }[];
};
