import type { ImageInputDto } from '@/share/types';

export type Product = {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  price: number;
  marketingPrice: number | null;
  thumb: ImageInputDto;
};

export type ProductByIdInput = Product & {
  gallery: ImageInputDto[];
  features: {
    id: number;
    caption: string;
    value: number | boolean | string | string[];
    type: 'LIST' | 'MULTILIST' | 'NUMBER' | 'BOOLEAN' | 'STRING';
  }[];
};
