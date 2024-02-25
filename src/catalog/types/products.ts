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
