import type { ImageInputDto } from '@/share/types';

type Category = {
  id: number;
  parentId: number;
  priority: number;
  name: string;
  image: ImageInputDto;
  slug: string;
};

export type CategoryInput = Category[];

export type PrimaryCategory = Omit<Category, 'imageUrl' | 'parentId'> & { url: string };

export type SecondaryCategory = Category & { url: string };
